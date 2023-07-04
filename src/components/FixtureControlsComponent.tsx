import React from "react";
import { Universe } from "../../classes/Universe";
import { League } from "../../classes/League";

interface FixtureControlsProps {
  universe: Universe;
  league: League;
  handleReloads: () => void;
  resetSelectedTeam: () => void;
}

const FixtureControlsComponent: React.FC<FixtureControlsProps> = ({
  universe,
  league,
  handleReloads,
  resetSelectedTeam
}) => {
  const { week } = universe;

  const handleAdvance = () => {
    const { schedule } = league;

    const handleNewYear = () => {
        if (universe){universe.handleNewYear()};
      };

    if (week === schedule.length && universe.playedCurrentWeek) {
      handleNewYear();
      resetSelectedTeam();
    } else if (!universe.playedCurrentWeek) {
      handlePlayMatches();
    } else {
      handleNextWeek();
      resetSelectedTeam();
    }

    universe.saveUniverse();
    handleReloads();
  };

  const handlePlayFullSeason = () => {
    universe.playAllMatches();
    universe.week = league.schedule.length;
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
    <div>
      <button onClick={handleAdvance}>Advance</button>
      <button onClick={handlePlayFullSeason}>Play Full Season</button>
    </div>
  );
};

export default FixtureControlsComponent;
