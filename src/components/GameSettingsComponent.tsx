// GameSettings.tsx

import React, { useState } from 'react';
import '../styles/GameSettingsComponent.css'

type GameSettingsProps = {
  onConfirmSettings: (managerName: string) => void;
};

const GameSettings: React.FC<GameSettingsProps> = ({ onConfirmSettings }) => {
  const [managerName, setManagerName] = useState('');


  const handleManagerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setManagerName(event.target.value);
  };

  const handleConfirmSettings = () => {
    if (managerName) {
      onConfirmSettings(managerName);
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
        <button onClick={handleConfirmSettings}>Confirm Settings</button>
      </div>
    </div>
  );
};

export default GameSettings;
