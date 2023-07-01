import { League } from "./League";
import { Team } from "./Team";
import {Goal} from "./Goal";
import { Player, PlayerOutfield } from "./Player";
import poisson from '@stdlib/random-base-poisson';
import { v4 as uuidv4 } from 'uuid';

export class Matchup {
    homeTeam: Team;
    awayTeam: Team;
    league: League;
    played: boolean;
    homeScore: number|undefined;
    awayScore: number|undefined;
    id:string = uuidv4();
    goals: Goal[] = [];
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

      // calculate ratios of team attribute strength vs league average
      const homeTeamAttackRatio = (this.homeTeam.teamAttackingTotal / this.league.averageAttacking);
      const homeTeamPlaymakingRatio = (this.homeTeam.teamPlaymakingTotal / this.league.averagePlaymaking);
      const homeTeamDefenseRatio = (this.league.averageDefense / this.homeTeam.teamDefenseTotal);
      const homeTeamPhysicalRatio = (this.homeTeam.teamPhysicalTotal / this.league.averagePhysical);

      //get offense and defense values from ratios
      const homeTeamOffense = (homeTeamAttackRatio * .4 + homeTeamPlaymakingRatio * .4 + homeTeamPhysicalRatio*.2) ** 2;
      const homeTeamDefense = (homeTeamDefenseRatio * .8 + (1/homeTeamPhysicalRatio) * .2) ** 1.5;
      
      // for away teams
      const awayTeamAttackRatio = (this.awayTeam.teamAttackingTotal / this.league.averageAttacking);
      const awayTeamPlaymakingRatio = (this.awayTeam.teamPlaymakingTotal / this.league.averagePlaymaking);
      const awayTeamDefenseRatio = (this.league.averageDefense / this.awayTeam.teamDefenseTotal);
      const awayTeamPhysicalRatio = (this.awayTeam.teamPhysicalTotal / this.league.averagePhysical);

      // get offense and defense values from ratios
      const awayTeamOffense = (awayTeamAttackRatio * .4 + awayTeamPlaymakingRatio * .4 + awayTeamPhysicalRatio*.2);
      const awayTeamDefense = (awayTeamDefenseRatio * .8 + (1/awayTeamPhysicalRatio) * .2);

      const homeScoreMean = this.league.avgGoals * homeTeamOffense * awayTeamDefense *1.05;
      const awayScoreMean = this.league.avgGoals * awayTeamOffense * homeTeamDefense * 0.95;      
      // 
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
        player.stats.matchesPlayed++;
      }
      for (const player of this.awayTeam.roster){
        player.stats.matchesPlayed++;
      }

      // update keeper stats
      this.homeTeam.startingGoalkeeper.stats.goalsConceded += this.awayScore;
      this.awayTeam.startingGoalkeeper.stats.goalsConceded += this.homeScore;

      if (this.awayScore === 0 && this.homeTeam.startingGoalkeeper) {
        this.homeTeam.startingGoalkeeper.stats.cleanSheets += 1;
      }

      if (this.homeScore === 0 && this.awayTeam.startingGoalkeeper) {
        this.awayTeam.startingGoalkeeper.stats.cleanSheets += 1;
      }
      
      // increment goals allowed
      this.goals = this.goals.concat(this.createGoals(this.homeScore, this.homeTeam));
      this.goals = this.goals.concat(this.createGoals(this.awayScore, this.awayTeam));
      // set match to played
      this.played = true;
    }

    createGoals(n: number, team:Team): Goal[] {
      const players = team.roster.filter(
        (player) => player instanceof PlayerOutfield
      ) as PlayerOutfield[];
  
      const goals: Goal[] = [];
      const scorerProbabilities = players.map((player) => player.attributes.attacking ** 2);
      const totalScorerProbability = scorerProbabilities.reduce((total, probability) => total + probability, 0);

  
      for (let i = 0; i < n; i++) {
        const minute = Math.floor(Math.random() * 90) + 1;
    
        let scorerRandomValue = Math.random() * totalScorerProbability;
        let selectedScorer: PlayerOutfield | undefined;
    
        for (let j = 0; j < players.length; j++) {
          const player = players[j];
          scorerRandomValue -= player.attributes.attacking ** 2;
          if (scorerRandomValue <= 0) {
            selectedScorer = player;
            selectedScorer.stats.goals++;
            break;
          }
        }
  
        if (selectedScorer) {
          const filteredPlayers = players.filter((player) => player !== selectedScorer);
          const assisterProbabilities = filteredPlayers.map((player) => player.attributes.playmaking ** 2);
          const totalAssisterProbability = assisterProbabilities.reduce((total, probability) => total + probability, 0);
    
          let selectedAssister: PlayerOutfield | undefined;
          if (Math.random() < 0.2) {
            selectedAssister = undefined; // No assister
          } else {
            let assisterRandomValue = Math.random() * totalAssisterProbability;
    
            for (let j = 0; j < filteredPlayers.length; j++) {
              const player = filteredPlayers[j];
              assisterRandomValue -= player.attributes.playmaking ** 2;
              if (assisterRandomValue <= 0) {
                selectedAssister = player;
                selectedAssister.stats.assists++;
                break;
              }
            }
          }
    
          const homeTeam = team === this.homeTeam;
    
          const goal = new Goal(minute, selectedScorer, selectedAssister, homeTeam);
          goals.push(goal);
        }
      }
  
      return goals;
    }
  }


