import React from 'react';
import { Team } from '../../classes/Team';
import { PlayerOutfield } from '../../classes/Player';
import '../styles/OutfieldRosterComponent.css'; // Import the CSS file for styling

interface OutfieldRosterProps {
  team: Team;
  showStats: boolean;
}

const OutfieldRosterComponent: React.FC<OutfieldRosterProps> = ({
  team,
  showStats,
}) => {
  const outfieldPlayers = team.roster.filter(
    (player) => player instanceof PlayerOutfield
  ) as PlayerOutfield[];

  return (
    <div className="outfield-roster-container">
      <table className="outfield-roster-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            {showStats ? <th>MP</th> : <th>ATT</th>}
            {showStats ? <th>G</th> : <th>PLY</th>}
            {showStats ? <th>AST</th> : <th>DEF</th>}
            {showStats ? null : <th>PHY</th>}
          </tr>
        </thead>
        <tbody>
          {outfieldPlayers.map((player) => (
            <tr key={player.id}>
              <td><b>{player.firstName} {player.lastName}</b></td>
              <td><b>{player.age}</b></td>
              {showStats ? (
                <>
                  <td>{player.stats.matchesPlayed}</td>
                  <td>{player.stats.goals}</td>
                  <td>{player.stats.assists}</td>
                </>
              ) : (
                <>
                  <td>{player.attributes.attacking}</td>
                  <td>{player.attributes.playmaking}</td>
                  <td>{player.attributes.defending}</td>
                  <td>{player.attributes.physical}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OutfieldRosterComponent;
