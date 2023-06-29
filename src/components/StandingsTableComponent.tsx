import React from "react";
import {League} from "../../classes/League"
import {Team} from "../../classes/Team"
import '../styles/StandingsTableComponent.css'

interface StandingsTableProps {
  league: League;
}

const StandingsTableComponent: React.FC<StandingsTableProps> = ({ league }) => {
  // Sort teams by points in descending order
  const sortedTeams = [...league.teams].sort((a: Team, b: Team) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    } else if (a.goalDiff !== b.goalDiff) {
      return b.goalDiff - a.goalDiff;
    } else {
      return b.goalsFor - a.goalsFor;
    }
  });

  return (
    <table className="standings-table">
      <thead>
        <tr>
          <th className="team-name-col">Team</th>
          <th className="stat-col">GP</th>
          <th className="stat-col">W</th>
          <th className="stat-col">D</th>
          <th className="stat-col">L</th>
          <th className="stat-col">GF</th>
          <th className="stat-col">GA</th>
          <th className="stat-col">GD</th>
          <th className="stat-col">Pts</th>
        </tr>
      </thead>
      <tbody>
        {sortedTeams.map((team: Team, index) => (
          <tr
            key={team.id}
            className={`${
              index === 0 ? "champion-row" :
              index >= 1 && index <= 3 ? "champions-league-row" :
              index >= league.teams.length - 3 ? "relegation-row" :
              index >= 4 && index <= 5 ? "europa-league-row" :
              "neutral-row"
            }`}
          >
            <td>{team.name}</td>
            <td className="stat-col">{team.wins + team.draws + team.losses}</td>
            <td className="stat-col">{team.wins}</td>
            <td className="stat-col">{team.draws}</td>
            <td className="stat-col">{team.losses}</td>
            <td className="stat-col">{team.goalsFor}</td>
            <td className="stat-col">{team.goalsAgainst}</td>
            <td className="stat-col">{team.goalDiff}</td>
            <td className="stat-col">{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StandingsTableComponent;