import {useState, ChangeEvent} from "react";
import { Matchup } from "../../classes/Matchup";
import { League } from "../../classes/League";
import User from "../../classes/User";
import { Team } from "../../classes/Team";
import MatchweekComponent from "./MatchweekComponent";
import StandingsTableComponent from "./StandingsTableComponent";
import '../styles/SeasonComponent.css'
import RosterComponent from "./RosterComponent";
import UserBarComponent from "./UserBarComponent";

interface SeasonProps {
  user: User;
  league: League;
  onUserLogout: () => void;
}
  
  const SeasonComponent: React.FC<SeasonProps> = ({ user, league, onUserLogout }) => {
    
    const [currentWeek, setCurrentWeek] = useState(1);
    const schedule = league.schedule;

    const [selectedTeam, setSelectedTeam] = useState(user.selectedTeam);

  const handleTeamChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const teamId = parseInt(event.target.value);
    const selectedTeam = league.teams.find((team) => team.id === teamId);
    if(selectedTeam){setSelectedTeam(selectedTeam)};
  };
  
    const handlePreviousWeek = () => {
      if (currentWeek > 1) {
        setCurrentWeek(currentWeek - 1);
      }
    };
  
    const handleNextWeek = () => {
      if (currentWeek < schedule.length) {
        setCurrentWeek(currentWeek + 1);
      }
    };
  
    const weekMatchups = schedule[currentWeek-1];
  
    return (
      <div className="season-container">
        <UserBarComponent user={user} onExitGame={onUserLogout}/>
        <div className="season-container-grid">
          <div className="standings-wrapper grid-item">
            <h3>Standings</h3>
            <StandingsTableComponent league={league}/>
          </div>

          <div className="fixtures-wrapper grid-item">
            <MatchweekComponent key={currentWeek} matchups={weekMatchups} week={currentWeek}/>
            <button onClick={handlePreviousWeek} disabled={currentWeek === 1}>
              Previous Week
            </button>
            <button onClick={handleNextWeek} disabled={currentWeek === schedule.length}>
              Next Week
            </button>
          </div>

          <div className="roster-wrapper grid-item">
            <RosterComponent team={selectedTeam}/>
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