import React from 'react';
import User from '../../classes/User';
import '../styles/UserBarComponent.css'

type UserBarProps = {
  user: User;
  onExitGame: () => void;
};

const UserBarComponent: React.FC<UserBarProps> = ({ user, onExitGame }) => {
  return (
    <div className="user-bar">
      <span className="user-name">{user.name}</span>
      <span className="divider">|</span>
      <span className="user-team-name"> {user.selectedTeam.name}</span>
      <button className="exit-button" onClick={onExitGame}>Exit Game</button>
    </div>
  );
};

export default UserBarComponent;
