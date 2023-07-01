import { Team } from "./Team";
import { Matchup } from "./Matchup";

export class League{
    constructor(public teams: Team[]) {}
    public avgGoals = 1.43;
    schedule: Matchup[][] = [];

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

    getTeam(teamId: number): Team | undefined {
      return this.teams.find((team) => team.id === teamId);
    }

    newYear(year:number):void{
      for (const team of this.teams){
        team.newYear(year);
      }
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