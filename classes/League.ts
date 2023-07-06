import { Team } from "./Team";
import { Matchup } from "./Matchup";
import {ProRel} from '../scripts/ProRel'
import leaguesData from "../src/data/teams.json"

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

    get averageAttacking():number{
      let sum = 0;
      for (const team of this.teams){
          sum += team.teamAttackingTotal;
      }
      return sum / this.teams.length;
    }

    get averageDefense():number{
        let sum = 0;
        for (const team of this.teams){
            sum += team.teamDefenseTotal;
        }
        return sum / this.teams.length;
    }

    get averagePlaymaking():number{
      let sum = 0;
        for (const team of this.teams){
            sum += team.teamPlaymakingTotal;
        }
        return sum / this.teams.length;
    }

    get averagePhysical():number{
      let sum = 0;
        for (const team of this.teams){
            sum += team.teamPhysicalTotal;
        }
        return sum / this.teams.length;
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
    
        // shuffle the array of matchweeks
        // for (let i = matchups.length - 1; i > 0; i--) {
        //   const j = Math.floor(Math.random() * (i + 1));
        //   const temp = matchups[i];
        //   matchups[i] = matchups[j];
        //   matchups[j] = temp;
        // }

//         return matchups;
//       }
// }