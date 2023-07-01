import { Player, PlayerOutfield, PlayerGoalkeeper } from '../classes/Player';
import { League } from '../classes/League';
import { Matchup } from '../classes/Matchup';
import { Team } from '../classes/Team';

// Storing Teams array
export function storeLeagueData(league: League) {
  const teamsData = league.teams.map((team) => ({
    id: team.id,
    name: team.name,
    stadium: team.stadium,
    reputation: team.reputation,
    standingsInfo: {
      wins: team.standingsInfo.wins,
      losses: team.standingsInfo.losses,
      draws: team.standingsInfo.draws,
      goalsFor: team.standingsInfo.goalsFor,
      goalsAgainst: team.standingsInfo.goalsAgainst,
    },
    roster: team.roster.map((player) => ({
      firstName: player.firstName,
      lastName: player.lastName,
      age: player.age,
      position: player.position,
      attributes: player.attributes,
      stats: player.stats,
    })),
  }));

  localStorage.setItem('teamsData', JSON.stringify(teamsData));

  // Storing Schedule array
  const scheduleData = league.schedule.map((week) =>
    week.map((matchup) => ({
      homeTeamID: matchup.homeTeam.id,
      awayTeamID: matchup.awayTeam.id,
      homeScore: matchup.homeScore,
      awayScore: matchup.awayScore,
      played: matchup.played,
      id: matchup.id,
    }))
  );

  localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
}

export function rebuildLeague(teamsData: any[], scheduleData: any[]): League {
  // Rebuild teams
  const teams: Team[] = teamsData.map((teamData: any) => {
    const { id, name, stadium, reputation, roster, standingsInfo } = teamData;

    // Rebuild roster players
    const rosterPlayers: Player[] = roster.map((playerData: any) => {
      const { firstName, lastName, age, position, attributes, stats } = playerData;

      // Determine player subclass based on position
      let player: Player;
      if (position === 'GK') {
        player = new PlayerGoalkeeper(firstName, lastName, age, attributes);
        player.stats = stats;
      } else {
        player = new PlayerOutfield(firstName, lastName, age, position, attributes);
        player.stats = stats;
      }

      return player;
    });

    return new Team(id, name, stadium, reputation, rosterPlayers, standingsInfo);
  });

  // Create the league object
  const league: League = new League(teams);

  // Rebuild schedule
  const schedule: Matchup[][] = scheduleData.map((weekData: any[]) =>
    weekData.map((matchupData: any) => {
      const { homeTeamID, awayTeamID, played, homeScore, awayScore } = matchupData;
      let homeTeam = teams.find((team) => team.id === homeTeamID);
      let awayTeam = teams.find((team) => team.id === awayTeamID);

      if (!homeTeam || !awayTeam) {
        throw new Error('Invalid team data in scheduleData');
      }

      return new Matchup(homeTeam, awayTeam, league, played, homeScore, awayScore);
    })
  );

  league.schedule = schedule;
  return league;
}
