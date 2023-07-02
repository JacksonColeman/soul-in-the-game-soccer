import {useState} from "react";
import { League } from "../../classes/League";
import User from "../../classes/User";
import MatchweekComponent from "./MatchweekComponent";
import StandingsTableComponent from "./StandingsTableComponent";
import '../styles/SeasonComponent.css'
import RosterComponent from "./RosterComponent";
import Formation from "./FormationComponent";
import UserBarComponent from "./UserBarComponent";
import { storeLeagueData } from "../../scripts/LeagueStorage";
// import TeamTotalsUnderTheHood from "./TeamTotalsUnderTheHood";
import LeagueLeadersComponent from "./LeagueLeadersComponent"
import FormationComponent from "./FormationComponent";

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

    const [currentYear, setCurrentYear] = useState(getGameDate().year);
    const [currentWeek, setCurrentWeek] = useState(getGameDate().week);
    const [schedule, setSchedule] = useState([...league.schedule]);
    const [played, setPlayed] = useState(schedule[currentWeek - 1][0].played);
    const [selectedTeam, setSelectedTeam] = useState(league.getTeam(user.teamID));
    const [showStandings, setShowStandings] = useState(true)

    const toggleStandingsView = () => {
      setShowStandings(!showStandings);
    };

    const userTeam = league.getTeam(user.teamID);

    const onTeamSelect = (id: number) => {
      const selectedTeam = league.getTeam(id);
      setSelectedTeam(selectedTeam);
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
        setSelectedTeam(league.getTeam(user.teamID));
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

    const playAndAdvance = () => {
      handlePlayMatches();
      handleNextWeek();
    }

    const handleNewYear = () => {
      league.newYear(currentYear);
      setCurrentYear(currentYear+1);
      setCurrentWeek(1);
      saveGameDate(currentYear+1,1);
      // pro/rel
      league.schedule = league.generateSchedule();
      storeLeagueData(league);
      setSchedule(league.schedule);
      setPlayed(false);
    }
  
    return (
      <div className="season-container">
        <UserBarComponent user={user} team={userTeam} onExitGame={onUserLogout} year={currentYear} week={currentWeek}/>
        <div className="season-container-grid">
          <div className="standings-wrapper grid-item">
          <h3>{showStandings ? "Standings" : "League Leaders"}</h3>
            {showStandings ? (
              <StandingsTableComponent
                league={league}
                userTeamID={user.teamID}
                onTeamSelect={onTeamSelect}
              />
            ) : (
              <div>
              <LeagueLeadersComponent league={league} />
              {/* <TeamTotalsUnderTheHood league={league}/> */}
              </div>
            )}
            <a href="/#" onClick={toggleStandingsView}>
              {showStandings ? "League Leaders" : "Standings"}
            </a>
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
            <button onClick={playAndAdvance} disabled={played}>Play and Advance</button>
            {currentWeek == schedule.length && played && <button onClick={handleNewYear}>New Year!</button>}
          </div>

          <div className="roster-wrapper grid-item">
          {selectedTeam ?<FormationComponent team={selectedTeam} key={currentWeek} /> : null}
        </div>
        </div>
      </div>
    );
  };
  
  export default SeasonComponent;