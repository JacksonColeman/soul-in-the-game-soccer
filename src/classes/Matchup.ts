import { League } from "./League";
import { Team } from "./Team";
import {Goal} from "./Goal";
import {Player} from "./Player";
import poisson from '@stdlib/random-base-poisson';
import { v4 as uuidv4 } from 'uuid';
import { PlayerAttribute } from "../constants/attributes";
import { Lineup } from "./Lineup";
import { PlayerPosition } from "../constants/positions";

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

    homeLineup: Lineup | null = null;
    awayLineup: Lineup | null = null;

    playMatch(): void {
      // get lineups
      this.homeLineup = this.homeTeam.lineup;
      this.awayLineup = this.awayTeam.lineup;
      // get team offense/defense ratios
      this.homeScore=0;
      this.awayScore=0;
      // set inMatch to true
      this.homeTeam.inMatch = true;
      this.awayTeam.inMatch = true;
      // get starters
      const homeStarters = this.homeLineup.starterArray;
      const awayStarters = this.awayLineup.starterArray;
      const allStarters = homeStarters.concat(awayStarters);

      // attribute ratios
      const homeAttributeRatios = this.homeTeam.attributeRatios(this.league);
      const awayAttributeRatios = this.awayTeam.attributeRatios(this.league);

      // currently, goalkeeper has no impact - fix this?

      const homeTeamAttackProxy = (homeAttributeRatios[PlayerAttribute.Passing] * 10 + 
                                  homeAttributeRatios[PlayerAttribute.Shooting] * 10 +
                                  homeAttributeRatios[PlayerAttribute.Speed] * 10 +
                                  homeAttributeRatios[PlayerAttribute.Mental] * 10 +
                                  homeAttributeRatios[PlayerAttribute.Physical] * 5 +
                                  homeAttributeRatios[PlayerAttribute.Defending] * 1)/46

      const homeTeamDefendProxy = (homeAttributeRatios[PlayerAttribute.Passing] * 5 + 
                                  homeAttributeRatios[PlayerAttribute.Shooting] * 1 +
                                  homeAttributeRatios[PlayerAttribute.Speed] * 5 +
                                  homeAttributeRatios[PlayerAttribute.Mental] * 8 +
                                  homeAttributeRatios[PlayerAttribute.Physical] * 8 +
                                  homeAttributeRatios[PlayerAttribute.Defending] * 10)/37 

      const awayTeamAttackProxy = (awayAttributeRatios[PlayerAttribute.Passing] * 10 + 
                                  awayAttributeRatios[PlayerAttribute.Shooting] * 10 +
                                  awayAttributeRatios[PlayerAttribute.Speed] * 10 +
                                  awayAttributeRatios[PlayerAttribute.Mental] * 10 +
                                  awayAttributeRatios[PlayerAttribute.Physical] * 5 +
                                  awayAttributeRatios[PlayerAttribute.Defending] * 1)/46

      const awayTeamDefendProxy = (awayAttributeRatios[PlayerAttribute.Passing] * 5 + 
                                  awayAttributeRatios[PlayerAttribute.Shooting] * 1 +
                                  awayAttributeRatios[PlayerAttribute.Speed] * 5 +
                                  awayAttributeRatios[PlayerAttribute.Mental] * 8 +
                                  awayAttributeRatios[PlayerAttribute.Physical] * 8 +
                                  awayAttributeRatios[PlayerAttribute.Defending] * 10)/37

      let homeScoreMean = this.league.avgGoals * (homeTeamAttackProxy) * ((1/awayTeamDefendProxy)) *1.05;
      let awayScoreMean = this.league.avgGoals * (awayTeamAttackProxy) * ((1/homeTeamDefendProxy)) * 0.95; 

      // by minute simulation
      let homeScoreMean90 = homeScoreMean/90;
      let awayScoreMean90 = awayScoreMean/90;

      for (let i = 1; i < 91; i++){
        // figure out cards and subs
        // decrement condition
        if(i % 4 == 0){
          for (const p of allStarters){
            if (p.position == PlayerPosition.GK){
              p.condition -= Math.random()*1;
              if (Math.random() < 0.00){
                p.injured = true;
                p.injuryTime = Math.floor(Math.random()*5);
              }
            } else {
              p.condition -= Math.random()*1.8;
              if (Math.random() < 0.00){
                p.injured = true;
                p.injuryTime = Math.floor(Math.random()*5);
              }
            }
          }
        }
        let homeGoal:number = poisson(homeScoreMean90);
        let awayGoal:number = poisson(awayScoreMean90);
        if (homeGoal > 0){
          this.homeScore++;
          let goal = this.createGoal(this.homeTeam, this.homeLineup, i)
          this.goals.push(goal);
        }
        if (awayGoal > 0){
          this.awayScore++;
          let goal = this.createGoal(this.awayTeam, this.awayLineup, i)
          this.goals.push(goal);
        }
      }

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
      for (const player of this.homeLineup.starterArray){
        player.stats.matchesPlayed++;
        player.stats.goals += player.matchStats.goals;
        player.stats.assists += player.matchStats.assists;
        player.matchStats.goals = 0;
        player.matchStats.assists = 0;
      }
      for (const player of this.awayLineup.starterArray){
        player.stats.matchesPlayed++;
        player.stats.goals += player.matchStats.goals;
        player.stats.assists += player.matchStats.assists;
        player.matchStats.goals = 0;
        player.matchStats.assists = 0;
      }

      

      // update keeper stats
      // bug check

      this.homeLineup.startingGoalkeeper.stats.goalsConceded += this.awayScore;
      this.awayLineup.startingGoalkeeper.stats.goalsConceded += this.homeScore;

      if (this.awayScore === 0 && this.homeLineup.startingGoalkeeper) {
        this.homeLineup.startingGoalkeeper.stats.cleanSheets += 1;
      }

      if (this.homeScore === 0 && this.awayLineup.startingGoalkeeper) {
        this.awayLineup.startingGoalkeeper.stats.cleanSheets += 1;
      }
      
      // increment goals allowed
      // set match to played

      // reputation update
      updateReputation(this.homeTeam, this.awayTeam, this.homeScore, this.awayScore);

      this.homeTeam.inMatch = false;
      this.awayTeam.inMatch = false;
      this.played = true;
    }

    createGoal(team:Team, lineup:Lineup, minute:number): Goal{
      //create just one goal object
      const players = lineup.starterArray.filter(
        (player) => player.position != PlayerPosition.GK
      ) as Player[];
  
      const assisterProbabilities = players.map((player) => player.assistProb);
      const totalAssisterProbability = assisterProbabilities.reduce((total, probability) => total + probability, 0);

      let selectedAssister: Player | undefined;
        if (Math.random() < 0.2) {
          selectedAssister = undefined; // No assister
        } else {
        let assisterRandomValue = Math.random() * totalAssisterProbability;

        for (let j = 0; j < players.length; j++) {
          const player = players[j];
          assisterRandomValue -= player.assistProb;
          if (assisterRandomValue <= 0) {
            selectedAssister = player;
            selectedAssister.matchStats.assists++;
            break;
          }
        }
      }
  
      const potentialScorers = players.filter(p => p != selectedAssister)
      const scorerProbabilities = potentialScorers.map((player) => player.goalScorerProb);
      const totalScorerProbability = scorerProbabilities.reduce((total, probability) => total + probability, 0);
  
      let scorerRandomValue = Math.random() * totalScorerProbability;
      let selectedScorer: Player | undefined;
  
      for (let j = 0; j < potentialScorers.length; j++) {
        const player = potentialScorers[j];
        scorerRandomValue -= player.goalScorerProb;
        if (scorerRandomValue <= 0) {
          selectedScorer = player;
          selectedScorer.matchStats.goals++;
          break;
        }
      }

      if (selectedScorer == undefined){throw new Error("scorer is undefined")}

      const homeTeam = team === this.homeTeam;
      const goal = new Goal(minute, selectedScorer, selectedAssister, homeTeam);
      return goal;   
    }
  }


// DYNAMIC REPUTATION ELO SYSTEM
const K_FACTOR = 1;

const calculateWinProbability = (teamAReputation: number, teamBReputation: number) => {
  const ratingDifference = teamBReputation - teamAReputation;
  return 1 / (1 + 10 ** (-ratingDifference / 50));
};

export const updateReputation = (teamA: Team, teamB: Team, teamAScore: number, teamBScore: number) => {
  const expectedWinProbabilityA = calculateWinProbability(
    teamB.reputation,
    teamA.reputation
  );
  const expectedWinProbabilityB = calculateWinProbability(
    teamA.reputation,
    teamB.reputation
  );

  const actualWinProbabilityA = teamAScore > teamBScore ? 1 : teamAScore === teamBScore ? 0.5 : 0;
  const actualWinProbabilityB = 1 - actualWinProbabilityA;

  const updatedReputationA =
  teamA.reputation + K_FACTOR * (actualWinProbabilityA - expectedWinProbabilityA);
  const updatedReputationB =
  teamB.reputation + K_FACTOR * (actualWinProbabilityB - expectedWinProbabilityB);

  teamA.reputation = Math.max(30, Math.min(99, updatedReputationA));
  teamB.reputation = Math.max(30, Math.min(99, updatedReputationB));
};
