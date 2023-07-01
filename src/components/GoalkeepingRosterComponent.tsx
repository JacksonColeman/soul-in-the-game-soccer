import React from 'react';
import { Team } from '../../classes/Team';
import { PlayerGoalkeeper } from '../../classes/Player';
import '../styles/GoalkeepingRosterComponent.css'; // Import the CSS file for styling

interface GoalkeepingRosterProps {
  team: Team;
  showStats: boolean;
}

const GoalkeepingRosterComponent: React.FC<GoalkeepingRosterProps> = ({
  team,
  showStats,
}) => {
  const goalkeepers = team.roster.filter(
    (player) => player instanceof PlayerGoalkeeper
  ) as PlayerGoalkeeper[];

  return (
    <div className="goalkeeping-roster-container">
      <table className="goalkeeping-roster-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            {showStats ? <th>MP</th> : <th>DIV</th>}
            {showStats ? <th>GA</th> : <th>HAN</th>}
            {showStats ? null : <th>REF</th>}
            {showStats ? null : <th>PHY</th>}
          </tr>
        </thead>
        <tbody>
          {goalkeepers.map((player) => (
            <tr key={player.id}>
              <td><b>{player.firstName} {player.lastName}</b></td>
              <td>{player.age}</td>
              {showStats ? (
                <>
                  <td>{player.stats.matchesPlayed}</td>
                  <td>{player.stats.goalsAllowed}</td>
                </>
              ) : (
                <>
                  <td>{player.attributes.diving}</td>
                  <td>{player.attributes.handling}</td>
                  <td>{player.attributes.reflexes}</td>
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

export default GoalkeepingRosterComponent;
