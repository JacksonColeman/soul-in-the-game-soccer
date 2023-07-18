import './App.css'
import { useState, useEffect } from 'react'
import {League} from './classes/League'
import User from './classes/User'
import TeamSelectionComponent from './components/setup/TeamSelectionComponent'
import GameSetupComponent from './components/setup/GameSetupComponent'
import GameSettingsComponent from './components/setup/GameSettingsComponent'
import generateUniverse from './scripts/GenerateUniverse'
import {Universe, getStoredUniverse} from './classes/Universe'
import SeasonComponentSimplified from './components/league-info/overview/SeasonComponentSimplified'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LeagueOverviewComponent from './components/league-info/overview/LeagueOverviewComponent'
import TeamPageComponent from './components/team-info/TeamPageComponent'
import UserBarComponent from './components/universe-handling/UserBarComponent'
import AdvanceBarComponent from './components/universe-handling/AdvanceBarComponent'
import ChooseManagerComponent from './components/setup/ChooseManagerComponent'
import { Manager } from './classes/Manager'
import { GameState, WeekState } from './constants/gameStates'
import SeasonRecapComponent from './components/league-info/recap/SeasonRecapComponent.tsx'
import TransferOverviewComponent from './components/transfer/TransferOverviewComponent.tsx'
import { generateRosters } from './scripts/GenerateRosters.ts'

function App() {
  const [universe, setUniverse] = useState<Universe | null>(null);
  const [gameState, setGameState] = useState(GameState.Start);
  const [managerName, setManagerName] = useState('');
  const [userManager, setUserManager] = useState<Manager | null>(null);
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
        handleWeekState(storedUniverse.weekState);
      }
      if (storedUniverse.gameState = GameState.TransferWindow){
        navigate('/transfer')
      }

      if (!activeSession){
        console.log("No active session")
        setGameState(GameState.Start);
        handleWeekState(WeekState.Overview)
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

  const handleAdvanceToManagerSelect = () => {
    navigate('/managerselect')
  }

  const handleStartGame = () => {
    const user = new User(managerName, userTeamID);
    const newUniverse = generateUniverse(userTeamID);
    newUniverse.user = user ;
    newUniverse.gameState = GameState.Season;
    const userTeam = newUniverse.getTeamByID(userTeamID)
    userTeam.user = true;
    userTeam.manager = userManager;

    // generate rosters
    generateRosters(newUniverse);
    //
    for (const league of newUniverse.leagues){
        league.generateWeightedAttributeTotals();
    }
    newUniverse.saveUniverse();
    setUniverse(newUniverse);
    setGameState(GameState.Season);
    navigate('/season');
    sessionStorage.setItem('activeSession', 'true');
  }
  
  const onConfirmSettings = (managerName:string) => {
    navigate('/teamselect')
    setManagerName(managerName);
    setGameState(GameState.Selection);
  };

  const handleUserLogout = () => {
      setGameState(GameState.Start);
      navigate('/start');
      setweekState(WeekState.Overview);
      sessionStorage.removeItem("activeSession");
  };

  const handleContinueGame = () => {
    sessionStorage.setItem('activeSession', 'true');
    if (!universe){throw new Error("No universe to continue!")}
    setGameState(universe.gameState);
    handleWeekState(universe.weekState);
    navigate('/season');
  }

  const handleSelectManager = (manager: Manager) =>{
    setUserManager(manager);
  }

  const getUserLeague = () => {
    const league = universe?.getLeagueByTeamID(userTeamID);
    if (!(league instanceof League)){
      throw new Error(`Error finding user league at id ${userTeamID}`)
    }
    return league;
  }

  enum WeekState {
    Overview,
    PreMatch,
    PlayMatch,
    PostMatch,
  }

  const handlePostMatchAdvance = () => {
    handleWeekState(WeekState.PostMatch)
    universe?.playWeekMatches();
    universe?.saveUniverse();
  }


  const [weekState, setweekState] = useState(WeekState.Overview);

  const handleWeekState = (state: WeekState) => {
    if (universe){universe.weekState = state;}
    setweekState(state);
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
        <Route path="/teamselect" element={<TeamSelectionComponent onTeamSelect={handleTeamSelect} handleAdvanceToManagerSelect={handleAdvanceToManagerSelect}/>} />
        <Route path="/managerselect" element={<ChooseManagerComponent handleSelectManager={handleSelectManager} handleStartGame={handleStartGame}/>}/>
        <Route path="/season" element={universe && <SeasonComponentSimplified universe={universe} league={getUserLeague()} weekState={weekState} handlePostMatchAdvance={handlePostMatchAdvance}/>} />
        <Route path="/league" element = {universe && <LeagueOverviewComponent universe={universe} leagueID={getUserLeague().id}/>}/>
        <Route path="/recap" element = {universe && <SeasonRecapComponent league={getUserLeague()}/>}/>
        <Route path="/transfer" element = {universe && <TransferOverviewComponent universe={universe}/>}/>
        <Route path="/teams/:teamID" element={universe && <TeamPageComponent universe={universe} league={getUserLeague()}/>} />
      </Routes>
      {gameState == GameState.Season && universe && <AdvanceBarComponent universe={universe} league={getUserLeague()} handleReloads={handleReloads} weekState={weekState} updateWeekState={handleWeekState}/>}

    </div>
  )
}

export default App;