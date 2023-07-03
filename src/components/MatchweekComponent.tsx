import { Matchup } from "../../classes/Matchup";
import MatchupComponent from "./MatchupComponent";
import FeaturedMatchupComponent from "./FeaturedMatchupComponent"
import '../styles/MatchweekComponent.css'

interface MatchweekProps {
  matchups: Matchup[];
  week: number;
  userTeamID: number;
}

const MatchweekComponent: React.FC<MatchweekProps> = ({ matchups, week, userTeamID }) => {

  const userMatchup = matchups.find((matchup) => matchup.homeTeam.id === userTeamID || matchup.awayTeam.id === userTeamID);
  const otherMatchups = matchups.filter((matchup) => matchup !== userMatchup);

  return (
    
    <div className="matchweek-container">
      <h3>Matchweek {week}</h3>
      {userMatchup && (
        <div className="user-matchup">
          <FeaturedMatchupComponent matchup={userMatchup} />
        </div>
      )}
      <div className="matchweek-column-container">
        <div className="matchweek-column">
          {otherMatchups.map((matchup) => (
            <MatchupComponent key={matchup.id} matchup={matchup} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchweekComponent;
