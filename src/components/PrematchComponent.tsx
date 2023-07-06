import { Team } from '../../classes/Team';
import '../styles/PrematchComponent.css'
import LineupTurtleComponent from './LineupTurtleComponent';
import TacticsComponent from "./TacticsComponent";
import { Lineup } from '../../classes/Lineup';

interface PreMatchComponentProps {
    team: Team;
  }

const PreMatchComponent: React.FC<PreMatchComponentProps> = ({ team }) => {

    const emptyLineup = new Lineup();
  
    return (
      <div className="prematch-container">
        {/* <TacticsComponent team={team}/> */}
        <LineupTurtleComponent team={team} lineup={emptyLineup}/>
      </div>
    );
  };
  
  export default PreMatchComponent;