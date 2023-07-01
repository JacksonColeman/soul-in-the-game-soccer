import React, { useState } from 'react';
import { Player, PlayerGoalkeeper, PlayerOutfield } from '../../classes/Player'
import '../styles/PlayerComponent.css'

interface PlayerComponentProps {
  player: Player;
}

const PlayerComponent: React.FC<PlayerComponentProps> = ({ player }) => {
  const [moreDetails, setMoreDetails] = useState(false);
  
  const toggleMoreDetails = () => {
      setMoreDetails(!moreDetails);
  }
  const renderPlayerAttributes = () => {
    if (player instanceof PlayerGoalkeeper) {
      return (
        <div className="player-attributes">
            <div className="player-attributes-1">
                <div>DIV: {player.attributes.diving}</div>
                <div>HAN: {player.attributes.handling}</div>
            </div>
            <div className="player-attributes-2">
                <div>REF: {player.attributes.reflexes}</div>
                <div>PHY: {player.attributes.physical}</div>
            </div>
        </div>
      );
    } else if (player instanceof PlayerOutfield) {
      return (
        <div className="player-attributes">
            <div className="player-attributes-1">
                <div>ATT: {player.attributes.attacking}</div>
                <div>PLY: {player.attributes.playmaking}</div>
            </div>
            <div className="player-attributes-2">
                <div>DEF: {player.attributes.defending}</div>
                <div>PHY: {player.attributes.physical}</div>
            </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderPlayerStats = () => {
    if (player instanceof PlayerGoalkeeper) {
        return (
          <div className='player-stats'>
            <div>MP: {player.stats.matchesPlayed}</div>
            <div>GC: {player.stats.goalsConceded}</div>
            <div>CS: {player.stats.cleanSheets}</div>
          </div>
        );
      } else if (player instanceof PlayerOutfield) {
        return (
          <div className='player-stats'>
            {/* <div>MP: {player.stats.matchesPlayed}</div> */}
            <div>G: {player.stats.goals}</div>
            <div>A: {player.stats.assists}</div>
          </div>
        );
      } else {
        return null;
      }
  };

  return (
    <div className="player-box">
      <div>
        <div className="player-name">{player.firstName.charAt(0)}. {player.lastName.toUpperCase()}</div>
        <div className="player-age-pos">Age: {player.age} | {player.position} | OVR: {player.overallRating} </div>
        <button onClick={toggleMoreDetails}>+</button>
      </div>
      {moreDetails && 
      <div className="player-details">
        {renderPlayerAttributes()}
        {renderPlayerStats()}
      </div>}
    </div>
  );
};

export default PlayerComponent;
