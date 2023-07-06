import {Player} from './Player'

export enum FieldPositions{
    GK = "GK",
    LB = "LB",
    CB = "CB",
    RB = "RB",
    CDM = "CDM",
    LM = "LM",
    CM = "CM",
    RM = "RM",
    LW = "LW",
    CAM = "CAM",
    RW = "RW",
    ST = "ST",
    BENCH = "Bench",
    RESERVES = "Reserves"
}

export class Lineup {
    public positions: { [position in FieldPositions]: Player[] };
  
    constructor() {
      this.positions = {
        [FieldPositions.GK]: [],
        [FieldPositions.LB]: [],
        [FieldPositions.CB]: [],
        [FieldPositions.RB]: [],
        [FieldPositions.CDM]: [],
        [FieldPositions.LM]: [],
        [FieldPositions.CM]: [],
        [FieldPositions.RM]: [],
        [FieldPositions.LW]: [],
        [FieldPositions.CAM]: [],
        [FieldPositions.RW]: [],
        [FieldPositions.ST]: [],
        [FieldPositions.BENCH]: [],
        [FieldPositions.RESERVES]: []
      } as { [position in FieldPositions]: Player[] };
    }

    positionMaxes = {
        [FieldPositions.GK]: 1,
        [FieldPositions.LB]: 1,
        [FieldPositions.CB]: 3,
        [FieldPositions.RB]: 3,
        [FieldPositions.CDM]: 3,
        [FieldPositions.LM]: 1,
        [FieldPositions.CM]: 3,
        [FieldPositions.RM]: 1,
        [FieldPositions.LW]: 1,
        [FieldPositions.CAM]: 3,
        [FieldPositions.RW]: 1,
        [FieldPositions.ST]: 3,
        [FieldPositions.BENCH]: 9,
        [FieldPositions.RESERVES]: 30
    };

    public addPlayer(player: Player, position: FieldPositions): boolean {
      console.log(this.positions);
        if (this.positionMaxes[position] && this.positions[position].length >= this.positionMaxes[position]) {
          return false;
            throw new Error(`Cannot add more players to position ${position}. Quota reached.`);
        }

        if (this.numStarters >= 11) {
          return false;
            throw new Error("Cannot add more starters. Limit reached.");
        }
    
        this.positions[position].push(player);
        return true;
      }

      public removePlayer(player: Player): void {
        for (const position in this.positions) {
            const players = this.positions[position as FieldPositions];
            const index = players.findIndex((p) => p.id === player.id);
            if (index !== -1) {
              players.splice(index, 1);
              break; // Stop searching after removing the player from the first position found
            }
        }
      }

    public swapPlayers(player1: Player, player2: Player): void {
        let foundPlayer1 = false;
        let foundPlayer2 = false;
      
        for (const position in this.positions) {
          const players = this.positions[position as FieldPositions];
          const index1 = players.findIndex(p => p.id === player1.id);
          const index2 = players.findIndex(p => p.id === player2.id);
      
          if (index1 !== -1) {
            players[index1] = player2;
            foundPlayer1 = true;
          }
      
          if (index2 !== -1) {
            players[index2] = player1;
            foundPlayer2 = true;
          }
      
          if (foundPlayer1 && foundPlayer2) {
            break;
          }
        }
    }

    get numStarters(): number {
        let playerCount = 0;
    
        for (const position in this.positions) {
          if (position !== FieldPositions.BENCH && position !== FieldPositions.RESERVES) {
            playerCount += this.positions[position as FieldPositions].length;
          }
        }
    
        return playerCount;
      }

    public isValid(): boolean {
        const gkCount = this.positions[FieldPositions.GK].length;
        return this.numStarters === 11 && gkCount === 1 && !this.injuredStarters;
    }

    get injuredStarters(): boolean {
        for (const position in this.positions) {
          if (position !== FieldPositions.BENCH && position !== FieldPositions.RESERVES) {
            const players = this.positions[position as FieldPositions];
            for (const player of players) {
              if (player.injured) {
                return true;
              }
            }
          }
        }
    
        return false;
      }

  }
  