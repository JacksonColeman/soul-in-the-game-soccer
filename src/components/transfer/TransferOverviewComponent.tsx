import React, {useState} from 'react';
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

  const playersByPosition = positions.reduce((acc, position) => {
    acc[position] = universe.allPlayers
      .filter((player) => player.position === position)
      .sort((a, b) => b.value - a.value);
    return acc;
  }, {} as Record<PlayerPosition, Player[]>);

  const handleTabChange = (tab: PlayerPosition) => {
    setCurrentTab(tab);
  };

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
        <div className="position-content">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Team</th>
                <th>Age</th>
                <th>Overall</th>
                <th>Value</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransferOverviewComponent;