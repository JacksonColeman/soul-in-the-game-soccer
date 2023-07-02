import React from "react";
import { Player, PlayerGoalkeeper } from "../../classes/Player";
import { Team } from "../../classes/Team";
import "../styles/FormationComponent.css";

interface FormationProps {
  team: Team;
}

const FormationComponent: React.FC<FormationProps> = ({ team }) => {
  const startingLineup = team.startingLineup;

  // Ensure the starting lineup has 11 players
//   if (startingLineup.length !== 11) {
//     return <div>Invalid starting lineup</div>;
//   }

    // Filter players by position
    const goalkeepers = startingLineup.filter((player) => player instanceof PlayerGoalkeeper);
    const defenders = startingLineup.filter((player) => player.position === "DF");
    const midfielders = startingLineup.filter((player) => player.position === "MF");
    const forwards = startingLineup.filter((player) => player.position === "FW");
  
    return (
      <div className="formation-container">
        <div className="formation-row">
          {goalkeepers.map((player) => (
            <div key={player.id} className="formation-player formation-goalkeeper">
              {getPlayerLabel(player)}
            </div>
          ))}
        </div>
        <div className="formation-row">
          {defenders.map((player) => (
            <div key={player.id} className="formation-player formation-defender">
              {getPlayerLabel(player)}
            </div>
          ))}
        </div>
        <div className="formation-row">
          {midfielders.map((player) => (
            <div key={player.id} className="formation-player formation-midfielder">
              {getPlayerLabel(player)}
            </div>
          ))}
        </div>
        <div className="formation-row">
          {forwards.map((player) => (
            <div key={player.id} className="formation-player formation-forward">
              {getPlayerLabel(player)}
            </div>
          ))}
        </div>
      </div>
    );
  };

// Helper function to get player label based on their position
const getPlayerLabel = (player: Player)=> {
    return (
        <div>
            <div>
                {player.lastName}
            </div>
            <div>
                {player.position}
                {" "}
                {player.overallRating}
            </div>
        </div>
    )
};

export default FormationComponent;
