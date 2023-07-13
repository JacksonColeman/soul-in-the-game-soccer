import React, { useState } from 'react';
import { Team } from '../../classes/Team';
import { Player} from '../../classes/Player';
import { PlayerAttribute } from '../../constants/attributes';
import './TeamPlayersTableComponent.css'

interface TeamPlayersTableProps {
  team: Team;
}

enum Tab {
  STARTING_LINEUP = 'Starting Lineup',
  BENCH = 'Bench',
  RESERVES = 'Reserves',
}

const TeamPlayersTableComponent: React.FC<TeamPlayersTableProps> = ({ team }) => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.STARTING_LINEUP);
  const [lineup, setLineup] = useState(team.lineup);

  const renderPlayerTable = (players: Player[]) => {
    return (
      <table className="players-table">
        <thead>
          <tr>
            <th className="player-name-col">Name</th>
            <th className="stat-col">Age</th>
            <th className="stat-col">Pos</th>
            <th className="stat-col">OVR</th>
            <th className="stat-col">MP</th>
            <th className="stat-col">G</th>
            <th className="stat-col">A</th>
            <th className="stat-col">Defending</th>
            <th className="stat-col">Mental</th>
            <th className="stat-col">Passing</th>
            <th className="stat-col">Physical</th>
            <th className="stat-col">Shooting</th>
            <th className="stat-col">Speed</th>
            <th className="stat-col">cond</th>
            <th className="stat-col">status</th>
            <th className="stat-col">VALUE</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr
              key={player.id}
              className={`player-row ${player.position === 'GK' ? 'goalkeeper' : 'outfield-player'} ${player.injured ? "injured" : ""}`}
            >
              <td className="player-name">{player.firstName.charAt(0)}. {player.lastName}</td>
              <td className="stat-col">{player.age}</td>
              <td className="stat-col">{player.position}</td>
              <td className="stat-col">{player.overallRating}</td>
              <td className="stat-col">{player.stats.matchesPlayed}</td>
              <td className="stat-col">{player.stats.goals}</td>
              <td className="stat-col">{player.stats.assists}</td>
              <td className="stat-col">{player.attributes[PlayerAttribute.Defending]}</td>
              <td className="stat-col">{player.attributes[PlayerAttribute.Mental]}</td>
              <td className="stat-col">{player.attributes[PlayerAttribute.Passing]}</td>
              <td className="stat-col">{player.attributes[PlayerAttribute.Physical]}</td>
              <td className="stat-col">{player.attributes[PlayerAttribute.Shooting]}</td>
              <td className="stat-col">{player.attributes[PlayerAttribute.Speed]}</td>
              <td className="stat-col">{Math.round(player.condition)}</td>
              <td className="stat-col">{player.injured ? `Inj ${player.injuryTime}` : `:)`}</td>
              <td className="stat-col">{player.formattedValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const startingLineup = lineup.starterArray;
  const bench = lineup.bench;
  const reserves = lineup.reserves;

  let currentPlayers: Player[] = [];
  if (currentTab === Tab.STARTING_LINEUP) {
    currentPlayers = startingLineup;
  } else if (currentTab === Tab.BENCH) {
    currentPlayers = bench;
  } else if (currentTab === Tab.RESERVES) {
    currentPlayers = reserves;
  }

  return (
    <div>
      <div className="tabs">
        {Object.values(Tab).map(tab => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`tab ${currentTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderPlayerTable(currentPlayers)}
    </div>
  );
};

export default TeamPlayersTableComponent;
