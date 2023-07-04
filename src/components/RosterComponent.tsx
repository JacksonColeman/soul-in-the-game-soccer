import React from 'react';
import { Team } from '../../classes/Team';
import '../styles/RosterComponent.css';
import TeamPlayersTableComponent from './TeamPlayersTableComponent';
import FormationComponent from './FormationComponent';

type RosterProps = {
  team: Team | undefined;
};

const RosterComponent: React.FC<RosterProps> = ({ team }) => {
  if(team){
  return (
    <div className="roster-wrapper grid-item">
          <h3>{team.name} Roster</h3>
          <TeamPlayersTableComponent team={team} />
          <FormationComponent team={team} />
        </div>
  )
  }
  return (<div></div>);
};

export default RosterComponent;
