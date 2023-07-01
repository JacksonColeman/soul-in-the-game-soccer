import React from "react";
import { League } from "../../classes/League";
import { Team } from "../../classes/Team";

interface TeamTotalsUnderTheHoodProps {
  league: League;
}

const TeamTotalsUnderTheHood: React.FC<TeamTotalsUnderTheHoodProps> = ({
  league,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>TA</th>
          <th>TD</th>
          <th>TPl</th>
          <th>TPh</th>
        </tr>
      </thead>
      <tbody>
        {league.teams.map((team: Team) => (
          <tr key={team.id}>
            <td>{team.name}</td>
            <td>{team.teamAttackingTotal}</td>
            <td>{team.teamDefenseTotal}</td>
            <td>{team.teamPlaymakingTotal}</td>
            <td>{team.teamPhysicalTotal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamTotalsUnderTheHood;
