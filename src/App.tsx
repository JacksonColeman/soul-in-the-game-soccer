import './App.css'
import { useState, useEffect } from 'react'
import {generateTeams} from '../scripts/GenerateTeams'
import {League} from '../classes/League'
import User from '../classes/User'
import SeasonComponent from './components/SeasonComponent'
import TeamSelectionComponent from './components/TeamSelectionComponent'
import GameSetupComponent from './components/GameSetupComponent'
import GameSettingsComponent from './components/GameSettingsComponent'
import generateUniverse from '../scripts/GenerateUniverse';
import {Universe, GameState, getStoredUniverse} from '../classes/Universe'

function App() {
  const [universe, setUniverse] = useState<Universe | null>(null);
  const [gameState, setGameState] = useState(GameState.Start);
  const [managerName, setManagerName] = useState('');
  const [userTeamID, setUserTeamID] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const activeSession = sessionStorage.getItem('activeSession');
    const storedUniverseExists = localStorage.getItem('universe');

    if (storedUniverseExists) {
      // Continue the stored game
      const storedUniverse = getStoredUniverse();
      setUser(storedUniverse.user || null);
      setUniverse(storedUniverse);
      setGameState(storedUniverse.gameState);
      if (!activeSession){
        setGameState(GameState.Start);
      }
    } else {
      // Start a new game
      setGameState(GameState.Start);
    }
  }, []);

  const onNewGame = () => {
    setGameState(GameState.Settings);
    setUniverse(generateUniverse());
    universe ? universe.gameState = GameState.Settings : null;
  }

  const handleTeamSelect = (teamID: number) => {
      setUserTeamID(teamID);
    };

  const handleStartGame = () => {
    const user = new User(managerName, userTeamID);
    universe ? universe.user = user : null;
    universe?.saveUniverse();
    setGameState(GameState.Season);
    universe ? universe.gameState = GameState.Season : null;
    sessionStorage.setItem('activeSession', 'true');
  }
  
  const onConfirmSettings = (managerName:string) => {
    setManagerName(managerName);
    setGameState(GameState.Selection);
    universe ? universe.gameState = GameState.Selection : null;
  };

  const handleUserLogout = () => {
      setGameState(GameState.Start);
      sessionStorage.removeItem("activeSession");
    };

    const handleContinueGame = () => {
      universe ? setGameState(universe.gameState) : null;
    }

  return (
    <div>
      <h1>
        <i>Soul in the Game Soccer</i>
      </h1>
      {gameState === GameState.Start && (
        <GameSetupComponent universe={universe} onNewGame={onNewGame} onContinueGame={handleContinueGame} />
       )}

       {gameState === GameState.Settings && <GameSettingsComponent onConfirmSettings={onConfirmSettings} />}
       {gameState === GameState.Selection && <TeamSelectionComponent onTeamSelect={handleTeamSelect} handleStartGame={handleStartGame}/>}
       {gameState === GameState.Season && universe && <SeasonComponent universe={universe} handleUserLogout={handleUserLogout}/>}

    </div>
  )
}


  // const [gameState, setGameState] = useState('loading');
  // const [user, setUser] = useState<User | null>(null);
  // const [league, setLeague] = useState<League | null>(null);
  // const [leagueStrength, setLeagueStrength] = useState('');
  // const [userTeamStrength, setUserTeamStrength] = useState('');
  // const [managerName, setManagerName] = useState('');
  // const [userTeamID, setUserTeamID] = useState(0);

  // useEffect(() => {
  //   const activeSession = sessionStorage.getItem("activeSession");
  //   const storedUser = localStorage.getItem('user');
  //   const storedTeamsData = localStorage.getItem('teamsData');
  //   const storedScheduleData = localStorage.getItem('scheduleData');

  //   const storedGameState = localStorage.getItem('gameState'); // Get stored game state

  //   if (activeSession && storedGameState) {
  //     setGameState(storedGameState); // Set game state from local storage
  //   } else {
  //     setGameState('setup');
  //     localStorage.removeItem('gameState'); 
  //   }

  //   if (activeSession && storedUser && storedTeamsData && storedScheduleData) {
  //     setUser(JSON.parse(storedUser));
  //     const teamsData = JSON.parse(storedTeamsData);
  //     const scheduleData = JSON.parse(storedScheduleData);
  //     const restoredLeague = rebuildLeague("bob",teamsData, scheduleData);
  //     setLeague(restoredLeague);
  //   }
  // }, []);

  // const saveGameDate = (year: number, week: number): void => {
  //   const gameDate = {
  //     year: year,
  //     week: week
  //   };
  //   localStorage.setItem('gameDate', JSON.stringify(gameDate));
  // };

  // const handleTeamSelect = (teamID: number) => {
  //   setUserTeamID(teamID);
  // };

  // const handleUserLogout = () => {
  //   setGameState('setup');
  //   sessionStorage.removeItem("activeSession");
  // };

  // const handleNewGame = () => {
  //   setGameState('settings');
  // };

  // const onContinueGame = () => {
  //   console.log("calling");
  //   const storedUser = localStorage.getItem('user');
  //   const storedTeamsData = localStorage.getItem('teamsData');
  //   const storedScheduleData = localStorage.getItem('scheduleData');
  // }

  //   if (storedUser && storedTeamsData && storedScheduleData) {
  //     setUser(JSON.parse(storedUser));
  //     const teamsData = JSON.parse(storedTeamsData);
  //     const scheduleData = JSON.parse(storedScheduleData);
  //     const restoredLeague = rebuildLeague("bob",teamsData, scheduleData);
  //     setLeague(restoredLeague);
  //     setGameState('season');
  //     localStorage.setItem("gameState", "season");
  //     sessionStorage.setItem("activeSession", "true")
  //   }
  // }

  // const onConfirmSettings = (leagueStrength: string, userTeamStrength: string,managerName:string) => {
  //   setLeagueStrength(leagueStrength);
  //   setUserTeamStrength(userTeamStrength);
  //   setManagerName(managerName);
  //   setGameState('teamSelection');
  // };

  // const handleStartGame = () => {
  //   createUser(managerName, userTeamID);
  //   createLeague(leagueStrength, userTeamStrength, userTeamID);
  //   saveGameDate(2023,1);
  //   setGameState("season");
  //   localStorage.setItem("gameState", "season");
  //   sessionStorage.setItem("activeSession", "true")
  // }

  // const createUser = (managerName: string, userTeamID: number) => {
  //   const newUser = new User(managerName, userTeamID);
  //   localStorage.setItem("user", JSON.stringify(newUser));
  //   setUser(newUser);
  // }

  // const createLeague = (leagueStrength: string, userTeamStrength: string, userTeamID: number) => {
  //   const championship = generateChampionship();
  //   const newLeague = new League("",generateTeams(1,leagueStrength, userTeamStrength, userTeamID), championship);
  //   newLeague.relegatesTo = championship;
  //   newLeague.schedule = newLeague.generateSchedule();
  //   newLeague.getTeam(userTeamID).user = true;
  //   setLeague(newLeague);
  //   storeLeagueData(newLeague);
  // }

  // const generateChampionship = () => {
  //   const championship = new League("",generateTeams(2,undefined,undefined,undefined),undefined);
  //   championship.schedule = championship.generateSchedule();
  //   return championship;
  // }

  // if (gameState == "loading"){
  //   return (<></>
  //   )
  // }

//   return (
//     <div className="app">
//       <h1>
//         <i>Soul in the Game Soccer</i>
//       </h1>
//        {gameState === 'setup' && (
//         <GameSetupComponent onNewGame={handleNewGame} onContinueGame={onContinueGame} />
//       )}
//       {/*
//       {gameState === 'settings' && <GameSettingsComponent onConfirmSettings={onConfirmSettings} />}
//       {gameState === 'teamSelection' && <TeamSelectionComponent onTeamSelect={handleTeamSelect} handleStartGame={handleStartGame}/>}
//       {gameState === 'season' && user && league && (
//         <SeasonComponent user={user} league={league} onUserLogout={handleUserLogout} saveGameDate={saveGameDate} />
//       )} */}
//     </div>
//   );
// }

export default App;