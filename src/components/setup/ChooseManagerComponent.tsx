import React, { useEffect, useState } from "react";
import { generateManager } from "../../scripts/GenerateManager";
import { Manager } from "../../classes/Manager";

interface ChooseManagerComponentProps {
  handleSelectManager: (manager: Manager) => void;
  handleStartGame: () => void;
}

const ChooseManagerComponent: React.FC<ChooseManagerComponentProps> = ({ handleSelectManager, handleStartGame }) => {
  const [managers, setManagers] = useState<Manager[]>([]);
  const [selectedManager, setSelectedManager] = useState<Manager | null>(null);

  const handleGenerateManagers = () => {
    const generatedManagers: Manager[] = [];
    for (let i = 0; i < 5; i++) {
      const manager = generateManager(); // Replace with your actual manager generation logic
      generatedManagers.push(manager);
    }
    setManagers(generatedManagers);
  };

  useEffect(() => {
    handleGenerateManagers();
  },[])

  const onSelectManager = (manager: Manager) => {
    setSelectedManager(manager);
    handleSelectManager(manager);
  }

  return (
    <div>
      <h3>Choose a Manager:</h3>
      <div>
        {managers.map((manager, index) => (
          <div key={index}>
            <p><strong>{manager.firstName} {manager.lastName}</strong> | Age: {manager.age} | Mentality: {manager.mentality} | Preferred Formation: {manager.preferredFormation.name}</p>
            {manager == selectedManager ? <button onClick={handleStartGame}>Confirm</button> : <button onClick={() => onSelectManager(manager)}>Hire</button>}
          </div>
        ))}
        </div>
        <button onClick={handleGenerateManagers}>See New Candidates</button>
    </div>
  );
};

export default ChooseManagerComponent;
