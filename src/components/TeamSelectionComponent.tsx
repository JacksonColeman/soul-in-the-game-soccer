import React, { useState } from "react";
import { Team } from "../../classes/Team";
import '../styles/TeamSelectionComponent.css'

interface TeamSelectionProps {
  teams: Team[];
  onTeamSelect: (selectedTeam: Team) => void;
  }
  
  const TeamSelectionComponent: React.FC<TeamSelectionProps> = ({ teams, onTeamSelect }) => {
  
    const renderTeams = () => {
      const rows: JSX.Element[] = [];
  
      for (let i = 0; i < teams.length; i += 5) {
        const rowTeams = teams.slice(i, i + 5);
  
        const row = (
          <div className="team-row" key={i}>
            {rowTeams.map((team) => (
              <div className="team-item" key={team.id}>
                <button onClick={() => onTeamSelect(team)}>
                  {team.name}
                </button>
              </div>
            ))}
          </div>
        );
  
        rows.push(row);
      }
  
      return rows;
    };
  
    return (
      <div>
        <h2>Select Your Team</h2>
        <div className="team-grid">{renderTeams()}</div>
      </div>
    );
  };
  
  export default TeamSelectionComponent;