import { Team } from '../../classes/Team';
import './PrematchComponent.css'
import LineupTurtleComponent from '../team-info/LineupTurtleComponent';
import LineupTableComponent from '../team-info/LineupTableComponent';
import { Matchup } from '../../classes/Matchup';

interface PreMatchComponentProps {
    matchup: Matchup;
    team: Team;
  }

const PreMatchComponent: React.FC<PreMatchComponentProps> = ({ matchup, team }) => {

    const userLineup = team.lineup;
    let opponent: Team;

    if (matchup.homeTeam == team){
      opponent = matchup.awayTeam;
    } else {
      opponent = matchup.homeTeam;
    }

    const oppoLineup = opponent.lineup;
  
    return (
      <div className="prematch-container">
        <h2>Match Preview</h2>
        <div className='prematch-team-container'>
          <div className="prematch-team">
            <h3>{team.name}</h3>
            <div>
              {team.standingsInfo.wins} W - {team.standingsInfo.draws} D - {team.standingsInfo.losses} L
            </div>
            <LineupTurtleComponent lineup={userLineup}/>
            <div>
              Manager: {team.manager?.firstName} {team.manager?.lastName}
            </div>
          </div>
          <div className="prematch-team">
            <h3>{opponent.name}</h3>
            <div>
              {opponent.standingsInfo.wins} W - {opponent.standingsInfo.draws} D - {opponent.standingsInfo.losses} L
            </div>
            <LineupTurtleComponent lineup={oppoLineup}/>
            <div>
              Manager: {opponent.manager?.firstName} {opponent.manager?.lastName}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PreMatchComponent;