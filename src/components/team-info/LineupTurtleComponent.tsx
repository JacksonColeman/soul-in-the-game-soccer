import React from "react";
import "./LineupTurtleComponent.css";
import { Lineup } from "../../classes/Lineup";
import { PlayerPosition } from "../../constants/positions";
import PlayerIconComponent from "./PlayerIconComponent";

interface LineupTurtleComponentProps {
  lineup: Lineup;
}

const LineupTurtleComponent: React.FC<LineupTurtleComponentProps> = ({ lineup }) => {
  return (
    <div className="turtle-container">
      <div className="turtle">
        <div className="turtle-row turtle-row-forwards">
          <div className="turtle-pos-st">
            {lineup.starters[PlayerPosition.ST].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.ST}
              />
            ))}
          </div>
        </div>
        <div className="turtle-row turtle-row-attacking-midfield">
          <div className="turtle-pos-lw">
            {lineup.starters[PlayerPosition.LW].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.LW}
              />
            ))}
          </div>
          <div className="turtle-pos-cam">
            {lineup.starters[PlayerPosition.CAM].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.CAM}
              />
            ))}
          </div>
          <div className="turtle-pos-rw">
            {lineup.starters[PlayerPosition.RW].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.RW}
              />
            ))}
          </div>
        </div>
        <div className="turtle-row turtle-row-midfield">
          <div className="turtle-pos-lm">
            {lineup.starters[PlayerPosition.LM].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.LM}
              />
            ))}
          </div>
          <div className="turtle-pos-cm">
            {lineup.starters[PlayerPosition.CM].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.CM}
              />
            ))}
          </div>
          <div className="turtle-pos-rm">
            {lineup.starters[PlayerPosition.RM].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.RM}
              />
            ))}
          </div>
        </div>
        <div className="turtle-row turtle-row-defensive-midfield">
          <div className="turtle-pos-cdm">
            {lineup.starters[PlayerPosition.CDM].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.CDM}
              />
            ))}
          </div>
        </div>
        <div className="turtle-row turtle-row-defenders">
          <div className="turtle-pos-lb">
            {lineup.starters[PlayerPosition.LB].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.LB}
              />
            ))}
          </div>
          <div className="turtle-pos-cb">
            {lineup.starters[PlayerPosition.CB].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.CB}
              />
            ))}
          </div>
          <div className="turtle-pos-rb">
            {lineup.starters[PlayerPosition.RB].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.RB}
              />
            ))}
          </div>
        </div>
        <div className="turtle-row turtle-row-goalkeepers">
          <div className="turtle-pos-gk">
            {lineup.starters[PlayerPosition.GK].map((p) => (
              <PlayerIconComponent
                key={p.id}
                player={p}
                fieldPosition={PlayerPosition.GK}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineupTurtleComponent;
