import { Player, PlayerGoalkeeper, PlayerOutfield } from "../../classes/Player";
import { Team } from "../../classes/Team";
import "../styles/RosterComponent.css"

type RosterProps = {
    team: Team | null;
  };
  const RosterComponent: React.FC<RosterProps> = ({ team }) => {
    if (!team) {
        return <div>No team selected</div>;
      }

    const goalkeepers = team.roster.filter((player) => player.position === 'GK') as PlayerGoalkeeper[];
    const defenders = team.roster.filter((player) => player.position === 'DF') as PlayerOutfield[];
    const midfielders = team.roster.filter((player) => player.position === 'MF') as PlayerOutfield[];
    const forwards = team.roster.filter((player) => player.position === 'FW') as PlayerOutfield[];
   
    return (
      <div className="roster-container">
        <h3>{team.name} Roster</h3>
        <table className="roster-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Age</th>
              <th>MP</th>
              <th>Goals</th>
            </tr>
          </thead>
          <tbody>
            {goalkeepers.map((goalkeeper, index) => (
              <tr key={goalkeeper.id}>
                <td>{goalkeeper.position}</td>
                <td>{goalkeeper.firstName.charAt(0)}. {goalkeeper.lastName}</td>
                <td>{goalkeeper.age}</td>
                <td>{goalkeeper.matchesPlayed}</td>
                <td>{goalkeeper.goals}</td>
              </tr>
            ))}
            <tr className="section-divider"></tr>
            {defenders.map((defender, index) => (
              <tr key={defender.id}>
                <td>{defender.position}</td>
                <td>{defender.firstName.charAt(0)}. {defender.lastName}</td>
                <td>{defender.age}</td>
                <td>{defender.matchesPlayed}</td>
                <td>{defender.goals}</td>
              </tr>
            ))}
            <tr className="section-divider"></tr>
            {midfielders.map((midfielder, index) => (
              <tr key={midfielder.id}>
                <td>{midfielder.position}</td>
                <td>{midfielder.firstName.charAt(0)}. {midfielder.lastName}</td>
                <td>{midfielder.age}</td>
                <td>{midfielder.matchesPlayed}</td>
                <td>{midfielder.goals}</td>
              </tr>
            ))}
            <tr className="section-divider"></tr>
            {forwards.map((forward, index) => (
              <tr key={forward.id}>
                <td>{forward.position}</td>
                <td>{forward.firstName.charAt(0)}. {forward.lastName}</td>
                <td>{forward.age}</td>
                <td>{forward.matchesPlayed}</td>
                <td>{forward.goals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RosterComponent;