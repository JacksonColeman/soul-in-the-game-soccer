import { Team } from "./Team";
import { Matchup } from "./Matchup";
import leaguesData from "../data/teams.json"
import { PlayerAttribute } from "../constants/attributes";

export class League{

    public name!: string;
    public id!: number;
    public teams: Team[] = [];
    public relegatesToID!: number | undefined;

    constructor(public leagueID: number) {
      const leagueData = leaguesData.find(league => league.id === leagueID);
      if (leagueData) {
          this.name = leagueData.name;
          this.id = leagueData.id;
          // relegates to league
          if (leagueData.relegatesTo){ 
            this.relegatesToID = leagueData.relegatesTo;
          } else {this.relegatesToID = undefined;}
      }
  }


    public avgGoals = 1.43;
    schedule: Matchup[][] = [];

     getWeekMatchups(week: number): Matchup[]{
      const weekMatchups = this.schedule[week - 1];
      return weekMatchups;
    }

    playWeekMatches(week: number){
      const weekMatchups = this.schedule[week - 1];
      for (const matchup of weekMatchups){
        if (!matchup.played) {
          matchup.playMatch();
        }
      }
    }

    addTeam(team: Team){
      this.teams.push(team);
    }

    playAllMatches(){
      for (const week of this.schedule){
        for (const matchup of week){
          if (!matchup.played) {
            matchup.playMatch();
          }
        }
      }
    }

    public weightedAttributeTotals: { [key: string]: number } = {
      [PlayerAttribute.Defending]: 0,
      [PlayerAttribute.Mental]: 0,
      [PlayerAttribute.Passing]: 0,
      [PlayerAttribute.Physical]: 0,
      [PlayerAttribute.Shooting]: 0,
      [PlayerAttribute.Speed]: 0,
      [PlayerAttribute.GKAgility]: 0,
      [PlayerAttribute.GKHandling]: 0,
      [PlayerAttribute.GKKicking]: 0,
      [PlayerAttribute.GKReach]: 0,
      [PlayerAttribute.GKReflexes]: 0,
      [PlayerAttribute.GKPositioning]: 0
    };

    generateWeightedAttributeTotals(){
      const attributeTotals: { [key: string]: number } = {
        [PlayerAttribute.Defending]: 0,
        [PlayerAttribute.Mental]: 0,
        [PlayerAttribute.Passing]: 0,
        [PlayerAttribute.Physical]: 0,
        [PlayerAttribute.Shooting]: 0,
        [PlayerAttribute.Speed]: 0,
        [PlayerAttribute.GKAgility]: 0,
        [PlayerAttribute.GKHandling]: 0,
        [PlayerAttribute.GKKicking]: 0,
        [PlayerAttribute.GKReach]: 0,
        [PlayerAttribute.GKReflexes]: 0,
        [PlayerAttribute.GKPositioning]: 0
      };

      for (const team of this.teams){
        const weightedAtts = team.lineup.weightedAttributeTotals;
        for (const attr in attributeTotals){
          attributeTotals[attr] += weightedAtts[attr as PlayerAttribute];
        }
      }

      for (const attr in attributeTotals){
        attributeTotals[attr as PlayerAttribute] /= this.teams.length;
      }

      this.weightedAttributeTotals = attributeTotals;
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
}
