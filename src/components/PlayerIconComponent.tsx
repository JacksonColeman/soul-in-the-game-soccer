import React from "react";
import { Player } from "../../classes/Player";
import '../styles/PlayerIconComponent.css'

interface PlayerIconProps {
  player: Player;
  isSelected: boolean;
}

const PlayerIconComponent: React.FC<PlayerIconProps> = ({ player, isSelected }) => {
  return (
    <div className={`player-icon ${isSelected ? 'selected': ''}`}>
      <div>{":)"}</div>
      <div className="player-name">{player.lastName}</div>
      <div className="player-name">{player.position}</div>
      <div className="player-overall">{player.overallRating} OVR</div>
    </div>
  );
};

export default PlayerIconComponent;
