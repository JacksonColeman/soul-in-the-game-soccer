import { Team } from "./Team";
import { Player } from "./Player";
import { Matchup } from "./Matchup";
import leaguesData from "../data/teams.json"
import { PlayerAttribute } from "../constants/attributes";
import { PlayerPosition } from "../constants/positions";

export class League{

    public name!: string;
    public id!: number;
    public teams: Team[] = [];
    public relegatesToID!: number | undefined;
    public transferSpendMultiplier!: number;

    constructor(public leagueID: number) {
      const leagueData = leaguesData.find(league => league.id === leagueID);
      if (leagueData) {
          this.name = leagueData.name;
          this.id = leagueData.id;
          // relegates to league
          if (leagueData.relegatesTo){ 
            this.relegatesToID = leagueData.relegatesTo;
          } else {this.relegatesToID = undefined;}
          // transfer spend
          if (leagueData.transferSpendMultiplier){ 
            this.transferSpendMultiplier = leagueData.transferSpendMultiplier;
          } else {this.transferSpendMultiplier = 100}
      }
  }


    public avgGoals = 1.43;
    schedule: Matchup[][] = [];

     getWeekMatchups(week: number): Matchup[]{
      const weekMatchups = this.schedule[week - 1];
      return weekMatchups;
    }

    addTeam(team: Team){
      this.teams.push(team);
    }

    playWeekMatches(week: number){
      const weekMatchups = this.schedule[week - 1];
      for (const matchup of weekMatchups){
        if (!matchup.played) {
          if (this.id > 4){ // non english leagues have simpler sim
            matchup.playMatchSuperSimplified();
          } else { 
            matchup.playMatchSimplified();
          }
        }
      }
    }

    playAllMatches(){
      for (const week of this.schedule){
        for (const matchup of week){
          if (!matchup.played) {
            if (this.id > 4){ // non english leagues have simpler sim
              matchup.playMatchSuperSimplified();
            } else { 
              matchup.playMatchSimplified();
            }
          }
        }
      }
    }

    generateSchedule(): Matchup[][] {
      const matchups: Matchup[][] = [];
      const totalTeams = this.teams.length;
      const totalWeeks = totalTeams - 1;
    
      for (let week = 0; week < totalWeeks; week++) {
        const weekMatchups: Matchup[] = [];
    
        for (let i = 0; i < totalTeams / 2; i++) {
          const homeIndex = i;
          const awayIndex = totalTeams - 1 - i;
    
          const homeTeam = this.teams[homeIndex];
          const awayTeam = this.teams[awayIndex];
    
          const matchup = new Matchup(homeTeam, awayTeam, this,false,undefined,undefined);
          weekMatchups.push(matchup);
        }
    
        matchups.push(weekMatchups);
    
        // Rotate the teams for the next week
        const lastTeam = this.teams.pop();
        if (lastTeam) {
          this.teams.splice(1, 0, lastTeam);
        }
      }
    
    const doubleRoundMatchups = matchups.map((roundMatchups) =>
      roundMatchups.map((matchup) => new Matchup(matchup.awayTeam, matchup.homeTeam, this, false, undefined, undefined))
    );

    const allMatchups = [...matchups, ...doubleRoundMatchups];
  
    //shuffle the array of matchweeks
    for (let i = allMatchups.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = allMatchups[i];
      allMatchups[i] = allMatchups[j];
      allMatchups[j] = temp;
    }

    return allMatchups;
    }

    getTeam(teamID: number): Team {
      const gotTeam = this.teams.find((team) => team.id === teamID);
      if (gotTeam){
        return gotTeam;
      }
      throw new Error(`No team with ID ${teamID} found`); // Throw an error if no goalkeeper is found
    }

    newYear(year:number):void{
      // year = year about to pass;
      for (const team of this.teams){
        team.newYear(year);
      }
      this.schedule = this.generateSchedule();
    }

    // league awards
    get allPlayers(): Player[] {
      const allPlayers: Player[] = [];
      for (const team of this.teams) {
        allPlayers.push(...team.roster);
      }
      return allPlayers;
    }

    topScorer(): Player | undefined {
      let topScorer: Player | undefined;
      let maxGoals = 0;
      let minMatchesPlayed = Infinity;
  
      for (const player of this.allPlayers) {
        if (player.stats.goals > maxGoals) {
          topScorer = player;
          maxGoals = player.stats.goals;
          minMatchesPlayed = player.stats.matchesPlayed;
        } else if (player.stats.goals === maxGoals && player.stats.matchesPlayed < minMatchesPlayed) {
          topScorer = player;
          minMatchesPlayed = player.stats.matchesPlayed;
        }
      }
  
      return topScorer;
    }

    topAssister(): Player | undefined {
      let topAssister: Player | undefined;
      let maxAssists = 0;
      let minMatchesPlayed = Infinity;
  
      for (const player of this.allPlayers) {
        if (player.stats.assists > maxAssists) {
          topAssister = player;
          maxAssists = player.stats.assists;
          minMatchesPlayed = player.stats.matchesPlayed;
        } else if (player.stats.assists === maxAssists && player.stats.matchesPlayed < minMatchesPlayed) {
          topAssister = player;
          minMatchesPlayed = player.stats.matchesPlayed;
        }
      }
  
      return topAssister;
    }

    zamora(): Player | undefined {
      let zamora: Player | undefined;
      let minGoalsConcededRatio = Infinity;
  
      for (const player of this.allPlayers) {
        if (player.position === PlayerPosition.GK && player.stats.matchesPlayed >= 28) {
          const goalsConcededRatio = player.stats.goalsConceded / player.stats.matchesPlayed;
          if (goalsConcededRatio < minGoalsConcededRatio) {
            zamora = player;
            minGoalsConcededRatio = goalsConcededRatio;
          }
        }
      }
  
      return zamora;
    }

    // get league winner
    leagueWinner(): Team | undefined {
      const sortedTeams = [...this.teams].sort((teamA, teamB) => {
        if (teamA.points !== teamB.points) {
          return teamB.points - teamA.points; // Sort by points (descending order)
        }
    
        if (teamA.goalDiff !== teamB.goalDiff) {
          return teamB.goalDiff - teamA.goalDiff; // Sort by goal difference (descending order)
        }
    
        return teamB.standingsInfo.goalsFor - teamA.standingsInfo.goalsFor; // Sort by goals scored (descending order)
      });
    
      return sortedTeams[0]; // First team in the sorted array is the winner
    }

    leagueMVP(): Player | undefined {
      let topMVP: Player | undefined;
      let highestMVPValue = 0;
    
      for (const team of this.teams) {
        for (const player of team.roster) {
          const MVPValue = player.stats.goals * 1.5 + player.stats.assists + (player.team?.standingsInfo.wins || 0);
          if (MVPValue > highestMVPValue) {
            highestMVPValue = MVPValue;
            topMVP = player;
          }
        }
      }
    
      return topMVP;
    }
}
