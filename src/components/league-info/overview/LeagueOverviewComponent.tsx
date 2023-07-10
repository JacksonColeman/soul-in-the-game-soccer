import { Universe} from '../../../classes/Universe';
import { League } from '../../../classes/League';
import StandingsTableComponent from '../standings/StandingsTableComponent';
import LeagueLeadersComponent from '../league-leaders/LeagueLeadersComponent';
import MatchweekComponent from '../matchups/MatchweekComponent';
import './LeagueOverviewComponent.css'

interface LeagueOverviewComponentProps {
  universe: Universe;
  leagueID: number;
}

const LeagueOverviewComponent: React.FC<LeagueOverviewComponentProps> = ({ universe, leagueID }) => {
  const league: League = universe.getLeagueByID(leagueID);
  
  if (!universe.user){
    throw new Error("No user");
  }

  return (
    <div className="league-overview">
      <div className='standings-section'>
        <h3>Standings</h3>
        <StandingsTableComponent league={league} userTeamID={universe.user.teamID}/>
      </div>
      <MatchweekComponent matchups={league.getWeekMatchups(universe.week)} week={universe.week} userTeamID={universe.user.teamID}/>
      <LeagueLeadersComponent league={league}/>
    </div>
  );
};

export default LeagueOverviewComponent;
