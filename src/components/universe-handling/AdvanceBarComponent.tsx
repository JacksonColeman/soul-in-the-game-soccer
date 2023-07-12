import './AdvanceBarComponent.css';
import { Universe } from '../../classes/Universe';
import { League } from '../../classes/League';
import { useNavigate } from "react-router-dom";

enum SeasonComponentState {
    Overview,
    PreMatch,
    PlayMatch,
    PostMatch,
  }
  interface  AdvanceBarProps {
    universe: Universe;
    league: League;
    handleReloads: () => void;
    seasonState: SeasonComponentState;
    updateSeasonState: (state: SeasonComponentState) => void;
  }

const AdvanceBarComponent: React.FC<AdvanceBarProps> = ({universe,league,handleReloads, seasonState, updateSeasonState})=> {
    const { week } = universe;
    const navigate = useNavigate();
    const { schedule } = league;

    const handleAdvance = () => {
        // if not at season/homepage, go back before advancing
        if (window.location.pathname !== "/season") {
            navigate("/season");
            return;
        }

      if (seasonState == SeasonComponentState.Overview && !universe.playedCurrentWeek){
        updateSeasonState(SeasonComponentState.PreMatch);
        return;
      } 
      if (week === schedule.length && universe.playedCurrentWeek) {
        handleNewYear();
        handleReloads();
        updateSeasonState(SeasonComponentState.Overview);
      } else if (seasonState == SeasonComponentState.PreMatch){
        updateSeasonState(SeasonComponentState.PlayMatch)
      }
      else if (!universe.playedCurrentWeek) {
        handlePlayMatches();
        updateSeasonState(SeasonComponentState.PostMatch);
      } else {
        handleNextWeek();
        updateSeasonState(SeasonComponentState.Overview);
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
      updateSeasonState(SeasonComponentState.Overview);
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
      updateSeasonState(SeasonComponentState.Overview);
    }

    if (seasonState == SeasonComponentState.PlayMatch){
      return(
        <div className="user-bar"></div>
      )
    }
  
    return (
      <div className="advance-bar">
        {seasonState == SeasonComponentState.PreMatch && <button onClick={handleBack}>Back</button>}
        <button className="advance-button" onClick={handleAdvance}>Advance</button>
        <button className="full-season-button" onClick={handlePlayFullSeason}>Play Full Season</button>
      </div>
    );
  };

export default AdvanceBarComponent;