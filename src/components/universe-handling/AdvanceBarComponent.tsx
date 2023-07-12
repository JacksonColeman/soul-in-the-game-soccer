import './AdvanceBarComponent.css';
import { Universe } from '../../classes/Universe';
import { League } from '../../classes/League';
import { useNavigate } from "react-router-dom";
import { WeekState } from '../../constants/gameStates';
  interface  AdvanceBarProps {
    universe: Universe;
    league: League;
    handleReloads: () => void;
    weekState: WeekState;
    updateWeekState: (state: WeekState) => void;
  }

const AdvanceBarComponent: React.FC<AdvanceBarProps> = ({universe,league,handleReloads, weekState, updateWeekState})=> {
    const { week } = universe;
    const navigate = useNavigate();
    const { schedule } = league;

    const handleAdvance = () => {
        // if not at season/homepage, go back before advancing
        if (window.location.pathname !== "/season") {
            navigate("/season");
            return;
        }

      if (weekState == WeekState.Overview && !universe.playedCurrentWeek){
        updateWeekState(WeekState.PreMatch);
        return;
      } 
      if (week === schedule.length && universe.playedCurrentWeek) {
        handleNewYear();
        handleReloads();
        updateWeekState(WeekState.Overview);
      } else if (weekState == WeekState.PreMatch){
        updateWeekState(WeekState.PlayMatch)
      }
      else if (!universe.playedCurrentWeek) {
        handlePlayMatches();
        updateWeekState(WeekState.PostMatch);
      } else {
        handleNextWeek();
        updateWeekState(WeekState.Overview);
      }
  
      universe.saveUniverse();
    };

    const handleNewYear = () => {
        if (universe){universe.handleNewYear()};
      };
  
    const handlePlayFullSeason = () => {
      for (let cw = week; cw <= league.schedule.length; cw++){
        handlePlayMatches();
        handleNextWeek();
      }
      updateWeekState(WeekState.Overview);
      universe.saveUniverse();
      handleReloads();
    };
  
    const handleNextWeek = () => {
      const { schedule } = league;
      const currentWeek = universe.week;
  
      if (currentWeek < schedule.length) {
        universe.handleNextWeek();
      }
    };
  
    const handlePlayMatches = () => {
      universe.playWeekMatches();
    };

    const handleBack  = () => {
      updateWeekState(WeekState.Overview);
    }

    if (weekState == WeekState.PlayMatch){
      return(
        <div className="user-bar"></div>
      )
    }
  
    return (
      <div className="advance-bar">
        {weekState == WeekState.PreMatch && <button onClick={handleBack}>Back</button>}
        <button className="advance-button" onClick={handleAdvance}>Advance</button>
        <button className="full-season-button" onClick={handlePlayFullSeason}>Play Full Season</button>
      </div>
    );
  };

export default AdvanceBarComponent;