import { Universe } from "../../../classes/Universe";
import { League } from "../../../classes/League";
import LeagueOverviewComponent from "../overview/LeagueOverviewComponent";
import PreMatchComponent from "../../matchday/PrematchComponent";
import PostMatchComponent from "../../matchday/PostMatchComponent";
import "./SeasonComponent.css";
import UserPlayMatchComponent from "../../matchday/UserPlayMatchComponent";
import { WeekState } from "../../../constants/gameStates";

interface SeasonProps {
  universe: Universe,
  league: League,
  weekState: WeekState
  handlePostMatchAdvance: ()=>void;
}

const SeasonComponentSimplified: React.FC<SeasonProps> = ({
  universe,
  league,
  weekState,
  handlePostMatchAdvance
}) => {
  const { user } = universe;

  if (!user) {
    console.log(universe);
    throw new Error("No user!");
  }

  let componentToRender;
  switch (weekState) {
    case WeekState.Overview:
      componentToRender = <LeagueOverviewComponent universe={universe} leagueID={league.id} />;
      
      break;
    case WeekState.PreMatch:
      componentToRender = <PreMatchComponent matchup={universe.userMatchup} team={league.getTeam(user.teamID)} />;
      break;
    case WeekState.PlayMatch:
      componentToRender = <UserPlayMatchComponent universe={universe} matchup={universe.userMatchup} handleAdvance={handlePostMatchAdvance}/>
      break;
    case WeekState.PostMatch:
      componentToRender = <PostMatchComponent universe={universe} league={league} user={user} />;
      break;
    default:
      componentToRender = null;
      break;
  }


  return (
    <div className="season-container"> 
      {componentToRender}
      </div>
  );
};

export default SeasonComponentSimplified;
