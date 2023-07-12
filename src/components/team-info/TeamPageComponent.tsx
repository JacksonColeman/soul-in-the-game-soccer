import React from "react";
import { Universe } from "../../classes/Universe";
import { League } from "../../classes/League";
import { useParams } from "react-router-dom";
import RosterComponent from "./RosterComponent";

interface TeamPageProps {
  universe: Universe;
  league: League;
}

const TeamPageComponent: React.FC<TeamPageProps> = ({ universe }) => {
  const { teamID } = useParams(); // Access the teamID parameter from the URL

  if (!teamID){throw new Error("invalid teamID")}
  // Find the team object based on the teamID
  const team = universe.getTeamByID(parseInt(teamID));

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div>
      <h3>{team.name}</h3>
      {team.manager && <p>Manager: {team.manager.firstName} {team.manager.lastName} | {team.manager.mentality} | {team.manager.preferredFormation.name} </p>}
      <RosterComponent team={team}/>
    </div>
  );
};

export default TeamPageComponent;
