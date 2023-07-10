import React, { useState } from "react";
import { Universe } from "../../../classes/Universe";
import StandingsTableComponent from "./StandingsTableComponent";
import LeagueLeadersComponent from "../league-leaders/LeagueLeadersComponent";

interface StandingsProps {
  universe: Universe;
  leagueID: number;
  userTeamID: number;
}

const StandingsContainerComponent: React.FC<StandingsProps> = ({
  universe,
  leagueID,
  userTeamID
}) => {
  const [showStandings, setShowStandings] = useState(true);
  const [selectedLeagueID, setSelectedLeagueID] = useState(leagueID);
  const [selectedLeague, setSelectedLeague] = useState(universe.getLeagueByID(leagueID));

  const toggleStandingsView = () => {
    setShowStandings(!showStandings);
  };

  const handleLeagueChange = (leagueID: number) => {
    setSelectedLeagueID(leagueID);
    setSelectedLeague(universe.getLeagueByID(leagueID))
  };


  return (
    <div className="standings-wrapper grid-item">
      <h3>{showStandings ? `${selectedLeague.name} Standings` : `${selectedLeague.name} Stat Leaders`}</h3>
      {showStandings ? (
        <StandingsTableComponent
          league={selectedLeague}
          userTeamID={userTeamID}
        />
      ) : (
        <div>
          <LeagueLeadersComponent league={selectedLeague} />
        </div>
      )}
      <a href="/#" onClick={toggleStandingsView}>
        {showStandings ? "Stat Leaders" : "Standings"}
      </a>
      <div>
        <select value={selectedLeagueID} onChange={(e) => handleLeagueChange(Number(e.target.value))}>
          {universe.leagues.map((league) => (
            <option key={league.id} value={league.id}>
              {league.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StandingsContainerComponent;
