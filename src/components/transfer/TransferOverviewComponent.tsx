import React, {useState, useEffect} from 'react';
import { Player } from '../../classes/Player';
import { PlayerPosition } from '../../constants/positions';
import { Universe } from '../../classes/Universe';
import { formatCurrency } from '../../scripts/formatCurrency';

type TransferOverviewProps = {
  universe: Universe;
};

const TransferOverviewComponent: React.FC<TransferOverviewProps> = ({ universe }) => {
  const [currentTab, setCurrentTab] = useState<PlayerPosition>(PlayerPosition.GK);
  const positions: PlayerPosition[] = Object.values(PlayerPosition);
  const [updates, setUpdates] = useState(0);

  const playersByPosition = positions.reduce((acc, position) => {
    acc[position] = universe.allPlayers
      .filter((player) => player.position === position)
      .sort((a, b) => b.value - a.value);
    return acc;
  }, {} as Record<PlayerPosition, Player[]>);

  const handleTabChange = (tab: PlayerPosition) => {
    setCurrentTab(tab);
  };

  const handleRound = () => {
    universe.handleTransferRound();
    universe.saveUniverse();
    setUpdates(updates+1);
  }

  return (
    <div>
      <h1>Transfer Overview</h1>
      <div>
        <div className="position-tabs">
          {Object.values(PlayerPosition).map((tab) => (
            <button
              key={tab}
              className={currentTab === tab ? 'active' : ''}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button onClick={handleRound}>Handle Round</button>
        <div className="position-content">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Team</th>
                <th>Age</th>
                <th>Overall</th>
                <th>Value</th>
                <th>Interest</th>
                <th>Market Value</th>
                <th>Transfer?</th>
                <th>From</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              {playersByPosition[currentTab].map((player) => (
                <tr key={player.id}>
                  <td>{player.lastName}</td>
                  <td>{player.team?.name}</td>
                  <td>{player.age}</td>
                  <td>{player.overallRating}</td>
                  <td>{formatCurrency(player.value)}</td>
                  <td>{player.transferInterest.size}</td>
                  <td>{formatCurrency(player.marketValue)}</td>
                  <td>{player.transfer ? "Y" : "N"}</td>
                  <td>{player.transfer?.sellingTeam.name}</td>
                  <td>{player.transfer?.fee && formatCurrency(player.transfer.fee)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <table>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Transfer Budget</th>
        </tr>
      </thead>
      <tbody>
        {universe.allTeams.sort((teamA, teamB) => teamB.transferBudget - teamA.transferBudget).map((team) => (
          <tr key={team.id}>
            <td>{team.name}</td>
            <td>{formatCurrency(team.transferBudget)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TransferOverviewComponent;