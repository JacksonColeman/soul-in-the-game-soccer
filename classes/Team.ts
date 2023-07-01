import {Player, PlayerGoalkeeper, PlayerOutfield} from './Player'

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

    resetStandingsInfo(): void{
        this.standingsInfo = {wins:0, losses:0, draws:0, goalsFor:0, goalsAgainst:0}
    }

    newYear(year:number): void{
        this.resetStandingsInfo();
        for (const player of this.roster){
            player.progress(year);
        }
    }

    get startingLineup(): Player[]{
        return this.roster
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
        for (const player of this.roster){
            if (player.position == "GK"){
                0;
            }
            if (player.position == "DF"){
                sum += player.attributes.attacking * 0.125;
            }
            if (player.position == "MF"){
                sum += player.attributes.attacking * 0.5;
            }
            if (player.position == "FW"){
                sum += player.attributes.attacking * 1;
            }
        }
        return sum;
    }

    get teamPlaymakingTotal(): number{
        let sum = 0;
        for (const player of this.roster){
            if (player.position == "GK"){
                0;
            }
            if (player.position == "DF"){
                sum += player.attributes.playmaking * 0.25;
            }
            if (player.position == "MF"){
                sum += player.attributes.playmaking * 1;
            }
            if (player.position == "FW"){
                sum += player.attributes.playmaking * 0.5;
            }
        }
        return sum;
    }

    get teamDefenseTotal(): number{
        let sum = 0;
        for (const player of this.roster){
            if (player instanceof PlayerGoalkeeper){
                sum += player.goalkeeping * 2;
            }
            if (player.position == "DF"){
                sum += player.attributes.defending * 1;
            }
            if (player.position == "MF"){
                sum += player.attributes.defending * 0.5;
            }
            if (player.position == "FW"){
                sum += player.attributes.defending * 0.125;
            }
        }
        return sum;
    }

    get teamPhysicalTotal(): number{
        let sum = 0;
        for (const player of this.roster){
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

    // teamOffenseRatio(league: League): number{
    //     return (this.teamOffenseTotal / league.averageOffense) ** 2;
    // }

    // teamDefenseRatio(league: League): number{
    //     return (league.averageDefense / this.teamDefenseTotal) ** 2;
    // }
    
}
