import React from 'react';
import { Team } from '../../classes/Team';
import './RosterComponent.css';
import TeamPlayersTableComponent from './TeamPlayersTableComponent';
import PositionOverallsComponent from './PositionOverallsComponent';

type RosterProps = {
  team: Team | undefined;
};

const RosterComponent: React.FC<RosterProps> = ({ team }) => {
  if(team){
  return (
    <div className="roster-wrapper grid-item">
          <h3>{team.name} Roster</h3>
          <TeamPlayersTableComponent team={team} />
          {/* <PositionOverallsComponent team={team} /> */}
        </div>
  )
  }
  return (<div></div>);
};

export default RosterComponent;
