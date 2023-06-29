import { League } from './League';
import {Player, PlayerGoalkeeper, PlayerOutfield} from './Player'

export class Team {
    constructor(
        public id: number,
        public name: string, 
        public stadium: string,
        public reputation: number,
        public roster: Player[]
    ) {}

    // standings info
    wins = 0;
    losses = 0;
    draws = 0;
    goalsFor = 0;
    goalsAgainst = 0;

    get points():number{ 
        return this.wins*3 + this.draws;
    }

    get goalDiff():number{
        return this.goalsFor - this.goalsAgainst;
    }

    addPlayer(player: Player): void {
        this.roster.push(player);
      }

    get teamOffenseTotal(): number{
        let sum = 0;
        for (const player of this.roster){
            if (player instanceof PlayerOutfield){
                sum += player.attributes.attacking;
            }
        }
        return sum;
    }

    get teamDefenseTotal(): number{
        let sum = 0;
        for (const player of this.roster){
            if (player instanceof PlayerGoalkeeper){
                sum += player.attributes.goalkeeping;
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
