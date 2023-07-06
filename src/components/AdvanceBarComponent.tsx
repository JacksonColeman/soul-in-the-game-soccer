import '../styles/UserBarComponent.css';
import { Universe } from '../../classes/Universe';
import { League } from '../../classes/League';
import { useNavigate } from "react-router-dom";



enum SeasonComponentState {
    Overview,
    PreMatch,
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
        console.log(window.location.pathname);
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
      } else if (!universe.playedCurrentWeek) {
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
      universe.playAllMatches();
      universe.week = league.schedule.length;
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
  
    return (
      <div className="user-bar">
        <button className="advance-button" onClick={handleAdvance}>Advance</button>
        <button className="full-season-button" onClick={handlePlayFullSeason}>Play Full Season</button>
      </div>
    );
  };

export default AdvanceBarComponent;