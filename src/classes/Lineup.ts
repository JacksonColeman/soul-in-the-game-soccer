import {Player, PlayerGoalkeeper} from './Player'
import { PlayerAttribute } from '../constants/attributes';
import { PlayerPosition } from '../constants/positions';

export class Lineup {
    public starters: { [position in PlayerPosition]: Player[] };
    public bench: Player[];
    public reserves: Player[];
    maxBenchSize = 9;
  
    constructor() {
      this.starters = {
        [PlayerPosition.GK]: [],
        [PlayerPosition.LB]: [],
        [PlayerPosition.CB]: [],
        [PlayerPosition.RB]: [],
        [PlayerPosition.CDM]: [],
        [PlayerPosition.LM]: [],
        [PlayerPosition.CM]: [],
        [PlayerPosition.RM]: [],
        [PlayerPosition.LW]: [],
        [PlayerPosition.CAM]: [],
        [PlayerPosition.RW]: [],
        [PlayerPosition.ST]: [],
      } as { [position in PlayerPosition]: Player[] };
      this.bench = [];
      this.reserves = [];
    }

    positionMaxes = {
        [PlayerPosition.GK]: 1,
        [PlayerPosition.LB]: 1,
        [PlayerPosition.CB]: 3,
        [PlayerPosition.RB]: 3,
        [PlayerPosition.CDM]: 3,
        [PlayerPosition.LM]: 1,
        [PlayerPosition.CM]: 3,
        [PlayerPosition.RM]: 1,
        [PlayerPosition.LW]: 1,
        [PlayerPosition.CAM]: 3,
        [PlayerPosition.RW]: 1,
        [PlayerPosition.ST]: 3,
    };

    get allPlayers(){
      return this.starterArray.concat(this.bench.concat(this.reserves))
    }

    get starterArray(){
      const starterArray = [];
      for (const position in this.starters) {
        for (const player of this.starters[position as PlayerPosition]){
          starterArray.push(player);
        }
      }
      return starterArray;
    }

    get starterOverall(){
      let sum = 0;
      for (const position in this.starters) {
        for (const player of this.starters[position as PlayerPosition]){
          sum += player.overallAtPosition(position as PlayerPosition);
        }
      }
      return Math.floor(sum/11);
    }

    public addStarter(player: Player, position: PlayerPosition): boolean {
        if (this.positionMaxes[position] && this.starters[position].length >= this.positionMaxes[position]) {
          return false;
            throw new Error(`Cannot add more players to position ${position}. Quota reached.`);
        }

        if (this.numStarters >= 11) {
          return false;
            throw new Error("Cannot add more starters. Limit reached.");
        }
    
        this.starters[position].push(player);
        player.fieldPosition = position;
        return true;
      }

      public addToBench(player: Player){
        if (this.bench.length < this.maxBenchSize){
          this.bench.push(player);
        }
      }

      get startingGoalkeeper(): PlayerGoalkeeper{
        const gk = this.starters[PlayerPosition.GK][0];
        if (gk instanceof PlayerGoalkeeper){
          return gk;
        }
        console.log(this.starters[PlayerPosition.GK])
        throw new Error("No starting goalkeeper!");
      }

      public removePlayer(player: Player): void {
        for (const position in this.starters) {
            const players = this.starters[position as PlayerPosition];
            const index = players.findIndex((p) => p.id === player.id);
            if (index !== -1) {
              players.splice(index, 1);
              break; // Stop searching after removing the player from the first position found
            }
        }
      }

      public swapStarters(player1: Player, player2: Player): void {
        let foundPlayer1 = false;
        let foundPlayer2 = false;
        let p1Pos = player1.fieldPosition;
        let p2Pos = player2.fieldPosition;
      
        // Swapping players within starters
        for (const position in this.starters) {
          const players = this.starters[position as PlayerPosition];
          const index1 = players.findIndex(p => p.id === player1.id);
          const index2 = players.findIndex(p => p.id === player2.id);
      
          if (index1 !== -1) {
            players[index1] = player2;
            foundPlayer1 = true;
            player2.fieldPosition = p1Pos;
          }
      
          if (index2 !== -1) {
            players[index2] = player1;
            foundPlayer2 = true;
            player1.fieldPosition = p2Pos;
          }
      
          if (foundPlayer1 && foundPlayer2) {
            return; // Swapped within starters
          }
        }
      }

    public SwapStarterToBench(starter: Player, benchPlayer: Player){
      let index1 = -1;
      let index2 = -1;
      // find bench index
      index2 = this.bench.findIndex(p => p.id === benchPlayer.id);
      
      // find starter index
      for (const position in this.starters) {
        const players = this.starters[position as PlayerPosition];
        index1 = players.findIndex(p => p.id === starter.id);
        if (index1 !== -1 && index2 != -1) {
          players[index1] = benchPlayer;
          benchPlayer.fieldPosition = starter.fieldPosition;
          this.bench[index2] = starter;
          starter.fieldPosition = null;
          return;
        }
      }
    }

    public SwapBenchToReserve(benchPlayer: Player, reservePlayer: Player){
      let index1 = -1;
      let index2 = -1;
      // find bench index
      index1 = this.bench.findIndex(p => p.id === benchPlayer.id);
      index2 = this.reserves.findIndex(p => p.id === benchPlayer.id);
      if (index1 !== -1 && index2 != -1) {
        this.bench[index1] = reservePlayer;
        this.reserves[index2] = benchPlayer;
        return;
      }
    }

    evaluateSwap(player1: Player, player2: Player): boolean {

      const getPosition = (player: Player): PlayerPosition | undefined => {
        if (this.bench.includes(player) || this.reserves.includes(player)){
          return undefined;
        }
        for (const position in this.starters) {
          if (this.starters[position as PlayerPosition].includes(player)) {
            return position as PlayerPosition;
          }
        }
        throw new Error("Player not in lineup!");
      };
  
      const oldPosition1 = getPosition(player1);
      const oldPosition2 = getPosition(player2);

      let overall1 = 0, overall2 = 0;

      if (player1.injured){
        overall1 = 0;
      } else {
        overall1 = player1.effectiveOverallAtPosition(oldPosition2) - player1.effectiveOverallAtPosition(oldPosition1);
      }

      if (player2.injured){
        overall2 = 0;
      } else {
        overall2 = player2.effectiveOverallAtPosition(oldPosition1) - player2.effectiveOverallAtPosition(oldPosition2);
      }
  
      // console.log(`Evaluating swap of ${player1.lastName} (${overall1}) and ${player2.lastName} (${overall2})`)
      return overall1 + overall2 > 0;
    }

    get numStarters(): number {
        let playerCount = 0;
        for (const position in this.starters) {playerCount += this.starters[position as PlayerPosition].length;}
        return playerCount;
      }

    public isValid(): boolean {
        const gkCount = this.starters[PlayerPosition.GK].length;
        return this.numStarters === 11 && gkCount === 1 && !this.injuredStarters;
    }

    get injuredStarters(): boolean {
        for (const position in this.starters) {
            const players = this.starters[position as PlayerPosition];
            for (const player of players) {
              if (player.injured) {
                return true;
              }
            }
        }
    
        return false;
      }

      // lineup optimization
      public optimizeLineup(): void {
        // goalkeepers

        let swapped = false;
        const starters = this.starterArray;
      
        // Iterate over each pair of starters
        for (let i = 0; i < starters.length; i++) {
          for (let j = i + 1; j < starters.length; j++) {
            const player1 = starters[i];
            const player2 = starters[j];

            if (player1 == player2){
              continue;
            }
      
            // Evaluate if swapping players increases overall value
            if (this.evaluateSwap(player1, player2)) {
              // Perform the swap
              this.swapStarters(player1, player2);
              swapped = true;
            }
          }
          for (let b = 0; b < this.bench.length; b++){
            const player1 = starters[i];
            const player2 = this.bench[b];
            // Evaluate if swapping players increases overall value
            if (this.evaluateSwap(player1, player2)) {
              // Perform the swap
              this.SwapStarterToBench(player1, player2);
              swapped = true;
            }
          }
        }
        // If any swaps were performed, recursively optimize the lineup again
        if (swapped) {
          this.optimizeLineup();
        }
      }

     get weightedAttributeTotals(): { [key: string]: number }{
        const attributeTotals: { [key: string]: number } = {
          [PlayerAttribute.Defending]: 0,
          [PlayerAttribute.Mental]: 0,
          [PlayerAttribute.Passing]: 0,
          [PlayerAttribute.Physical]: 0,
          [PlayerAttribute.Shooting]: 0,
          [PlayerAttribute.Speed]: 0
        }
        for (const position in this.starters) {
          const players = this.starters[position as PlayerPosition];
          for (const p of players){
            if (position == PlayerPosition.LB || position == PlayerPosition.RB){
              attributeTotals[PlayerAttribute.Defending] += p.attributes[PlayerAttribute.Defending] * 76;
              attributeTotals[PlayerAttribute.Mental] += p.attributes[PlayerAttribute.Mental] * 98 * (p.positionFamiliarity[position]/100);
              attributeTotals[PlayerAttribute.Passing] += p.attributes[PlayerAttribute.Passing] * 65;
              attributeTotals[PlayerAttribute.Physical] += p.attributes[PlayerAttribute.Physical] * 109;
              attributeTotals[PlayerAttribute.Shooting] += p.attributes[PlayerAttribute.Shooting] * 22;
              attributeTotals[PlayerAttribute.Speed] += p.attributes[PlayerAttribute.Speed] * 130;
            }
            if (position == PlayerPosition.LM || position == PlayerPosition.RM){
              attributeTotals[PlayerAttribute.Defending] += p.attributes[PlayerAttribute.Defending] * 31;
              attributeTotals[PlayerAttribute.Mental] += p.attributes[PlayerAttribute.Mental] * 83 * (p.positionFamiliarity[position]/100);
              attributeTotals[PlayerAttribute.Passing] += p.attributes[PlayerAttribute.Passing] * 115;
              attributeTotals[PlayerAttribute.Physical] += p.attributes[PlayerAttribute.Physical] * 83;
              attributeTotals[PlayerAttribute.Shooting] += p.attributes[PlayerAttribute.Shooting] * 42;
              attributeTotals[PlayerAttribute.Speed] += p.attributes[PlayerAttribute.Speed] * 146;
            }
            if (position == PlayerPosition.LW || position == PlayerPosition.RW){
              attributeTotals[PlayerAttribute.Defending] += p.attributes[PlayerAttribute.Defending] * 27;
              attributeTotals[PlayerAttribute.Mental] += p.attributes[PlayerAttribute.Mental] * 73 * (p.positionFamiliarity[position]/100);
              attributeTotals[PlayerAttribute.Passing] += p.attributes[PlayerAttribute.Passing] * 91;
              attributeTotals[PlayerAttribute.Physical] += p.attributes[PlayerAttribute.Physical] * 91;
              attributeTotals[PlayerAttribute.Shooting] += p.attributes[PlayerAttribute.Shooting] * 36;
              attributeTotals[PlayerAttribute.Speed] += p.attributes[PlayerAttribute.Speed] * 182;
            }
            if (position == PlayerPosition.CB){
              attributeTotals[PlayerAttribute.Defending] += p.attributes[PlayerAttribute.Defending] * 127;
              attributeTotals[PlayerAttribute.Mental] += p.attributes[PlayerAttribute.Mental] * 118 * (p.positionFamiliarity[position]/100);
              attributeTotals[PlayerAttribute.Passing] += p.attributes[PlayerAttribute.Passing] * 39;
              attributeTotals[PlayerAttribute.Physical] += p.attributes[PlayerAttribute.Physical] * 88;
              attributeTotals[PlayerAttribute.Shooting] += p.attributes[PlayerAttribute.Shooting] * 20;
              attributeTotals[PlayerAttribute.Speed] += p.attributes[PlayerAttribute.Speed] * 108;
            }
            if (position == PlayerPosition.CDM){
              attributeTotals[PlayerAttribute.Defending] += p.attributes[PlayerAttribute.Defending] * 94;
              attributeTotals[PlayerAttribute.Mental] += p.attributes[PlayerAttribute.Mental] * 94 * (p.positionFamiliarity[position]/100);
              attributeTotals[PlayerAttribute.Passing] += p.attributes[PlayerAttribute.Passing] * 85;
              attributeTotals[PlayerAttribute.Physical] += p.attributes[PlayerAttribute.Physical] * 85;
              attributeTotals[PlayerAttribute.Shooting] += p.attributes[PlayerAttribute.Shooting] * 47;
              attributeTotals[PlayerAttribute.Speed] += p.attributes[PlayerAttribute.Speed] * 94;
            }
            if (position == PlayerPosition.CM){
              attributeTotals[PlayerAttribute.Defending] += p.attributes[PlayerAttribute.Defending] * 55;
              attributeTotals[PlayerAttribute.Mental] += p.attributes[PlayerAttribute.Mental] * 91 * (p.positionFamiliarity[position]/100);
              attributeTotals[PlayerAttribute.Passing] += p.attributes[PlayerAttribute.Passing] * 118;
              attributeTotals[PlayerAttribute.Physical] += p.attributes[PlayerAttribute.Physical] * 91;
              attributeTotals[PlayerAttribute.Shooting] += p.attributes[PlayerAttribute.Shooting] * 45;
              attributeTotals[PlayerAttribute.Speed] += p.attributes[PlayerAttribute.Speed] * 100;
            }
            if (position == PlayerPosition.CAM){
              attributeTotals[PlayerAttribute.Defending] += p.attributes[PlayerAttribute.Defending] * 28;
              attributeTotals[PlayerAttribute.Mental] += p.attributes[PlayerAttribute.Mental] * 83 * (p.positionFamiliarity[position]/100);
              attributeTotals[PlayerAttribute.Passing] += p.attributes[PlayerAttribute.Passing] * 102;
              attributeTotals[PlayerAttribute.Physical] += p.attributes[PlayerAttribute.Physical] * 83;
              attributeTotals[PlayerAttribute.Shooting] += p.attributes[PlayerAttribute.Shooting] * 56;
              attributeTotals[PlayerAttribute.Speed] += p.attributes[PlayerAttribute.Speed] * 148;
            }
            if (position == PlayerPosition.ST){
              attributeTotals[PlayerAttribute.Defending] += p.attributes[PlayerAttribute.Defending] * 17;
              attributeTotals[PlayerAttribute.Mental] += p.attributes[PlayerAttribute.Mental] * 95 * (p.positionFamiliarity[position]/100);
              attributeTotals[PlayerAttribute.Passing] += p.attributes[PlayerAttribute.Passing] * 52;
              attributeTotals[PlayerAttribute.Physical] += p.attributes[PlayerAttribute.Physical] * 103;
              attributeTotals[PlayerAttribute.Shooting] += p.attributes[PlayerAttribute.Shooting] * 86;
              attributeTotals[PlayerAttribute.Speed] += p.attributes[PlayerAttribute.Speed] * 147;
            }
          }
        }

        for (const attribute in attributeTotals) {
          attributeTotals[attribute] = attributeTotals[attribute]**2;
        }
        return attributeTotals;
      }
  }
  