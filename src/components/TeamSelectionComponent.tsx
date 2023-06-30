import React, { useState } from "react";
import '../styles/TeamSelectionComponent.css';
import teams from "../data/teams.json";

interface TeamSelectionProps {
  onTeamSelect: (selectedTeamId: number) => void;
  handleStartGame: () => void;
}

const TeamSelectionComponent: React.FC<TeamSelectionProps> = ({ onTeamSelect, handleStartGame }) => {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  const handleTeamClick = (teamId: number) => {
    setSelectedTeamId(teamId);
    onTeamSelect(teamId);
  };

  const renderTeams = () => {
    const rows: JSX.Element[] = [];

    for (let i = 0; i < teams.length; i += 5) {
      const rowTeams = teams.slice(i, i + 5);

      const row = (
        <div className="team-row" key={i}>
          {rowTeams.map((team) => (
            <div className="team-item" key={team.id}>
              <button
                className={selectedTeamId === team.id ? "team-button selected" : "team-button"}
                onClick={() => handleTeamClick(team.id)}
              >
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
      <button disabled={!selectedTeamId} onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default TeamSelectionComponent;
