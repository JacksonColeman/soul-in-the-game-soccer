import {Player} from './Player'

export class Team {
    constructor(
        public name: string, 
        public stadium: string,
        public reputation: number,
        public roster: Player[]
    ) {}

    addPlayer(player: Player): void {
        this.roster.push(player);
      }
}
