import {useState} from "react";
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
        <span className="team-name">{homeTeam.name}</span>
        {played && <span className="team-score">{homeScore}</span>}
      </div>
      <div className="team-info">
        <span className="team-name">{awayTeam.name}</span>
        {played && <span className="team-score">{awayScore}</span>}
      </div>
    </div>
  );
};

export default MatchupComponent;