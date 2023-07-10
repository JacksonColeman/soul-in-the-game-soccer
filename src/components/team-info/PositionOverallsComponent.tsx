import React from 'react';
import { Team } from '../../classes/Team';
import { PlayerAttribute } from '../../constants/attributes';
import { PlayerPosition } from '../../constants/positions';
import './PositionOverallsComponent.css'


interface Props {
  team: Team;
}

const PositionOverallsComponent: React.FC<Props> = ({ team }) => {
  return (
    <div className="position-overalls">
      <h3>Position Strength</h3>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>NaturalPos</th>
            <th>Age</th>
            {Object.values(PlayerPosition).map((position) => (
              <th key={position}>{position}</th>
            ))}
            {Object.values(PlayerAttribute).map((attribute) => (
              <th key={attribute}>{attribute}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {team.roster.map((player) => (
            <tr key={player.id}>
              <td>{player.lastName}</td>
              <td>{player.position}</td>
              <td>{player.age}</td>
              {Object.values(PlayerPosition).map((position) => (
                <td key={`${player.id}-${position}`}>
                  {player.overallAtPosition(position as PlayerPosition)}
                </td>
              ))}
              {Object.values(PlayerAttribute).map((attribute) => (
                <td key={`${player.id}-${attribute}`}>
                  {player.attributes[attribute]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PositionOverallsComponent;
