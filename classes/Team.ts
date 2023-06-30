import {Player, PlayerGoalkeeper, PlayerOutfield} from './Player'

export class Team {
    constructor(
        public id: number,
        public name: string, 
        public stadium: string,
        public reputation: number,
        public roster: Player[],
        public standingsInfo: {wins:number, losses:number, draws:number, goalsFor:number, goalsAgainst:number}
    ) {}

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

    get teamOffenseTotal():number{
        console.log(this.name);
        console.log(`Attacking total: ${this.teamAttackingTotal} | Playmaking total: ${this.teamPlaymakingTotal}`)
        return (this.teamAttackingTotal + this.teamPlaymakingTotal)/2;
    }

    get teamAttackingTotal(): number{
        let sum = 0;
        for (const player of this.roster){
            if (player instanceof PlayerOutfield){
                sum += player.attributes.attacking;
            }
        }
        return sum;
    }

    get teamPlaymakingTotal(): number{
        let sum = 0;
        for (const player of this.roster){
            if (player instanceof PlayerOutfield){
                sum += player.attributes.playmaking;
            }
        }
        return sum;
    }

    get teamDefenseTotal(): number{
        let sum = 0;
        for (const player of this.roster){
            if (player instanceof PlayerGoalkeeper){
                sum += player.goalkeeping;
            }
            if (player instanceof PlayerOutfield){
                sum += player.attributes.defending;
            }
        }
        return sum;
    }

    // teamOffenseRatio(league: League): number{
    //     return (this.teamOffenseTotal / league.averageOffense) ** 2;
    // }

    // teamDefenseRatio(league: League): number{
    //     return (league.averageDefense / this.teamDefenseTotal) ** 2;
    // }
    
}
