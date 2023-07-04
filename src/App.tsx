import './App.css'
import { useState, useEffect } from 'react'
import {League} from '../classes/League'
import User from '../classes/User'
import TeamSelectionComponent from './components/TeamSelectionComponent'
import GameSetupComponent from './components/GameSetupComponent'
import GameSettingsComponent from './components/GameSettingsComponent'
import generateUniverse from '../scripts/GenerateUniverse';
import {Universe, GameState, getStoredUniverse} from '../classes/Universe'
import SeasonComponentSimplified from './components/SeasonComponentSimplified'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const [universe, setUniverse] = useState<Universe | null>(null);
  const [gameState, setGameState] = useState(GameState.Start);
  const [managerName, setManagerName] = useState('');
  const [userTeamID, setUserTeamID] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [reloads, setReloads] = useState(0);

  const navigate = useNavigate();

  const handleReloads = () => {
    setReloads(reloads + 1);
  }

  useEffect(() => {
    console.log("calling useEffect")
    const activeSession = sessionStorage.getItem('activeSession');
    const storedUniverseExists = localStorage.getItem('universe');

    if (storedUniverseExists) {
      // Continue the stored game
      const storedUniverse = getStoredUniverse();
      setUser(storedUniverse.user || null);
      if (storedUniverse.user){
        setUserTeamID(storedUniverse.user.teamID);
      }
      setUniverse(storedUniverse);
      setGameState(storedUniverse.gameState);
      if (storedUniverse.gameState = GameState.Season){
        navigate('/season')
      }

      if (!activeSession){
        console.log("No active session")
        setGameState(GameState.Start);
        navigate('/start');
      }

    } else {
      // Start a new game
      setGameState(GameState.Start);
      navigate('/start');
    }
  }, []);

  const onNewGame = () => {
    setGameState(GameState.Settings);
    navigate('/settings');
  }

  const handleTeamSelect = (teamID: number) => {
      setUserTeamID(teamID);
    };

  const handleStartGame = () => {
    const newUniverse = generateUniverse();
    const user = new User(managerName, userTeamID);
    newUniverse.user = user ;
    newUniverse.gameState = GameState.Season;
    newUniverse.saveUniverse();
    setUniverse(newUniverse);
    setGameState(GameState.Season);
    navigate('/season');
    sessionStorage.setItem('activeSession', 'true');
  }
  
  const onConfirmSettings = (managerName:string) => {
    navigate('/select')
    setManagerName(managerName);
    setGameState(GameState.Selection);
  };

  const handleUserLogout = () => {
      setGameState(GameState.Start);
      navigate('/start');
      sessionStorage.removeItem("activeSession");
  };

  const handleContinueGame = () => {
    sessionStorage.setItem('activeSession', 'true');
    universe ? setGameState(universe.gameState) : null;
    navigate('/season');
  }

  const getUserLeague = () => {
    const league = universe?.getLeagueByTeamID(userTeamID);
    if (!(league instanceof League)){
      throw new Error(`Error finding user league at id ${userTeamID}`)
    }
    return league;
  }

  return (
    
    <div>
      <h1>
        <i>Soul in the Game Soccer</i>
      </h1>
      <Routes>
        <Route path="/start" element={<GameSetupComponent universe={universe} onNewGame={onNewGame} onContinueGame={handleContinueGame} />} />
        <Route path="/settings" element={<GameSettingsComponent onConfirmSettings={onConfirmSettings} />} />
        <Route path="/select" element={<TeamSelectionComponent onTeamSelect={handleTeamSelect} handleStartGame={handleStartGame}/>} />
        <Route path="/season" element={universe && <SeasonComponentSimplified universe={universe} league={getUserLeague()} handleUserLogout={handleUserLogout} handleReloads={handleReloads}/>} />
      </Routes>
    </div>
  )
}

export default App;