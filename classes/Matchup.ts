import { Team } from "./Team";

export class Matchup {
    constructor(public homeTeam: Team, public awayTeam: Team) {}
  
    playMatch(): string {
      // Logic to simulate the game and determine the outcome
      // You can customize this logic based on your simulation requirements
  
      const homeScore = Math.floor(Math.random() * 5); // Random score for the home team
      const awayScore = Math.floor(Math.random() * 5); // Random score for the away team
  
      return `${this.homeTeam.name} ${homeScore} - ${awayScore} ${this.awayTeam.name}`;
    }
  }