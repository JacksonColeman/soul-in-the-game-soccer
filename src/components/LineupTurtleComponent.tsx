import React, { useState } from "react";
import "../styles/LineupTurtleComponent.css";
import { Lineup, FieldPositions } from "../../classes/Lineup";
import { Team } from "../../classes/Team";
import { Player } from "../../classes/Player";
import PlayerIconComponent from "./PlayerIconComponent";

interface LineupTurtleComponentProps {
  team: Team;
  lineup: Lineup;
}

const LineupTurtleComponent: React.FC<LineupTurtleComponentProps> = ({ team, lineup }) => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  // fill lineup for testing
  lineup.addPlayer(team.roster[11], FieldPositions.ST);
  lineup.addPlayer(team.roster[10], FieldPositions.ST);
  lineup.addPlayer(team.roster[9], FieldPositions.CM);
  lineup.addPlayer(team.roster[8], FieldPositions.CM);
  lineup.addPlayer(team.roster[7], FieldPositions.LM);
  lineup.addPlayer(team.roster[6], FieldPositions.RM);
  lineup.addPlayer(team.roster[5], FieldPositions.LB);
  lineup.addPlayer(team.roster[4], FieldPositions.CB);
  lineup.addPlayer(team.roster[3], FieldPositions.CB);
  lineup.addPlayer(team.roster[2], FieldPositions.RB);
  lineup.addPlayer(team.roster[1], FieldPositions.GK);

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className="turtle">
      <div className="turtle-row turtle-row-forwards">
        <div className="turtle-pos-st">
          {lineup.positions[FieldPositions.ST].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="turtle-row turtle-row-attacking-midfield">
        <div className="turtle-pos-lw">
          {lineup.positions[FieldPositions.LW].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-cam">
          {lineup.positions[FieldPositions.CAM].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-rw">
          {lineup.positions[FieldPositions.RW].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="turtle-row turtle-row-midfield">
        <div className="turtle-pos-lm">
          {lineup.positions[FieldPositions.LM].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-cm">
          {lineup.positions[FieldPositions.CM].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-rm">
          {lineup.positions[FieldPositions.RM].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="turtle-row turtle-row-defensive-midfield">
        <div className="turtle-pos-cdm">
          {lineup.positions[FieldPositions.CDM].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="turtle-row turtle-row-defenders">
        <div className="turtle-pos-lb">
          {lineup.positions[FieldPositions.LB].map((p) => (
            <div className="player-icon-container"  onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-cb">
          {lineup.positions[FieldPositions.CB].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-rb">
          {lineup.positions[FieldPositions.RB].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="turtle-row turtle-row-goalkeepers">
        <div className="turtle-pos-gk">
          {lineup.positions[FieldPositions.GK].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              isSelected={selectedPlayer === p}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineupTurtleComponent;
