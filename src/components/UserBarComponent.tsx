import React from 'react';
import User from '../../classes/User';
import '../styles/UserBarComponent.css';

type UserBarProps = {
  user: User;
  onExitGame: () => void;
  year: number; // Year value to display
  week: number; // Week value to display
};

const UserBarComponent: React.FC<UserBarProps> = ({ user, onExitGame, year, week }) => {
  return (
    <div className="user-bar">
      <div className="user-info">
        <span className="user-year">{year}</span>
        <span className="user-week">Week {week}</span>
      </div>
      <div className="user-details">
        <span className="user-name">{user.name}</span>
        <span className="divider">|</span>
        <span className="user-team-name">{user.selectedTeam.name}</span>
      </div>
      <button className="exit-button" onClick={onExitGame}>Exit Game</button>
    </div>
  );
};

export default UserBarComponent;