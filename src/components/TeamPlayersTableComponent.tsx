import React, { useState } from 'react';
import { Team } from '../../classes/Team';
import { Player } from '../../classes/Player';
import '../styles/TeamPlayersTableComponent.css'

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
              </tr>
            ))}
          </tbody>
        </table>
      );
    };

  const startingLineup = team.startingLineup;
  const bench = team.subsBench;
  const otherPlayers = team.roster.filter(player => !startingLineup.includes(player) && !bench.includes(player));

  let currentPlayers: Player[] = [];
  if (currentTab === Tab.STARTING_LINEUP) {
    currentPlayers = startingLineup;
  } else if (currentTab === Tab.BENCH) {
    currentPlayers = bench;
  } else if (currentTab === Tab.RESERVES) {
    currentPlayers = otherPlayers;
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
      {renderPlayerTable(sortByPosition(currentPlayers))}
    </div>
  );
};

const sortByPosition = (players: Player[]): Player[] => {
    const positionOrder: { [key: string]: number } = {
        GK: 0,
        DF: 1,
        MF: 2,
        FW: 3,
      };

    return players.sort((a, b) => positionOrder[a.position] - positionOrder[b.position]);
  };

export default TeamPlayersTableComponent;

