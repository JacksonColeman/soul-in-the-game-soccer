import React from "react";
import { Player} from "../../classes/Player";
import { PlayerPosition } from "../../constants/positions";
import './PlayerIconComponent.css'

interface PlayerIconProps {
  player: Player;
  fieldPosition: PlayerPosition;
  selectedPlayer: Player | null;
}

const PlayerIconComponent: React.FC<PlayerIconProps> = ({ player, fieldPosition, selectedPlayer }) => {
  return (
    <div className={`player-icon ${player == selectedPlayer ? 'selected': ''}`}>
      <div>{":)"}</div>
      <div className="player-name">{player.lastName}</div>
      <div className="player-name">{player.position}</div>
      <div className="player-overall">{player.overallAtPosition(fieldPosition)} OVR</div>
      {selectedPlayer && <div className="selected-player-change">{selectedPlayer.lastName} OVR: {selectedPlayer.overallAtPosition(fieldPosition)}</div>}
    </div>
  );
};

export default PlayerIconComponent;
