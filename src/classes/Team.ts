import {Player} from './Player'
import { generatePlayer} from '../scripts/GeneratePlayers';
import { Lineup} from './Lineup';
import {Formation, formationList} from './Formations'
import { League } from './League';
import { PlayerPosition } from '../constants/positions';
import { PlayerAttribute } from '../constants/attributes';

export class Team {
    constructor(
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

    savedLineup: Lineup | null = null;
    savedFormation: Formation | null = null;

    get formation(): Formation {
      // return formationList[0];
      const opt = this.optimalFormation();
      this.savedFormation = opt;
      return opt;
    }

    get lineup(): Lineup{
      if (this.savedLineup != null){
        this.savedLineup.optimizeLineup();
        return this.savedLineup;
      }
      return this.getOptimalLineup(this.roster, this.formation);
    }

    optimalFormation(): Formation{
      let maxOverall = 0;
      let bestFormation = null;
      for (let i = 0; i < formationList.length; i++){
        const form = formationList[i];
        const lineup = this.getOptimalLineup(this.roster, form);
        const lineupOverall = lineup.starterOverall;
        if (lineupOverall > maxOverall){
          maxOverall = lineupOverall;
          bestFormation = form;
        }
      }
      if (bestFormation == null){throw new Error("No formations found")}
      return bestFormation;
    }

    autophagy(){
      const newPlayers: Player[] = [];
      this.roster = this.roster.filter(player => {
        if (player.age > 30 && player.overallRating < (this.reputation**.99)/2) {
          const newPosition = player.position;
          const newPlayer = generatePlayer(this, newPosition, this.reputation ** 0.99, 17, 21);
          newPlayers.push(newPlayer);
          console.log(`${this.name} replaced ${player.lastName} (${player.overallRating}) with ${newPlayer.lastName} (${newPlayer.overallRating}). Attribute change of ${newPlayer.overallRating - player.overallRating}`);
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
        this.savedLineup = null;
        this.savedFormation = null;
    }

    // move this to lineup class
    public getOptimalLineup(players: Player[], formation: Formation): Lineup {
      const lineup = new Lineup();
      const selectedPlayers: Set<string> = new Set(); // Track selected players
      const positionRequirements = formation.positionRequirements;
      const healthyPlayers = players.filter(p => p.injured == false);
      // Sort players by their overall ratings at each position
      const sortedPlayers: { [position in PlayerPosition]: Player[] } = {
        GK: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.GK)).sort((a, b) => b.overallAtPosition(PlayerPosition.GK) - a.overallAtPosition(PlayerPosition.GK)),
        LB: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.LB)).sort((a, b) => b.overallAtPosition(PlayerPosition.LB) - a.overallAtPosition(PlayerPosition.LB)),
        CB: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.CB)).sort((a, b) => b.overallAtPosition(PlayerPosition.CB) - a.overallAtPosition(PlayerPosition.CB)),
        RB: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.RB)).sort((a, b) => b.overallAtPosition(PlayerPosition.RB) - a.overallAtPosition(PlayerPosition.RB)),
        CDM: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.CDM)).sort((a, b) => b.overallAtPosition(PlayerPosition.CDM) - a.overallAtPosition(PlayerPosition.CDM)),
        LM: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.LM)).sort((a, b) => b.overallAtPosition(PlayerPosition.LM) - a.overallAtPosition(PlayerPosition.LM)),
        CM: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.CM)).sort((a, b) => b.overallAtPosition(PlayerPosition.CM) - a.overallAtPosition(PlayerPosition.CM)),
        RM: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.RM)).sort((a, b) => b.overallAtPosition(PlayerPosition.RM) - a.overallAtPosition(PlayerPosition.RM)),
        LW: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.LW)).sort((a, b) => b.overallAtPosition(PlayerPosition.LW) - a.overallAtPosition(PlayerPosition.LW)),
        CAM: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.CAM)).sort((a, b) => b.overallAtPosition(PlayerPosition.CAM) - a.overallAtPosition(PlayerPosition.CAM)),
        RW: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.RW)).sort((a, b) => b.overallAtPosition(PlayerPosition.RW) - a.overallAtPosition(PlayerPosition.RW)),
        ST: healthyPlayers.filter(player => player.overallAtPosition(PlayerPosition.ST)).sort((a, b) => b.overallAtPosition(PlayerPosition.ST) - a.overallAtPosition(PlayerPosition.ST)),
      };

      // Select the top players based on the position requirements
      for (const position in positionRequirements) {
        const numPlayersRequired = positionRequirements[position as PlayerPosition];
        const positionPlayers = sortedPlayers[position as PlayerPosition];
        const eligiblePlayers = positionPlayers.filter(player => !selectedPlayers.has(player.id)); // Exclude already selected players

        for (let i = 0; i < numPlayersRequired; i++){
          lineup.addStarter(eligiblePlayers[i], position as PlayerPosition)
        }
    
        // Add selected players to the set of selected players
        eligiblePlayers.slice(0, numPlayersRequired).forEach(player => {
          selectedPlayers.add(player.id);
        });
      }

      const sortedRemaining = healthyPlayers.filter(player => !selectedPlayers.has(player.id)).sort((a, b) => b.overallRating - a.overallRating);
      for (let i = 0; i < 9; i++){
        let player = sortedRemaining[i]
        lineup.addToBench(player);
        selectedPlayers.add(player.id);
      }

      lineup.reserves = players.filter(player => !selectedPlayers.has(player.id));

      lineup.optimizeLineup();
      this.savedLineup = lineup;
      return lineup;
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
        [PlayerAttribute.Defending]: userWTS[PlayerAttribute.Defending] / lgAVGWTS[PlayerAttribute.Defending],
        [PlayerAttribute.Mental]: userWTS[PlayerAttribute.Mental] / lgAVGWTS[PlayerAttribute.Mental],
        [PlayerAttribute.Passing]: userWTS[PlayerAttribute.Passing] / lgAVGWTS[PlayerAttribute.Passing],
        [PlayerAttribute.Physical]: userWTS[PlayerAttribute.Physical] / lgAVGWTS[PlayerAttribute.Physical],
        [PlayerAttribute.Shooting]: userWTS[PlayerAttribute.Shooting] / lgAVGWTS[PlayerAttribute.Shooting],
        [PlayerAttribute.Speed]: userWTS[PlayerAttribute.Speed] / lgAVGWTS[PlayerAttribute.Speed]
      }
      return attributeTotals;
    }
  }
