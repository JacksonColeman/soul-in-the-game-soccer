import React from 'react';
import './TeamPlayersTableComponent.css'
import { Lineup } from '../../classes/Lineup';

interface LineupTableProps {
  lineup: Lineup;
}

const LineupTableComponent: React.FC<LineupTableProps> = ({lineup}) => {
    const starters = lineup.starterArray;

    return (
      <table className="players-table">
        <thead>
          <tr>
            <th className="stat-col">Pos</th>
            <th className="player-name-col">Name</th>
            <th className="stat-col">Age</th>
            <th className="stat-col">OVR</th>
            <th className="stat-col">Cond</th>
            <th className="stat-col">status</th>
          </tr>
        </thead>
        <tbody>
          {starters.map(player => (
            <tr
              key={player.id}
              className={`player-row ${player.position === 'GK' ? 'goalkeeper' : 'outfield-player'} ${player.injured ? "injured" : ""}`}
            >
              <td className="stat-col">{player.fieldPosition}</td>
              <td className="player-name">{player.firstName.charAt(0)}. {player.lastName}</td>
              <td className="stat-col">{player.age}</td>
              <td className="stat-col">{player.overallRating}</td>
              <td className="stat-col">{Math.round(player.condition)}</td>
              <td className="stat-col">{player.injured ? `Inj ${player.injuryTime}` : `:)`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


export default LineupTableComponent;
