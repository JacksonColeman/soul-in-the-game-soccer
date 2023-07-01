import React from 'react';
import { Team } from '../../classes/Team';
import { Player } from '../../classes/Player';
import '../styles/RosterComponent.css';
import PlayerComponent from './PlayerComponent';

type RosterProps = {
  team: Team;
};

const RosterComponent: React.FC<RosterProps> = ({ team }) => {
  return (
    <div>
      <h3>{team.name} Roster</h3>
      <>
      {team.roster.map((player: Player) => (
        <PlayerComponent key={player.id} player={player} />
      ))}
      </>
    </div>
  )
};

export default RosterComponent;
