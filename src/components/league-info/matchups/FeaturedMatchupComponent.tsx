import { Matchup } from "../../../classes/Matchup";
import { Link } from "react-router-dom";
import './MatchupComponent.css'

interface MatchupProps {
  matchup: Matchup;
}

const MatchupComponent: React.FC<MatchupProps> = ({ matchup }) => {
  const { homeTeam, awayTeam, homeScore, awayScore, played } = matchup;
  
  return (
    <div className="matchup">
      <div className="team-info">
        <div className="home-team-container">
              <Link to={`/teams/${homeTeam.id}`} className="team-link">
                {homeTeam.name}
              </Link>
        </div>
        <div className = "team-score-container">
          {played && <span className="jteam-score">{homeScore} - {awayScore}</span> || "vs"}
        </div>
        <div className="away-team-container">
            <Link to={`/teams/${awayTeam.id}`} className="team-link">
                {awayTeam.name}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default MatchupComponent;