import { League } from "./League";
import { Team } from "./Team";
import { Player, PlayerOutfield, PlayerGoalkeeper } from "./Player";
import poisson from '@stdlib/random-base-poisson';
import { v4 as uuidv4 } from 'uuid';

export class Matchup {
    homeTeam: Team;
    awayTeam: Team;
    league: League;
    played: boolean;
    homeScore: number|undefined;
    awayScore: number|undefined;
    id:number = uuidv4();
    homeGoalscorers: Player[] = [];
    awayGoalscorers: Player[] = [];

    constructor(homeTeam: Team, awayTeam: Team, league: League, played: boolean, homeScore: number|undefined, awayScore: number|undefined) {
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
      this.league = league;
      this.played = played;
      this.homeScore = homeScore;
      this.awayScore = awayScore;
    }

    playMatch(): void {
      // get team offense/defense ratios
      const ratioExponent = 1.618;
      // console.log(this.homeTeam.roster);
      const homeTeamOffenseRatio = (this.homeTeam.teamOffenseTotal / this.league.averageOffense) ** ratioExponent;
      const homeTeamDefenseRatio = (this.league.averageDefense / this.homeTeam.teamDefenseTotal) ** ratioExponent;
      const awayTeamOffenseRatio = (this.awayTeam.teamOffenseTotal / this.league.averageOffense) ** ratioExponent;
      const awayTeamDefenseRatio = (this.league.averageDefense / this.awayTeam.teamDefenseTotal) ** ratioExponent;
      // get means for home and away
      const homeScoreMean = this.league.avgGoals * homeTeamOffenseRatio * awayTeamDefenseRatio * 1.05;
      const awayScoreMean = this.league.avgGoals * awayTeamOffenseRatio * homeTeamDefenseRatio / 1.05;

      // Logic to simulate the game and determine the outcome
      // You can customize this logic based on your simulation requirements
      const hs:number = poisson(homeScoreMean);
      const as:number = poisson(awayScoreMean);
      this.homeScore = hs; // Random score for the home team
      this.awayScore = as; // Random score for the away team

      this.homeTeam.standingsInfo.goalsFor += this.homeScore;
      this.awayTeam.standingsInfo.goalsFor += this.awayScore;
      this.homeTeam.standingsInfo.goalsAgainst += this.awayScore;
      this.awayTeam.standingsInfo.goalsAgainst += this.homeScore;
      
      // update standings 
      if (this.homeScore == this.awayScore){
        this.homeTeam.standingsInfo.draws++;
        this.awayTeam.standingsInfo.draws++;
      } else if (this.homeScore > this.awayScore){
        this.homeTeam.standingsInfo.wins++;
        this.awayTeam.standingsInfo.losses++;
      } else {
        this.homeTeam.standingsInfo.losses++;
        this.awayTeam.standingsInfo.wins++;
      }

      //update player stats
      for (const player of this.homeTeam.roster){
        player.matchesPlayed++;
      }
      for (const player of this.awayTeam.roster){
        player.matchesPlayed++;
      }

      this.homeGoalscorers = this.selectGoalscorers(this.homeScore, this.homeTeam);
      this.awayGoalscorers = this.selectGoalscorers(this.awayScore, this.awayTeam);
      // set match to played
      this.played = true;
    }

    selectGoalscorers(n: number, team:Team): Player[] {
      const players = team.roster.filter(
        (player) => player instanceof PlayerOutfield
      ) as PlayerOutfield[];
  
      const goalscorers: Player[] = [];
      const playerProbabilities = players.map((player) => player.attributes.attacking**3);
      const totalProbability = playerProbabilities.reduce((total, probability) => total + probability, 0);
  
      for (let i = 0; i < n; i++) {
        let randomValue = Math.random() * totalProbability;
        let selectedPlayer: Player | undefined;
  
        for (let j = 0; j < players.length; j++) {
          const player = players[j];
          randomValue -= player.attributes.attacking**3;
          if (randomValue <= 0) {
            selectedPlayer = player;
            break;
          }
        }
  
        if (selectedPlayer) {
          selectedPlayer.goals++;
          goalscorers.push(selectedPlayer);
        }
      }
  
      return goalscorers;
    }
  }


