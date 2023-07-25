import {Player} from './Player'
import { PlayerAttribute } from '../constants/attributes';
import { PlayerPosition } from '../constants/positions';
import { Formation } from './Formations';
import { lineupPositionMaximums } from '../constants/lineupPositionMaximums';
import { effectiveAttributeWeights } from '../constants/effectiveAttributeWeights';

export class Lineup {
    public allPlayers: Player[];
    public starters: { [position in PlayerPosition]: Player[] };
    public bench: Player[];
    public reserves: Player[];
    public formation: Formation;
    maxBenchSize = 9;
  
    constructor(players: Player[], formation: Formation) {
      this.starters = {
        [PlayerPosition.GK]: [],
        [PlayerPosition.LB]: [],
        [PlayerPosition.CB]: [],
        [PlayerPosition.RB]: [],
        [PlayerPosition.LWB]: [],
        [PlayerPosition.CDM]: [],
        [PlayerPosition.RWB]: [],
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
      this.allPlayers = players;
      this.formation = formation;
    }

    clearLineup(){
      this.starters = {
        [PlayerPosition.GK]: [],
        [PlayerPosition.LB]: [],
        [PlayerPosition.CB]: [],
        [PlayerPosition.RB]: [],
        [PlayerPosition.LWB]: [],
        [PlayerPosition.CDM]: [],
        [PlayerPosition.RWB]: [],
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

    buildNaiveLineup(){
      // builds a simple lineup with the best goalkeeper and 10 best outfield players (in any position)
      // runs in O(nlogn) bc of sorting
      
      // is then optimized by swapping
      // clear lineup
      this.clearLineup();

      //Make sure best goalkeeper is starting, 2nd best is on the bench)
      const goalkeepers = this.allPlayers.filter(player => player.position == PlayerPosition.GK && !player.injured).sort((a, b) => b.overallAtPosition(PlayerPosition.GK) - a.overallAtPosition(PlayerPosition.GK));
      const outfield = this.allPlayers.filter(player => player.position != PlayerPosition.GK && !player.injured).sort((a, b) => b.overallRating - a.overallRating);
      if (goalkeepers.length < 2){
        console.log(this.allPlayers);
        throw new Error("Not enough goalkeepers!")
      }
      this.addStarter(goalkeepers[0], PlayerPosition.GK);
      this.bench[0] = goalkeepers[1];
      
      const positionRequirements = this.formation.positionRequirements;
      for (const position in positionRequirements) {
        while (this.starters[position as PlayerPosition].length < positionRequirements[position as PlayerPosition]){
          const p = outfield.shift();
          if (!p){
            console.log(this.allPlayers[0].team?.name);
            throw new Error("Not enough players to fill starting lineup!")
          }
          this.addStarter(p, position as PlayerPosition);
        }
      }

      // fill bench
      const allOutfield = this.allPlayers.filter(player => player.position != PlayerPosition.GK && !this.starterArray.includes(player)).sort((a, b) => b.overallRating - a.overallRating);
      while (this.bench.length < this.maxBenchSize){
        const p = allOutfield.shift();
        if (!p){
          console.log(this.allPlayers[0].team?.name);
          throw new Error("Not enough players to fill bench!")
        }
        this.addToBench(p);
      }

      // fill reserves
      const reservePlayers = this.allPlayers.filter(p => !this.starterArray.includes(p) && !this.bench.includes(p));
      this.reserves = reservePlayers;
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
        if (lineupPositionMaximums[position] && this.starters[position].length >= lineupPositionMaximums[position]) {
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

    get startingGoalkeeper(): Player{
      const gk = this.starters[PlayerPosition.GK][0];
      if (gk.position == PlayerPosition.GK){
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

    public swapStarterToBench(starter: Player, benchPlayer: Player){
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

    public swapStarterToReserve(starter: Player, resPlayer: Player){
      let index1 = -1;
      let index2 = -1;
      // find bench index
      index2 = this.reserves.findIndex(p => p.id === resPlayer.id);
      
      // find starter index
      for (const position in this.starters) {
        const players = this.starters[position as PlayerPosition];
        index1 = players.findIndex(p => p.id === starter.id);
        if (index1 !== -1 && index2 != -1) {
          players[index1] = resPlayer;
          resPlayer.fieldPosition = starter.fieldPosition;
          this.reserves[index2] = starter;
          starter.fieldPosition = null;
          return;
        }
      }
    }

    public swapBenchToReserve(benchPlayer: Player, reservePlayer: Player){
      let index1 = -1;
      let index2 = -1;
      // find bench index
      index1 = this.bench.findIndex(p => p.id === benchPlayer.id);
      index2 = this.reserves.findIndex(p => p.id === reservePlayer.id);
      if (index1 !== -1 && index2 != -1) {
        this.bench[index1] = reservePlayer;
        this.reserves[index2] = benchPlayer;
        return;
      }
    }

    public swapPlayers(player1: Player, player2: Player): void {
      if (this.starterArray.includes(player1)) {
        if (this.starterArray.includes(player2)) {
          // Both players are in the starters array
          this.swapStarters(player1, player2);
        } else if (this.bench.includes(player2)) {
          // Player 1 is in the starters array, and player 2 is in the bench
          this.swapStarterToBench(player1, player2);
        } else if (this.reserves.includes(player2)) {
          // Player 1 is in the starters array, and player 2 is in the reserves
          this.swapStarterToReserve(player1, player2);
        }
      } else if (this.bench.includes(player1)) {
        if (this.bench.includes(player2)) {
          // Both players are in the bench
          return; // no intrabench swapping yet
        } else if (this.reserves.includes(player2)) {
          // Player 1 is in the bench, and player 2 is in the reserves
          console.log('swapping')
          this.swapBenchToReserve(player1, player2);
        }
      } else if (this.reserves.includes(player1)){
        if (this.starterArray.includes(player2)) {
          // p1 res, p2 starter
          this.swapStarterToReserve(player2, player1);
        } else if (this.bench.includes(player2)) {
          // p1 res, p2 bench
          this.swapBenchToReserve(player2, player1);
        } else if (this.reserves.includes(player2)) {
          // both res
          return;
        }
      } else {
        throw new Error("Players not found in any array!");
      }
    }

    evaluateSwap(player1: Player, player2: Player): number {
      const getPosition = (player: Player): PlayerPosition | undefined => {
        if (this.bench.includes(player) || this.reserves.includes(player)){
          return undefined;
        }
        for (const position in this.starters) {
          if (this.starters[position as PlayerPosition].includes(player)) {
            return position as PlayerPosition;
          }
        }
        console.log(player);
        console.log(this.starters);
        console.log(this.bench);
        console.log(this.reserves);
        console.log('moo');
        throw new Error("Player not in lineup!");
      };
  
      const oldPosition1 = getPosition(player1);
      const oldPosition2 = getPosition(player2);

      let overall1 = 0, overall2 = 0;
      overall1 = player1.effectiveOverallAtPosition(oldPosition2) - player1.effectiveOverallAtPosition(oldPosition1);
      overall2 = player2.effectiveOverallAtPosition(oldPosition1) - player2.effectiveOverallAtPosition(oldPosition2);
      // }

      return overall1 + overall2;
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
      const goalkeepers = this.allPlayers.filter(player => player.position == PlayerPosition.GK && !player.injured).sort((a, b) => b.overallAtPosition(PlayerPosition.GK) - a.overallAtPosition(PlayerPosition.GK));
      if (goalkeepers.length < 2){
        console.log(this.allPlayers[0].team?.name);
        throw new Error("Not enough goalkeepers!")
      };

      // if best keeper isn't the starter
      if (this.starters.GK[0] != goalkeepers[0]){
        this.removePlayer(this.starters.GK[0]);
        this.addStarter(goalkeepers[0], PlayerPosition.GK);
      }
      // 2nd best goalkeeper on bench;
      this.bench[0] = goalkeepers[1];
      // Remove other goalkeepers from the bench

      // outfield players
      let swapped = false;
      const starters = this.starterArray.filter(p => p.position != PlayerPosition.GK);
    
      // Iterate over each pair of starters
      for (let i = 0; i < starters.length; i++) {
        // check swaps with other starters
        const player1 = starters[i];
        for (let j = i + 1; j < starters.length; j++) {
          if (i == j){
            continue; // don't check same player against themselves
          }
          
          const player2 = starters[j];
    
          // Evaluate if swapping players increases overall value
          if (this.evaluateSwap(player1, player2) > 0) {
            // Perform the swap
            this.swapStarters(player1, player2);
            swapped = true;
          }
        }
        // check swaps with bench;
        // start at index 1 to ignore keeper
        for (let b = 1; b < this.bench.length; b++){
          const player2 = this.bench[b];
          if (player2.position == PlayerPosition.GK){
            continue;
          }
          // Evaluate if swapping players increases overall value
          if (this.evaluateSwap(player1, player2) > 0) {
            // Perform the swap
            this.swapStarterToBench(player1, player2);
            swapped = true;
          }
        }
        // check swaps with reserves
        for (let r = 0; r < this.reserves.length; r++){
          const player2 = this.reserves[r];
          if (player2.position == PlayerPosition.GK){
            continue;
          }
          // Evaluate if swapping players increases overall value
          if (this.evaluateSwap(player1, player2) > 0) {
            // Perform the swap
            this.swapStarterToReserve(player1, player2);
            swapped = true;
          }
        }

      }
      // If any swaps were performed, recursively optimize the lineup again
      if (swapped) {
        this.optimizeLineup();
      }

      // optimize bench
      // get all non starting outfield players
      const nonStarters = this.allPlayers.filter(p => !this.starterArray.includes(p) && p.position != PlayerPosition.GK).sort((a, b) => b.effectiveOverallRating - a.effectiveOverallRating);
      for (let b = 1; b < this.maxBenchSize; b++){
        const p = nonStarters.shift();
        if (!p){throw new Error("not enough players!")}
        this.bench[b] = p;
      }

      const reservePlayers = this.allPlayers.filter(p => !this.starterArray.includes(p) && !this.bench.includes(p));
      this.reserves = reservePlayers;
    }

    get weightedAttributeAverages(): { [key: string]: number } {
      const attributeWeights = effectiveAttributeWeights;
      const attributeTotals: { [key: string]: number } = {};
      const attributeWeightSums: { [key: string]: number } = {}; // Keep track of weight sums
    
      for (const position in this.starters) {
        const players = this.starters[position as PlayerPosition];
        const weights = attributeWeights[position as PlayerPosition];
    
        for (const p of players) {
          for (const attribute in p.attributes) {
            const attr  = attribute as PlayerAttribute;
            const weight = weights[attr];
            // Update the calculation for mental attribute to include position familiarity
            if (attr === PlayerAttribute.Mental) {
              attributeTotals[attr] = (attributeTotals[attr] || 0) + p.attributes[attr] * weight * (p.positionFamiliarity[position as PlayerPosition] / 100) * (p.condition / 100);
            } else {
              attributeTotals[attr] = (attributeTotals[attr] || 0) + p.attributes[attr] * weight * (p.condition / 100);
            }
            attributeWeightSums[attr] = (attributeWeightSums[attr] || 0) + weight; // Accumulate weight sums
          }
        }
      }
    
      // Calculate the weighted average for each attribute
      for (const attribute in attributeTotals) {
        attributeTotals[attribute] /= attributeWeightSums[attribute];
      }
    
      return attributeTotals;
    }

    public changeFormation(newFormation: Formation){
      this.clearLineup();
      this.formation = newFormation;
      this.buildNaiveLineup();
      this.optimizeLineup();
    }
  }
  