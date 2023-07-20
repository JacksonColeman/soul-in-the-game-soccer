import {League} from '../classes/League'

export function ProRel(relegatingLeague: League, promotingLeague: League, n: number) {
    if (relegatingLeague === promotingLeague) {
      throw new Error("Can't relegate to the same league!");
    }
  
    relegatingLeague.playAllMatches();
    promotingLeague.playAllMatches();
  
    // Get the 3 lowest teams in points in the relegating league
    const relegatingTeamsSorted = [...relegatingLeague.teams].sort((a, b) => {
      if (a.points === b.points) {
        if (a.goalDiff === b.goalDiff){
          return (a.standingsInfo.goalsFor - b.standingsInfo.goalsFor)
        }
        return a.goalDiff - b.goalDiff;
      }
      return a.points - b.points;
    });
    const relegatingTeamsToMove = relegatingTeamsSorted.slice(0, n);
  
    // Remove relegated teams from the relegating league
    relegatingLeague.teams = relegatingLeague.teams.filter(
      team => !relegatingTeamsToMove.includes(team)
    );
  
    // Get the 3 highest teams in points in the promoting league
    const promotingTeamsSorted = [...promotingLeague.teams].sort((a, b) => {
      if (a.points === b.points) {
        if (a.goalDiff === b.goalDiff){
          return (b.standingsInfo.goalsFor - a.standingsInfo.goalsFor)
        }
        return b.goalDiff - a.goalDiff;
      }
      return b.points - a.points;
    });
    const promotingTeamsToMove = promotingTeamsSorted.slice(0, 3);
  
    // Remove promoted teams from the promoting league
    promotingLeague.teams = promotingLeague.teams.filter(
      team => !promotingTeamsToMove.includes(team)
    );
  
    // Add the 3 lowest teams from relegating league to promoting league
    promotingLeague.teams.push(...relegatingTeamsToMove);
    for (const team of relegatingTeamsToMove){
      team.league = promotingLeague;
    }
  
    // Add the 3 highest teams from promoting league to relegating league
    relegatingLeague.teams.push(...promotingTeamsToMove);
    for (const team of promotingTeamsToMove){
      team.league = relegatingLeague;
    }
  }
  