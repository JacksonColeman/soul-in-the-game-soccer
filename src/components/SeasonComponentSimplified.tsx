import { Universe } from "../../classes/Universe";
import { League } from "../../classes/League";
import UserBarComponent from "./UserBarComponent";
import MatchweekComponent from "./MatchweekComponent";
import FixtureControlsComponent from "./FixtureControlsComponent";
import RosterComponent from "./RosterComponent";

import "../styles/SeasonComponent.css";
import StandingsContainerComponent from "./StandingsContainerComponent";
import { useState } from "react";

interface SeasonProps {
  universe: Universe,
  league: League,
  handleUserLogout: () => void;
  handleReloads: () => void;
}

const SeasonComponentSimplified: React.FC<SeasonProps> = ({
  universe,
  league,
  handleUserLogout,
  handleReloads
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

  return (
    <div className="season-container">
      <UserBarComponent
        user={user}
        team={universe.getTeamByID(user.teamID)}
        year={year}
        week={week}
        onExitGame={handleUserLogout}
      />
      <div className="season-container-grid">
        <StandingsContainerComponent 
            universe={universe}
            leagueID={league.id} 
            userTeamID={user.teamID} 
            onTeamSelect={onTeamSelect}/>
        <MatchweekComponent 
            key={week}
            matchups={league.schedule[week - 1]}
            week={week}
            userTeamID={user.teamID} />
        <RosterComponent team={selectedTeam} />
      </div>
      <div>
      <FixtureControlsComponent
            universe={universe}
            league={league}
            handleReloads={handleReloads}
            resetSelectedTeam={resetSelectedTeam}
        />
      </div>
    </div>
  );
};

export default SeasonComponentSimplified;
