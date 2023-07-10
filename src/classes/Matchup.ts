import { League } from "./League";
import { Team } from "./Team";
import {Goal} from "./Goal";
import {Player, PlayerGoalkeeper, PlayerOutfield} from "./Player";
import poisson from '@stdlib/random-base-poisson';
import { v4 as uuidv4 } from 'uuid';
import { PlayerAttribute } from "../constants/attributes";

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

    get allStarters(){
      const homeStarters = this.homeTeam.lineup.starterArray;
      const awayStarters = this.awayTeam.lineup.starterArray;
      const allStarters = homeStarters.concat(awayStarters);
      return allStarters;
    }

    playMatch(): void {
      // get team offense/defense ratios
      this.homeScore=0;
      this.awayScore=0;

      // attribute ratios
      const homeAttributeRatios = this.homeTeam.attributeRatios(this.league);
      const awayAttributeRatios = this.awayTeam.attributeRatios(this.league);

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
          for (const p of this.allStarters){
            if (p instanceof PlayerGoalkeeper){
              p.condition -= Math.random()*0;
            } else {
              p.condition -= Math.random()*0;
            }
          }
        }
        let hs:number = poisson(homeScoreMean90);
        let as:number = poisson(awayScoreMean90);
        if (hs > 0){
          this.homeScore++;
          let goal = this.createGoal(this.homeTeam, i)
          this.goals.push(goal);
        }
        if (as > 0){
          this.awayScore++;
          let goal = this.createGoal(this.awayTeam, i)
          this.goals.push(goal);
        }
      }
      // const hs:number = poisson(homeScoreMean);
      // const as:number = poisson(awayScoreMean);
      // this.homeScore = hs; // Random score for the home team
      // this.awayScore = as; // Random score for the away team

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
      for (const player of this.homeTeam.lineup.starterArray){
        player.stats.matchesPlayed++;
      }
      for (const player of this.awayTeam.lineup.starterArray){
        player.stats.matchesPlayed++;
      }

      // update keeper stats
      // bug check

      this.homeTeam.lineup.startingGoalkeeper.stats.goalsConceded += this.awayScore;
      this.awayTeam.lineup.startingGoalkeeper.stats.goalsConceded += this.homeScore;

      if (this.awayScore === 0 && this.homeTeam.lineup.startingGoalkeeper) {
        this.homeTeam.lineup.startingGoalkeeper.stats.cleanSheets += 1;
      }

      if (this.homeScore === 0 && this.awayTeam.lineup.startingGoalkeeper) {
        this.awayTeam.lineup.startingGoalkeeper.stats.cleanSheets += 1;
      }
      
      // increment goals allowed
      // set match to played

      // reputation update
      updateReputation(this.homeTeam, this.awayTeam, this.homeScore, this.awayScore);

      this.played = true;
    }

    createGoal(team:Team, minute:number): Goal{
      //create just one goal object
      const players = team.lineup.starterArray.filter(
        (player) => player instanceof PlayerOutfield
      ) as PlayerOutfield[];
  
      const assisterProbabilities = players.map((player) => player.assistProb);
      const totalAssisterProbability = assisterProbabilities.reduce((total, probability) => total + probability, 0);

      let selectedAssister: PlayerOutfield | undefined;
        if (Math.random() < 0.2) {
          selectedAssister = undefined; // No assister
        } else {
        let assisterRandomValue = Math.random() * totalAssisterProbability;

        for (let j = 0; j < players.length; j++) {
          const player = players[j];
          assisterRandomValue -= player.assistProb;
          if (assisterRandomValue <= 0) {
            selectedAssister = player;
            selectedAssister.stats.assists++;
            break;
          }
        }
      }
  
      const potentialScorers = players.filter(p => p != selectedAssister)
      const scorerProbabilities = potentialScorers.map((player) => player.goalScorerProb);
      const totalScorerProbability = scorerProbabilities.reduce((total, probability) => total + probability, 0);
  
      let scorerRandomValue = Math.random() * totalScorerProbability;
      let selectedScorer: PlayerOutfield | undefined;
  
      for (let j = 0; j < potentialScorers.length; j++) {
        const player = potentialScorers[j];
        scorerRandomValue -= player.goalScorerProb;
        if (scorerRandomValue <= 0) {
          selectedScorer = player;
          selectedScorer.stats.goals++;
          break;
        }
      }

      if (selectedScorer == undefined){throw new Error("scorer is undefined")}

      const homeTeam = team === this.homeTeam;
      const goal = new Goal(minute, selectedScorer, selectedAssister, homeTeam);
      return goal;   
    }

    createGoals(n: number, team:Team): Goal[] {
      const players = team.lineup.starterArray.filter(
        (player) => player instanceof PlayerOutfield
      ) as PlayerOutfield[];
  
      const goals: Goal[] = [];

      const assisterProbabilities = players.map((player) => player.assistProb);
      const totalAssisterProbability = assisterProbabilities.reduce((total, probability) => total + probability, 0);

      for (let i = 0; i < n; i++) {
        let selectedAssister: PlayerOutfield | undefined;
          if (Math.random() < 0.2) {
            selectedAssister = undefined; // No assister
          } else {
          let assisterRandomValue = Math.random() * totalAssisterProbability;

          for (let j = 0; j < players.length; j++) {
            const player = players[j];
            assisterRandomValue -= player.assistProb;
            if (assisterRandomValue <= 0) {
              selectedAssister = player;
              selectedAssister.stats.assists++;
              break;
            }
          }
        }
    
        const potentialScorers = players.filter(p => p != selectedAssister)
        const scorerProbabilities = potentialScorers.map((player) => player.goalScorerProb);
        const totalScorerProbability = scorerProbabilities.reduce((total, probability) => total + probability, 0);
    
      
        const minute = Math.floor(Math.random() * 90) + 1;
    
        let scorerRandomValue = Math.random() * totalScorerProbability;
        let selectedScorer: PlayerOutfield | undefined;
    
        for (let j = 0; j < potentialScorers.length; j++) {
          const player = potentialScorers[j];
          scorerRandomValue -= player.goalScorerProb;
          if (scorerRandomValue <= 0) {
            selectedScorer = player;
            selectedScorer.stats.goals++;

            const homeTeam = team === this.homeTeam;
            const goal = new Goal(minute, selectedScorer, selectedAssister, homeTeam);
            goals.push(goal);
            break;
          }      
        }
      }
  
      return goals;
    }
  }


// DYNAMIC REPUTATION ELO SYSTEM
const K_FACTOR = 1;

const calculateWinProbability = (teamAReputation: number, teamBReputation: number) => {
  const ratingDifference = teamBReputation - teamAReputation;
  return 1 / (1 + 10 ** (-ratingDifference / 50));
};

const updateReputation = (teamA: Team, teamB: Team, teamAScore: number, teamBScore: number) => {
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

  teamA.reputation = Math.max(50, Math.min(99, updatedReputationA));
  teamB.reputation = Math.max(50, Math.min(99, updatedReputationB));
};
