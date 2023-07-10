import React, { useState } from "react";
import "./LineupTurtleComponent.css";
import { Lineup } from "../../classes/Lineup";
import { Player } from "../../classes/Player";
import { PlayerPosition } from "../../constants/positions";
import PlayerIconComponent from "./PlayerIconComponent";

interface LineupTurtleComponentProps {
  lineup: Lineup;
}

const LineupTurtleComponent: React.FC<LineupTurtleComponentProps> = ({ lineup }) => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className="turtle-container">
    <div className="turtle">
      <div className="turtle-row turtle-row-forwards">
        <div className="turtle-pos-st">
          {lineup.starters[PlayerPosition.ST].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.ST}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="turtle-row turtle-row-attacking-midfield">
        <div className="turtle-pos-lw">
          {lineup.starters[PlayerPosition.LW].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.LW}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-cam">
          {lineup.starters[PlayerPosition.CAM].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.CAM}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-rw">
          {lineup.starters[PlayerPosition.RW].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.RW}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="turtle-row turtle-row-midfield">
        <div className="turtle-pos-lm">
          {lineup.starters[PlayerPosition.LM].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.LM}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-cm">
          {lineup.starters[PlayerPosition.CM].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.CM}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-rm">
          {lineup.starters[PlayerPosition.RM].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.RM}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="turtle-row turtle-row-defensive-midfield">
        <div className="turtle-pos-cdm">
          {lineup.starters[PlayerPosition.CDM].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.CDM}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="turtle-row turtle-row-defenders">
        <div className="turtle-pos-lb">
          {lineup.starters[PlayerPosition.LB].map((p) => (
            <div className="player-icon-container"  onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.LB}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-cb">
          {lineup.starters[PlayerPosition.CB].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.CB}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
        <div className="turtle-pos-rb">
          {lineup.starters[PlayerPosition.RB].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.RB}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
      </div>
      <div className="turtle-row turtle-row-goalkeepers">
        <div className="turtle-pos-gk">
          {lineup.starters[PlayerPosition.GK].map((p) => (
            <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
            <PlayerIconComponent
              key={p.id}
              player={p}
              fieldPosition={PlayerPosition.GK}
              selectedPlayer={selectedPlayer}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bench">
      <h4>Bench</h4>
    {lineup.bench.map((p) => (
        <div className="player-icon-container" onClick={() => handlePlayerClick(p)}>
        <PlayerIconComponent
          key={p.id}
          player={p}
          fieldPosition={p.position}
          selectedPlayer={selectedPlayer}
        />
        </div>
      ))}
  </div>
  </div>
  );
};

export default LineupTurtleComponent;
