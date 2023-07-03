import { Matchup } from "../../classes/Matchup";
import '../styles/MatchupComponent.css'

interface MatchupProps {
  matchup: Matchup;
}

const MatchupComponent: React.FC<MatchupProps> = ({ matchup }) => {
  const { homeTeam, awayTeam, homeScore, awayScore, played } = matchup;
  
  return (
    <div className="matchup">
      <div className="team-info">
        <div className="home-team-container">
          <span className="home-team-name">{homeTeam.name}</span>
        </div>
        <div className = "team-score-container">
          {played && <span className="jteam-score">{homeScore} - {awayScore}</span>}
        </div>
        <div className="away-team">
          <span className="away-team-name">{awayTeam.name}</span>
        </div>
      </div>
    </div>
  );
};

export default MatchupComponent;