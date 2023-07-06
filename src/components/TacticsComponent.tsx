import React, { useState } from 'react';
import { Team } from '../../classes/Team';
import { Player } from '../../classes/Player';
import PlayerComponent from './PlayerComponent';
import '../styles/TacticsComponent.css'

interface TacticsProps {
  team: Team;
}

const TacticsComponent: React.FC<TacticsProps> = ({ team }) => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handlePlayerClick = (player: Player) => {
    if (selectedPlayer) {
      // Swap the selected player with the clicked player
      team.swapPlayers(selectedPlayer, player);
      setSelectedPlayer(null);
    } else {
      setSelectedPlayer(player);
    }
  };

  return (
    <div className="tactics-container">
      <div className="starting-lineup">
        <h3>Starting Lineup</h3>
        {team.startingLineup.map((player) => (
          <div
            key={player.id}
            className={`player-card ${selectedPlayer === player ? 'selected' : ''}`}
          >
            <PlayerComponent player={player}/>
            <button onClick={() => handlePlayerClick(player)}>sub</button>
          </div>
        ))}
      </div>
      <div className="bench">
        <h3>Bench</h3>
        {team.subsBench.map((player) => (
          <div
            key={player.id}
            className={`player-card ${selectedPlayer === player ? 'selected' : ''}`}
          >
            <PlayerComponent player={player}/>
            <button onClick={() => handlePlayerClick(player)}>sub</button>
          </div>
        ))}
      </div>
      <div className="reserves">
        <h3>Reserves</h3>
        {team.reservePlayers.map((player) => (
          <div
            key={player.id}
            className={`player-card ${selectedPlayer === player ? 'selected' : ''}`}
            onClick={() => handlePlayerClick(player)}
          >
            <div>
            <PlayerComponent player={player}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TacticsComponent;
