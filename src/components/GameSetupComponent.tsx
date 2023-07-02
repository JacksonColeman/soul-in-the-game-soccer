import { useEffect, useState} from 'react';
import '../styles/GameSetupComponent.css';
import teams from "../data/teams.json";
import {getGameDate} from '../../scripts/GetSetDate'

type GameSetupProps = {
  onNewGame: () => void;
  onContinueGame: () => void;
};

const GameSetupComponent: React.FC<GameSetupProps> = ({ onNewGame, onContinueGame }) => {
  const [userName, setUserName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [gameDate, setGameDate] = useState({year:0,week:0})

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name);

      // Find the team name based on the user's teamID
      const team = teams.find((team) => team.id === user.teamID);
      if (team) {
        setTeamName(team.name);
      }
      setGameDate(getGameDate());
    }
  }, []);

  const handleNewGame = () => {
    onNewGame();
  };

  const handleContinueGame = () => {
    onContinueGame();
  };

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const continueButtonText = user ? (
    <>
      <b>Continue Game</b>
      <div>
        <p>{userName}<br/>{teamName}</p>
        <p>{gameDate.year} Week {gameDate.week}</p>
      </div>
    </>
  ) : (
    'Continue Game'
  );

  return (
    <div className="game-setup-container">
      <div className="game-setup-panel">
        <button className="game-setup-button" onClick={handleNewGame}>
          <b>Start New Game</b>
        </button>
          <button className="game-setup-button" onClick={handleContinueGame} disabled={!user}>
            {continueButtonText}
          </button>
      </div>
    </div>
  );
};

export default GameSetupComponent;
