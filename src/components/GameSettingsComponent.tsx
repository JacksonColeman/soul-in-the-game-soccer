// GameSettings.tsx

import React, { useState } from 'react';
import '../styles/GameSettingsComponent.css'

type GameSettingsProps = {
  onConfirmSettings: (leagueStrength: string, userTeamStrength: string, managerName: string) => void;
};

const GameSettings: React.FC<GameSettingsProps> = ({ onConfirmSettings }) => {
  const [leagueStrength, setLeagueStrength] = useState('');
  const [userTeamStrength, setUserTeamStrength] = useState('');
  const [managerName, setManagerName] = useState('');

  const handleLeagueStrengthChange = (value: string) => {
    setLeagueStrength(value);
  };

  const handleUserTeamStrengthChange = (value: string) => {
    setUserTeamStrength(value);
  };

  const handleManagerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setManagerName(event.target.value);
  };

  const handleConfirmSettings = () => {
    if (leagueStrength && userTeamStrength && managerName) {
      onConfirmSettings(leagueStrength, userTeamStrength, managerName);
    }
  };

  return (
    <div className="game-settings-panel">
      <div className="game-settings">
        <h2>Game Settings</h2>
        <div className="setting">
          <label>
            Manager Name:{' '}
            <input type="text" value={managerName} onChange={handleManagerNameChange} />
          </label>
        </div>
        <div className="setting">
          <label>
            League Strength:
            <div className="button-group">
              <button
                className={leagueStrength === 'Realistic' ? 'selected' : ''}
                onClick={() => handleLeagueStrengthChange('Realistic')}
              >
                Realistic
              </button>
              <button
                className={leagueStrength === 'Random' ? 'selected' : ''}
                onClick={() => handleLeagueStrengthChange('Random')}
              >
                Random
              </button>
            </div>
          </label>
        </div>
        <div className="setting">
          <label>
            User Team Starting Strength:
            <div className="button-group">
              <button
                className={userTeamStrength === 'Realistic' ? 'selected' : ''}
                onClick={() => handleUserTeamStrengthChange('Realistic')}
              >
                Realistic
              </button>
              <button
                className={userTeamStrength === 'Challenge' ? 'selected' : ''}
                onClick={() => handleUserTeamStrengthChange('Challenge')}
              >
                Challenge
              </button>
            </div>
          </label>
        </div>
        <button onClick={handleConfirmSettings}>Confirm Settings</button>
      </div>
    </div>
  );
};

export default GameSettings;
