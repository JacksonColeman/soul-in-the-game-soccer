import React from "react";
import {League} from "../../../classes/League"
import { Link } from "react-router-dom";
import {Team} from "../../../classes/Team"
import './StandingsTableComponent.css'

interface StandingsTableProps {
  league: League;
  userTeamID: number;
}

const StandingsTableComponent: React.FC<StandingsTableProps> = ({ league , userTeamID}) => {
  // Sort teams by points in descending order

  // uncomment to view championship
  // if(league.relegatesTo)league = league.relegatesTo;
  // userTeamID=league.teams[0].id;

  const sortedTeams = [...league.teams].sort((a: Team, b: Team) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    } else if (a.goalDiff !== b.goalDiff) {
      return b.goalDiff - a.goalDiff;
    } else if (a.standingsInfo.goalsFor !== b.standingsInfo.goalsFor) {
      return b.standingsInfo.goalsFor - a.standingsInfo.goalsFor;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <table className="standings-table">
      <thead>
        <tr>
          <th></th>
          <th className="team-name-col">Team</th>
          <th className="stat-col">MP</th>
          <th className="stat-col">W</th>
          <th className="stat-col">D</th>
          <th className="stat-col">L</th>
          <th className="stat-col">GF</th>
          <th className="stat-col">GA</th>
          <th className="stat-col">GD</th>
          <th className="stat-col">Pts</th>
          {/* testing */}
          <th className="stat-col">Rep</th>
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
            } ${team.id === userTeamID ? "user-team-row" : ""}
            ${team.id === userTeamID ? "user-team-row" : ""}`}
           // Call the onTeamSelect function with the team object when clicked`} // Add "user-team-row" class if the team ID matches the user's team ID
          >
            <td className="pos-col"> {index + 1}</td>
            <td className="team-name-col">
              {/* Link to the team page */}
              <Link to={`/teams/${team.id}`} className="team-link">
                {team.name}
              </Link>
            </td>
            <td className="stat-col">{team.standingsInfo.wins + team.standingsInfo.draws + team.standingsInfo.losses}</td>
            <td className="stat-col">{team.standingsInfo.wins}</td>
            <td className="stat-col">{team.standingsInfo.draws}</td>
            <td className="stat-col">{team.standingsInfo.losses}</td>
            <td className="stat-col">{team.standingsInfo.goalsFor}</td>
            <td className="stat-col">{team.standingsInfo.goalsAgainst}</td>
            <td className="stat-col">{team.goalDiff}</td>
            <td className="stat-col">{team.points}</td>
            {/* testing */}
            <td className="stat-col">{team.reputation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StandingsTableComponent;