import {Player} from './Player'
import { generatePlayer} from '../scripts/GeneratePlayers';
import { Lineup} from './Lineup';
import {Formation} from './Formations';
import { League } from './League';
import { PlayerAttribute } from '../constants/attributes';
import { Manager } from './Manager';
import { PlayerPosition } from '../constants/positions';
import { formatCurrency } from '../scripts/formatCurrency';
import { Transfer } from './Transfer';

export class Team {

    constructor(
        public league: League,
        public id: number,
        public name: string, 
        public stadium: string,
        public reputation: number,
        public roster: Player[],
        public standingsInfo: {wins:number, losses:number, draws:number, goalsFor:number, goalsAgainst:number} =
        {wins:0, losses:0, draws:0, goalsFor:0, goalsAgainst:0}
    ) {
    }

    user = false;
    inMatch = false;
    inMatchStats = {
      matchMinutes: 0,
      matchGoals: 0
    }
    transferBudget = 0;

    resetTransferBudget(): void{
      let repMultiplier = 1.002 ** this.reputation;
      this.transferBudget = this.reputation * repMultiplier * this.league.transferSpendMultiplier;
    }
    
    public manager: Manager | null = null; 
    lineupCalls = 0;
    savedLineup: Lineup | null = null;
    savedFormation: Formation | null = null;

    get formation(): Formation {
      if (this.manager != null){
        return this.manager.preferredFormation;
      }
      throw new Error("No manager!")
    }

    get lineup(): Lineup{
      this.lineupCalls++;
      if (this.savedLineup && this.inMatch){
        return this.savedLineup;
      }
      if (this.savedLineup != null){
        this.savedLineup.optimizeLineup();
        return this.savedLineup;
      }
      const ln = new Lineup(this.roster, this.formation);
      ln.buildNaiveLineup();
      ln.optimizeLineup();
      this.savedLineup = ln;
      return ln;
    }

    // optimalFormation(): Formation{
    //   let maxOverall = 0;
    //   let bestFormation = null;
    //   for (let i = 0; i < formationList.length; i++){
    //     const form = formationList[i];
    //     const lineup = this.getOptimalLineup(form);
    //     const lineupOverall = lineup.starterOverall;
    //     if (lineupOverall > maxOverall){
    //       maxOverall = lineupOverall;
    //       bestFormation = form;
    //     }
    //   }
    //   if (bestFormation == null){throw new Error("No formations found")}
    //   return bestFormation;
    // }

    autophagy(){
      const newPlayers: Player[] = [];
      this.roster = this.roster.filter(player => {
        if (player.retired) {
          const newPosition = player.position;
          const newPlayerAbility = (this.reputation + 100)/2 - 30
          const newPlayer = generatePlayer(this, newPosition, newPlayerAbility, 17, 21);
          newPlayers.push(newPlayer);
          console.log(`${this.name} replaced retiring ${player.lastName} (Age ${player.age}) (${player.overallRating}) with ${newPlayer.lastName} (${newPlayer.overallRating}). Attribute change of ${newPlayer.overallRating - player.overallRating}`);
          return false; // Remove the player from the roster
        }
        return true; // Keep the player in the roster
      });
      this.roster = this.roster.concat(newPlayers); //add new players
    }

    resetStandingsInfo(): void{
        this.standingsInfo = {wins:0, losses:0, draws:0, goalsFor:0, goalsAgainst:0}
    }

    newYear(year:number): void{
        this.resetStandingsInfo();
        for (const player of this.roster){
            player.progress(year);
        }
        this.autophagy();
        this.resetTransferBudget();
        this.savedLineup = null;
        this.savedFormation = null;
    }

    
    identifyTransferTargets(potentialTargets: Player[]): void {
      potentialTargets = potentialTargets.filter(p => !p.transferred && p.team != this && !p.retired) // filter already transferred players and players on same team // and if retired players sneak in somehow

      const transferTargets: Player[] = [];
      const valueDifferences: number[] = [];
      const positionRequirements = this.manager?.preferredFormation.positionRequirements;
    
      for (const position in positionRequirements) {
        const requiredPlayers = positionRequirements[position as PlayerPosition];
        if (requiredPlayers > 0) {
          const playersAtPosition = this.roster.filter((player) => player.position === position);
          playersAtPosition.sort((a, b) => b.value - a.value); // Sort players by value in descending order
          const replacementPlayer = playersAtPosition[requiredPlayers - 1];
          let replacementPlayerValue = 0;
          if (!replacementPlayer) {
            replacementPlayerValue = this.reputation * 100000;
          } else {
            replacementPlayerValue = replacementPlayer.value;
          }
    
          // Iterate through players in playerArray within the transfer budget and higher value than team's best
          const potentialPositionTargets = potentialTargets.filter(p => p.position === position);
          for (const player of potentialPositionTargets) {
            if (player.value > replacementPlayerValue && player.marketValue <= this.transferBudget*(2/3)) { //can't spend more than 2/3 of budget on one player
              const valueDifference = (player.value - replacementPlayerValue) / player.marketValue;
              transferTargets.push(player);
              valueDifferences.push(valueDifference);
            }
          }
        }
      }
    
      // Sort the transfer targets based on value difference in descending order
      const sortedTransferTargets = transferTargets.sort((a, b) => {
        const indexA = transferTargets.indexOf(a);
        const indexB = transferTargets.indexOf(b);
        return valueDifferences[indexB] - valueDifferences[indexA];
      });
    
      // Set top twenty targets
      const topTwentyTargets = sortedTransferTargets.slice(0, 20);

      for (const target of topTwentyTargets) {
        target.transferInterest.add(this.id);
      }
    
      this.transferTargets = topTwentyTargets;
    }
    transferTargets: Player[] = [];

    makeTransferOffers(){
      let transferTargetsCopy = [...this.transferTargets];
      let accepted = false;
      while (!accepted && transferTargetsCopy.length > 0){
        const p = transferTargetsCopy.shift();
        if (!p || !p.team){throw new Error("No player in transfer list")}
        if (p.transferred){
          continue;
        }
        if (Math.random() > 0.5){
          console.log(`${this.name} sign ${p.name} (${p.position} ${p.overallRating}) from ${p.team.name} for ${formatCurrency(p.marketValue)}`)
          const t = new Transfer(p, this, p.team, p.marketValue);
          t.processTransfer();
          p.transfer = t;
          accepted = true;
        }
      }
    }

    get points():number{ 
        return this.standingsInfo.wins*3 + this.standingsInfo.draws;
    }

    get goalDiff():number{
        return this.standingsInfo.goalsFor - this.standingsInfo.goalsAgainst;
    }

    attributeRatios(league: League){
      const lgAVGWTS = league.weightedAttributeTotals;
      const userWTS = this.lineup.weightedAttributeTotals;
      const attributeTotals = {
        //gk
        [PlayerAttribute.GKAgility]: userWTS[PlayerAttribute.GKAgility] / lgAVGWTS[PlayerAttribute.GKAgility],
        [PlayerAttribute.GKHandling]: userWTS[PlayerAttribute.GKHandling] / lgAVGWTS[PlayerAttribute.GKHandling],
        [PlayerAttribute.GKKicking]: userWTS[PlayerAttribute.GKKicking] / lgAVGWTS[PlayerAttribute.GKKicking],
        [PlayerAttribute.GKReach]: userWTS[PlayerAttribute.GKReach] / lgAVGWTS[PlayerAttribute.GKReach],
        [PlayerAttribute.GKReflexes]: userWTS[PlayerAttribute.GKReflexes] / lgAVGWTS[PlayerAttribute.GKReflexes],
        [PlayerAttribute.GKPositioning]: userWTS[PlayerAttribute.GKPositioning] / lgAVGWTS[PlayerAttribute.GKPositioning],
        // of
        [PlayerAttribute.Defending]: userWTS[PlayerAttribute.Defending] / lgAVGWTS[PlayerAttribute.Defending],
        [PlayerAttribute.Mental]: userWTS[PlayerAttribute.Mental] / lgAVGWTS[PlayerAttribute.Mental],
        [PlayerAttribute.Passing]: userWTS[PlayerAttribute.Passing] / lgAVGWTS[PlayerAttribute.Passing],
        [PlayerAttribute.Physical]: userWTS[PlayerAttribute.Physical] / lgAVGWTS[PlayerAttribute.Physical],
        [PlayerAttribute.Shooting]: userWTS[PlayerAttribute.Shooting] / lgAVGWTS[PlayerAttribute.Shooting],
        [PlayerAttribute.Speed]: userWTS[PlayerAttribute.Speed] / lgAVGWTS[PlayerAttribute.Speed]
      }
      return attributeTotals;
    }

    public getPlayerByID(id: string): Player | undefined {
      return this.roster.find((player) => player.id === id);
    }
  }
