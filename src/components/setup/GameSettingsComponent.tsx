// GameSettings.tsx

import React, { useState } from 'react';
import './GameSettingsComponent.css'

type GameSettingsProps = {
  onConfirmSettings: (userName: string) => void;
};

const GameSettings: React.FC<GameSettingsProps> = ({ onConfirmSettings }) => {
  const [userName, setUserName] = useState('');


  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleConfirmSettings = () => {
    if (userName) {
      onConfirmSettings(userName);
    }
  };

  return (
    <div className="game-settings-panel">
      <div className="game-settings">
        <h2>Game Settings</h2>
        <div className="setting">
          <label>
            Your Name:{' '}
            <input type="text" value={userName} onChange={handleUserNameChange} />
          </label>
        </div>
        <button onClick={handleConfirmSettings}>Confirm Settings</button>
      </div>
    </div>
  );
};

export default GameSettings;
