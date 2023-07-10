import { Team } from '../../classes/Team';
import './PrematchComponent.css'
import LineupTurtleComponent from '../team-info/LineupTurtleComponent';

interface PreMatchComponentProps {
    team: Team;
  }

const PreMatchComponent: React.FC<PreMatchComponentProps> = ({ team }) => {

  
    return (
      <div className="prematch-container">
        {/* <TacticsComponent team={team}/> */}
        <LineupTurtleComponent lineup={team.lineup}/>
      </div>
    );
  };
  
  export default PreMatchComponent;