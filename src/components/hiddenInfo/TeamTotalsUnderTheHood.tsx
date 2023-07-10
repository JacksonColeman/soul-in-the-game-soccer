import React from "react";
import { League } from "../../classes/League";
import { Team } from "../../classes/Team";
import { PlayerAttribute } from "../../constants/attributes";

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
          <th>DEF</th>
          <th>MEN</th>
          <th>PAS</th>
          <th>PHY</th>
          <th>SHO</th>
          <th>SPD</th>
        </tr>
      </thead>
      <tbody>
        {league.teams.map((team: Team) => (
          <tr key={team.id}>
            <td>{team.name}</td>
            <td>{team.attributeRatios(league)[PlayerAttribute.Defending].toFixed(2)}</td>
            <td>{team.attributeRatios(league)[PlayerAttribute.Mental].toFixed(2)}</td>
            <td>{team.attributeRatios(league)[PlayerAttribute.Passing].toFixed(2)}</td>
            <td>{team.attributeRatios(league)[PlayerAttribute.Physical].toFixed(2)}</td>
            <td>{team.attributeRatios(league)[PlayerAttribute.Shooting].toFixed(2)}</td>
            <td>{team.attributeRatios(league)[PlayerAttribute.Speed].toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamTotalsUnderTheHood;
