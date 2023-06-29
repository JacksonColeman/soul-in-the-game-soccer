import React, { ChangeEvent, useState } from "react";

interface UserDetails {
  name: string;
  difficulty: Difficulty;
}

enum Difficulty {
  Standard = "Standard",
  Hard = "Hard",
}

interface UserDetailsProps {
  onSubmit: (name: string, difficulty: Difficulty) => void;
}

const UserDetailsComponent: React.FC<UserDetailsProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState(Difficulty.Standard);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDifficultyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value as Difficulty);
  };

  const handleSubmit = () => {
    onSubmit(name, difficulty);
  };

  return (
    <div className="user-details">
      <h2>Enter Your Name and Select Difficulty</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />

      <label htmlFor="difficulty">Difficulty:</label>
      <select
        id="difficulty"
        value={difficulty}
        onChange={handleDifficultyChange}
      >
        <option value={Difficulty.Standard}>Standard</option>
        <option value={Difficulty.Hard}>Hard</option>
      </select>

      <button onClick={handleSubmit}>Start</button>
    </div>
  );
};

export default UserDetailsComponent;
