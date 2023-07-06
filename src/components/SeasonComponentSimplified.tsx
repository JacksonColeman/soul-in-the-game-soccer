import { Universe } from "../../classes/Universe";
import { League } from "../../classes/League";
import LeagueOverviewComponent from "./LeagueOverviewComponent";
import { useState } from "react";
import PreMatchComponent from "./PrematchComponent";
import PostMatchComponent from "./PostMatchComponent";
import "../styles/SeasonComponent.css";

interface SeasonProps {
  universe: Universe,
  league: League,
  seasonState: SeasonComponentState,
}

enum SeasonComponentState {
  Overview,
  PreMatch,
  PostMatch,
}

const SeasonComponentSimplified: React.FC<SeasonProps> = ({
  universe,
  league,
  seasonState,
}) => {
  const { user, year, week } = universe;

  if (!user) {
    console.log(universe);
    throw new Error("No user!");
  }

  const [selectedTeam, setSelectedTeam] = useState(league.getTeam(user.teamID));
  

  const resetSelectedTeam = () => {
    setSelectedTeam(league.getTeam(user.teamID));
  }

  const onTeamSelect = (id: number) => {
    const selectedTeam = universe.getTeamByID(id);
    selectedTeam ? setSelectedTeam(selectedTeam) : null;
  };

  let componentToRender;
  switch (seasonState) {
    case SeasonComponentState.Overview:
      componentToRender = <LeagueOverviewComponent universe={universe} leagueID={league.id} />;
      break;
    case SeasonComponentState.PreMatch:
      componentToRender = <PreMatchComponent team={league.getTeam(user.teamID)} />;
      break;
    case SeasonComponentState.PostMatch:
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
