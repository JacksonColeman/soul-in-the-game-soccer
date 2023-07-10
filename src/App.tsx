import './App.css'
import { useState, useEffect } from 'react'
import {League} from './classes/League'
import User from './classes/User'
import TeamSelectionComponent from './components/setup/TeamSelectionComponent'
import GameSetupComponent from './components/setup/GameSetupComponent'
import GameSettingsComponent from './components/setup/GameSettingsComponent'
import generateUniverse from './scripts/GenerateUniverse'
import {Universe, GameState, getStoredUniverse} from './classes/Universe'
import SeasonComponentSimplified from './components/league-info/overview/SeasonComponentSimplified'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LeagueOverviewComponent from './components/league-info/overview/LeagueOverviewComponent'
import TeamPageComponent from './components/team-info/TeamPageComponent'
import UserBarComponent from './components/universe-handling/UserBarComponent'
import AdvanceBarComponent from './components/universe-handling/AdvanceBarComponent'

function App() {
  const [universe, setUniverse] = useState<Universe | null>(null);
  const [gameState, setGameState] = useState(GameState.Start);
  const [managerName, setManagerName] = useState('');
  const [userTeamID, setUserTeamID] = useState(0);
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
    newUniverse.getTeamByID(userTeamID).user = true;
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

  enum SeasonComponentState {
    Overview,
    PreMatch,
    PostMatch,
  }

  const [seasonState, setSeasonState] = useState(SeasonComponentState.Overview);

  const handleSeasonState = (state: SeasonComponentState) => {
    setSeasonState(state);
  }

  return (
    
    <div className='app'>
      <h1>
        <i>Soul in the Game Soccer</i>
      </h1>
      {gameState == GameState.Season && universe && universe.user && <UserBarComponent user={universe.user} team={universe.getTeamByID(universe.user.teamID)} year={universe.year} week={universe.week} onExitGame={handleUserLogout}/>}
      <Routes>
        <Route path="/start" element={<GameSetupComponent universe={universe} onNewGame={onNewGame} onContinueGame={handleContinueGame} />} />
        <Route path="/settings" element={<GameSettingsComponent onConfirmSettings={onConfirmSettings} />} />
        <Route path="/select" element={<TeamSelectionComponent onTeamSelect={handleTeamSelect} handleStartGame={handleStartGame}/>} />
        <Route path="/season" element={universe && <SeasonComponentSimplified universe={universe} league={getUserLeague()} seasonState={seasonState}/> } />
        <Route path="/league" element = {universe && <LeagueOverviewComponent universe={universe} leagueID={getUserLeague().id}/>}/>
        <Route path="/teams/:teamID" element={universe && <TeamPageComponent universe={universe} league={getUserLeague()}/>} />
      </Routes>
      {gameState == GameState.Season && universe && <AdvanceBarComponent universe={universe} league={getUserLeague()} handleReloads={handleReloads} seasonState={seasonState}updateSeasonState={handleSeasonState}/>}

    </div>
  )
}

export default App;