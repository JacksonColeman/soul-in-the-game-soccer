import React, { ChangeEvent, useState } from "react";

enum Mode {
  Standard = "Standard",
  Random = "Random",
  Challenge = "Challenge"
}

interface UserDetailsProps {
  onSubmit: (name: string, mode: Mode) => void;
}

const UserDetailsComponent: React.FC<UserDetailsProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [mode, setMode] = useState(Mode.Standard);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleModeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMode(event.target.value as Mode);
  };

  const handleSubmit = () => {
    onSubmit(name, mode);
  };

  return (
    <div className="user-details">
      <h2>Enter Your Name and Select Mode</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />

      <label htmlFor="mode">Mode:</label>
      <select
        id="mode"
        value={mode}
        onChange={handleModeChange}
      >
        <option value={Mode.Standard}>Standard</option>
        <option value={Mode.Random}>Random</option>
        <option value={Mode.Challenge}>Challenge</option>
      </select>

      <button onClick={handleSubmit}>Start</button>
      <div className="setup-message">
      <p>Welcome to Soul in the Game Soccer!</p>
        <p>You will be taking over a Premier League soccer club to try to bring them a title!</p>
        <p>In standard mode, the strength of your team will resemble their recent Premier League performance.</p>
        <p>In random mode, all teams strengths will be randomly generated and will not resemble recent performance.</p>
        <p>In challenge mode, your team's strength will be among the lowest in the league.</p>
        <p>You will first have to keep your team out of the relegation zone before aiming for a title!</p>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
