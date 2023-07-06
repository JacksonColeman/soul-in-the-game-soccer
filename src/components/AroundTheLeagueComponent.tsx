import { Matchup } from "../../classes/Matchup";
import MatchupComponent from "./MatchupComponent";

interface MatchweekProps {
  matchups: Matchup[];
  userTeamID: number;
}

const AroundTheLeagueComponent: React.FC<MatchweekProps> = ({ matchups, userTeamID }) => {

  const otherMatchups = matchups.filter((matchup) => matchup.homeTeam.id !== userTeamID && matchup.awayTeam.id !== userTeamID);

  return (
    
      <div className="matchweek-column-container">
        <h3>League Results</h3>
        <div className="matchweek-column">
          {otherMatchups.map((matchup) => (
            <MatchupComponent key={matchup.id} matchup={matchup} />
          ))}
        </div>
      </div>
  );
};

export default AroundTheLeagueComponent;
