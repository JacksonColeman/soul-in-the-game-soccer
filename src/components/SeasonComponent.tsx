import {useState, ChangeEvent} from "react";
import { League } from "../../classes/League";
import User from "../../classes/User";
import MatchweekComponent from "./MatchweekComponent";
import StandingsTableComponent from "./StandingsTableComponent";
import '../styles/SeasonComponent.css'
import RosterComponent from "./RosterComponent";
import UserBarComponent from "./UserBarComponent";
import { storeLeagueData } from "../../scripts/LeagueStorage";

interface SeasonProps {
  user: User;
  league: League;
  onUserLogout: () => void;
  saveGameDate: (year:number, week:number) => void;
}
  
  const SeasonComponent: React.FC<SeasonProps> = ({ user, league, onUserLogout, saveGameDate }) => {
    
    const getGameDate = () => {
      const storedGameDate = localStorage.getItem('gameDate');
      if (storedGameDate) {
        const gameDate = JSON.parse(storedGameDate)
        return gameDate;
      }
      // Return default values or handle missing data
    };

    getGameDate();

    const [currentYear] = useState(getGameDate().year);
    const [currentWeek, setCurrentWeek] = useState(getGameDate().week);
    const [schedule, setSchedule] = useState([...league.schedule]);
    const [played, setPlayed] = useState(schedule[currentWeek - 1][0].played);
    const [selectedTeam, setSelectedTeam] = useState(league.teams.find((team) => team.id === user.teamID))

    const userTeam = league.getTeam(user.teamID);

  const handleTeamChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const teamId = parseInt(event.target.value);
    const selectedTeam = league.teams.find((team) => team.id === teamId);
    if(selectedTeam){setSelectedTeam(selectedTeam)};
  };
  
    // const handlePreviousWeek = () => {
    //   if (currentWeek > 1) {
    //     setCurrentWeek(currentWeek - 1);
    //   }
    // };
  
    const handleNextWeek = () => {
      if (currentWeek < schedule.length) {
        setCurrentWeek(currentWeek + 1);
        saveGameDate(currentYear,currentWeek+1);
        storeLeagueData(league);
        setPlayed(false);
      }
    };

    window.onbeforeunload = () => {
      storeLeagueData(league);
      saveGameDate(currentYear, currentWeek);
    };

    const handlePlayMatches = () => {
      const currentMatchups = schedule[currentWeek - 1];
      const shouldUpdate = currentMatchups.some((matchup) => !matchup.played);
  
      if (shouldUpdate) {
        const updatedMatchups = currentMatchups.map((matchup) => {
          if (!matchup.played) {
            matchup.playMatch();
          }
          return matchup;
        });
  
        const updatedSchedule = [...schedule];
        updatedSchedule[currentWeek - 1] = updatedMatchups;
  
        setPlayed(true);
        storeLeagueData(league);
        setSchedule(updatedSchedule);
      }
    };
  
    return (
      <div className="season-container">
        <UserBarComponent user={user} team={userTeam} onExitGame={onUserLogout} year={currentYear} week={currentWeek}/>
        <div className="season-container-grid">
          <div className="standings-wrapper grid-item">
            <h3>Standings</h3>
            <StandingsTableComponent league={league} userTeamID={user.teamID}/>
          </div>

          <div className="fixtures-wrapper grid-item">
            <MatchweekComponent key={currentWeek} matchups={schedule[currentWeek - 1]} week={currentWeek}/>
            {/* <button onClick={handlePreviousWeek} disabled={currentWeek === 1}>
              Previous Week
            </button> */}
            <button onClick={handlePlayMatches} disabled={played}>Play Matches</button>
            <button onClick={handleNextWeek} disabled={!played || currentWeek === schedule.length}>
              Next Week
            </button>
          </div>

          <div className="roster-wrapper grid-item">
          <RosterComponent team={selectedTeam} key={currentWeek} />
          <div className="dropdown">
            <p>View other team rosters:</p>
            <select value={selectedTeam?.id} onChange={handleTeamChange}>
              {league.teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default SeasonComponent;