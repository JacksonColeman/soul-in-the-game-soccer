import React from "react";
import { Player} from "../../classes/Player";
import { PlayerPosition } from "../../constants/positions";
import './PlayerIconComponent.css'

interface PlayerIconProps {
  player: Player;
  fieldPosition: PlayerPosition;
}

const PlayerIconComponent: React.FC<PlayerIconProps> = ({  player, fieldPosition, }) => {

  return (
    <div className={`player-icon`}>
      <strong className="player-name">{player.lastName}</strong>
      <div className="player-pos">{player.position} | {player.overallAtPosition(fieldPosition)}</div>
      <div>{"⚽".repeat(player.matchStats.goals) + "🅰️".repeat(player.matchStats.assists)}</div>
    </div>
  );
};

export default PlayerIconComponent;
