import './App.css'
import { useState, useEffect } from 'react'
import {generateTeams} from '../scripts/GenerateTeams'
import {League} from '../classes/League'
import User from '../classes/User'
import SeasonComponent from './components/SeasonComponent'
import TeamSelectionComponent from './components/TeamSelectionComponent'
import UserDetailsComponent from './components/UserDetailsComponent'
import {parse, stringify, toJSON, fromJSON} from 'flatted';
import {storeLeagueData, rebuildLeague} from '../scripts/LeagueStorage';

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [league, setLeague] = useState<League | null>(null);

  enum Difficulty {
    Standard = "Standard",
    Hard = "Hard",
  }

  const generateNewGame = () => {
    const league = new League(generateTeams());
    league.schedule = league.generateSchedule();
    const updatedUser = new User("", null, Difficulty.Standard);
    setUser(updatedUser);
    storeLeagueData(league); // Store the league data
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setLoading(false); // Set loading to false once data is generated
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedTeamsData = localStorage.getItem('teamsData');
    const storedScheduleData = localStorage.getItem('scheduleData');

    if (storedUser && storedTeamsData && storedScheduleData) {
      setUser(JSON.parse(storedUser));
      const teamsData = JSON.parse(storedTeamsData);
      const scheduleData = JSON.parse(storedScheduleData);
      const restoredLeague = rebuildLeague(teamsData, scheduleData);
      setLeague(restoredLeague);
      setLoading(false);
    } else {
      generateNewGame();
    }
  }, []);

  const handleTeamSelect = (selectedTeam: any) => {
    const updatedUser = new User("", selectedTeam, Difficulty.Standard); // Set initial name and difficulty
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const handleUserDetailsSubmit = (name: string, difficulty: Difficulty) => {
    const updatedUser = new User(name, user?.selectedTeam, difficulty);
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const handleUserLogout = () => {
    setLoading(true);
    setUser(null);
    setLeague(null);
    localStorage.removeItem("user");
    localStorage.removeItem("teamsData");
    localStorage.removeItem("scheduleData");
    window.location.reload();
    generateNewGame();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <h1>
        <i>Soul in the Game Soccer</i>
      </h1>
      {!user?.selectedTeam && league && (
        <TeamSelectionComponent teams={league.teams} onTeamSelect={handleTeamSelect} />
      )}
      {user?.selectedTeam && !user.name && <UserDetailsComponent onSubmit={handleUserDetailsSubmit} />}
      {user && user.name && league && (
        <SeasonComponent user={user} league={league} onUserLogout={handleUserLogout} />
      )}
    </div>
  );
}

export default App
