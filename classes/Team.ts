import {Player, PlayerGoalkeeper, PlayerOutfield, PlayerPosition} from './Player'
import { generatePlayer} from '../scripts/GeneratePlayers';
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

    extraReserves: Player[] = []; // extra players for injury crises

    resetStandingsInfo(): void{
        this.standingsInfo = {wins:0, losses:0, draws:0, goalsFor:0, goalsAgainst:0}
    }

    newYear(year:number): void{
        this.resetStandingsInfo();
        for (const player of this.roster){
            player.progress(year);
        }
    }

    handleInjuries(){
      for (const player of this.roster){
        if (player.injured){
          player.injuryTime--;
          if (player.injuryTime == 0){
            player.injured = false;
          }
        }
      }
      // very basic
      for (const player of this.startingLineup){
        if (player instanceof PlayerGoalkeeper && Math.random() < 0.005){
          player.injured = true;
          player.injuryTime = Math.floor(Math.random() * 10) + 1;
        } else
        if (!player.injured && Math.random() < 0.01){
          player.injured = true;
          player.injuryTime = Math.floor(Math.random() * 10) + 1;
        }
      }
      for (const player of this.extraReserves){
        player.injured = false;
        player.injuryTime = 0;
      }
    }

    positionQuotas: { [position in PlayerPosition]: number } = {
        [PlayerPosition.GK]: 1,
        [PlayerPosition.DF]: 4,
        [PlayerPosition.MF]: 3,
        [PlayerPosition.FW]: 3,
      };

    get startingLineup(): Player[] {
      const healthyPlayers = this.roster.filter(p => !p.injured);
      const sortedPlayers = healthyPlayers.sort((a, b) => b.overallRating - a.overallRating);
      const lineup: Player[] = [];

      // Select the goalkeeper

      const positionQuotas = this.positionQuotas;

      const filledPositions: { [position in PlayerPosition]: number } = {
        [PlayerPosition.GK]: 0,
        [PlayerPosition.DF]: 0,
        [PlayerPosition.MF]: 0,
        [PlayerPosition.FW]: 0,
      };

      // Select players for each position until the lineup has 11 players
      for (const player of sortedPlayers) {
        if (lineup.length >= 11) {
          break;
        }

        if (filledPositions[player.position] < positionQuotas[player.position]) {
          lineup.push(player);
          filledPositions[player.position]++;
        }
      }

      if (lineup.length < 11){
        console.log(`${this.name} cannot fill lineup — calling up youth player(s)`)
        for (let pos in filledPositions){
          while (filledPositions[pos as PlayerPosition] < positionQuotas[pos as PlayerPosition]){
            const playersInExtraReserves = this.extraReserves.filter(p => p.position === pos && !p.injured && !lineup.includes(p));
            while (playersInExtraReserves.length > 0 && filledPositions[pos as PlayerPosition] < positionQuotas[pos as PlayerPosition]){
              let extraPlayer = playersInExtraReserves.shift();
              if (extraPlayer){lineup.push(extraPlayer)};
              filledPositions[pos as PlayerPosition]++;
            }
            if (pos == PlayerPosition.GK){
              for (let i = 0; i < positionQuotas[pos] - filledPositions[pos]; i++){
                const gk = generatePlayer(this, pos, this.reputation*0.66,16,16);
                this.extraReserves.push(gk);
                lineup.push(gk);
                filledPositions[pos]++;
              }
            }
            if (pos == PlayerPosition.DF){
              for (let i = 0; i < positionQuotas[pos] - filledPositions[pos]; i++){
                const df = generatePlayer(this, pos, this.reputation*0.66,16,16);
                this.extraReserves.push(df);
                lineup.push(df);
                filledPositions[pos]++;
              }
            }
            if (pos == PlayerPosition.MF){
              for (let i = 0; i < positionQuotas[pos] - filledPositions[pos]; i++){
                const mf = generatePlayer(this, pos, this.reputation*0.66,16,16);
                this.extraReserves.push(mf);
                lineup.push(mf);
                filledPositions[pos]++;
              }
            }
            if (pos == PlayerPosition.FW){
              for (let i = 0; i < positionQuotas[pos] - filledPositions[pos]; i++){
                const fw = generatePlayer(this, pos, this.reputation*0.8,16,16);
                this.extraReserves.push(fw);
                lineup.push(fw);
                filledPositions[pos]++;
              }
            }
          }
        }
      }
      return lineup;
  }    

get subsBench(): Player[] {
    const lineupPlayers = this.startingLineup;
    const nonLineupPlayers = this.roster.filter(p => !lineupPlayers.includes(p) && !p.injured)
    const sortedPlayers = nonLineupPlayers.sort((a, b) => b.overallRating - a.overallRating);
    const subsBench: Player[] = [];
  
    // Select the best players for the subs bench
    const goalkeeper = sortedPlayers.find(player => player.position === PlayerPosition.GK);
    if (goalkeeper) {
        subsBench.push(goalkeeper);
    }

    for (const player of sortedPlayers) {
      if (subsBench.length >= 9) {
        break;
      }
  
      if (player.position === 'GK' && subsBench.some(p => p.position === PlayerPosition.GK)) {
        // Skip adding another goalkeeper if one is already on the subs bench
        continue;
      }
  
      if (!lineupPlayers.includes(player)) {
        subsBench.push(player);
      }
    }
  
    return subsBench;
  }
  
      
    // standings info

    get points():number{ 
        return this.standingsInfo.wins*3 + this.standingsInfo.draws;
    }

    get goalDiff():number{
        return this.standingsInfo.goalsFor - this.standingsInfo.goalsAgainst;
    }

    addPlayer(player: Player): void {
        this.roster.push(player);
      }

    get teamAttackingTotal(): number{
        let sum = 0;
        for (const player of this.startingLineup){
            if (player.position == PlayerPosition.GK){
                0;
            }
            if (player.position == PlayerPosition.DF){
                sum += player.attributes.attacking * 0.125;
            }
            if (player.position == PlayerPosition.MF){
                sum += player.attributes.attacking * 0.5;
            }
            if (player.position == PlayerPosition.FW){
                sum += player.attributes.attacking * 1;
            }
        }
        return sum;
    }

    get teamPlaymakingTotal(): number{
        let sum = 0;
        for (const player of this.startingLineup){
            if (player.position == PlayerPosition.GK){
                0;
            }
            if (player.position == PlayerPosition.DF){
                sum += player.attributes.playmaking * 0.25;
            }
            if (player.position == PlayerPosition.MF){
                sum += player.attributes.playmaking * 1;
            }
            if (player.position == PlayerPosition.FW){
                sum += player.attributes.playmaking * 0.5;
            }
        }
        return sum;
    }

    get teamDefenseTotal(): number{
        let sum = 0;
        for (const player of this.startingLineup){
            if (player instanceof PlayerGoalkeeper){
                sum += player.goalkeeping * 2;
            }
            if (player.position == PlayerPosition.DF){
                sum += player.attributes.defending * 1;
            }
            if (player.position == PlayerPosition.MF){
                sum += player.attributes.defending * 0.5;
            }
            if (player.position == PlayerPosition.FW){
                sum += player.attributes.defending * 0.125;
            }
        }
        return sum;
    }

    get teamPhysicalTotal(): number{
        let sum = 0;
        for (const player of this.startingLineup){
            if (player instanceof PlayerOutfield){
                sum += player.attributes.physical;
            }
        }
        return sum;
    }

    get startingGoalkeeper(): PlayerGoalkeeper {
        for (const player of this.startingLineup) {
          if (player instanceof PlayerGoalkeeper) {
            return player;
          }
        }
        throw new Error("No starting goalkeeper found"); // Throw an error if no goalkeeper is found
      }
}
