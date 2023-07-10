import { useEffect, useState } from 'react';
import './GameSetupComponent.css';
import leaguesData from "../../data/teams.json";
import { Universe } from '../../classes/Universe';

type GameSetupProps = {
  universe: Universe | null;
  onNewGame: () => void;
  onContinueGame: () => void;
};

const teams = leaguesData.find(league => league.id == 1)?.teams;

const GameSetupComponent: React.FC<GameSetupProps> = ({ universe, onNewGame, onContinueGame }) => {
  const [userName, setUserName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [gameDate, setGameDate] = useState({ year: 0, week: 0 });

  useEffect(() => {
    if (universe) {
      const user = universe.user;
      setGameDate({
        year: universe.year,
        week: universe.week
      });

      if (user) {
        setUserName(user.name);

        // Find the team name based on the user's teamID
        const team = teams?.find((team) => team.id === user.teamID);
        if (team) {
          setTeamName(team.name);
        }
      }
    }
  }, [universe]);

  const handleNewGame = () => {
    onNewGame();
  };

  const handleContinueGame = () => {
    onContinueGame();
  };

  return (
    <div className="game-setup-container">
      <div className="game-setup-panel">
        <button className="game-setup-button" onClick={handleNewGame}>
          <b>Start New Game</b>
        </button>
        <button className="game-setup-button" onClick={handleContinueGame} disabled={!universe}>
          <>
            <b>Continue Game</b>
            {universe && (
              <div>
                <p>
                  {userName}
                  <br />
                  {teamName}
                </p>
                <p>
                  {gameDate.year} Week {gameDate.week}
                </p>
              </div>
            )}
          </>
        </button>
      </div>
    </div>
  );
};

export default GameSetupComponent;
