import React from "react";
import { Universe } from "../../classes/Universe";
import { League } from "../../classes/League";
import { useParams } from "react-router-dom";
import RosterComponent from "./RosterComponent";

interface TeamPageProps {
  universe: Universe;
  league: League;
}

const TeamPageComponent: React.FC<TeamPageProps> = ({ universe, league }) => {
  const { teamID } = useParams(); // Access the teamID parameter from the URL

  if (!teamID){throw new Error("invalid teamID")}
  // Find the team object based on the teamID
  const team = universe.getTeamByID(parseInt(teamID));

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div>
      <h2>{team.name}</h2>
      {/* Display the team information */}
      <p>Wins: {team.standingsInfo.wins}</p>
      <p>Draws: {team.standingsInfo.draws}</p>
      <p>Losses: {team.standingsInfo.losses}</p>
      {/* Add more team information as needed */}
      <RosterComponent team={team}/>
    </div>
  );
};

export default TeamPageComponent;
