import {useState} from "react";
import { Matchup } from "../../classes/Matchup";
import MatchupComponent from "./MatchupComponent";
import '../styles/MatchweekComponent.css'

interface MatchweekProps {
  matchups: Matchup[];
  week: number;
}

const MatchweekComponent: React.FC<MatchweekProps> = ({ matchups, week }) => {
    const [playedAll, setPlayedAll] = useState(matchups[0].played);
    const firstColMatchups = matchups.slice(0, 5);
    const secondColMatchups = matchups.slice(5, 10);

    const handlePlayAllMatchups = () => {
      matchups.forEach((matchup: Matchup) => {
        if (!matchup.played){
          matchup.playMatch();
          setPlayedAll(true);
        }
      });
    }
  
    return (
      <div className="matchweek-container">
        <h3>Matchweek {week}</h3>
        <div className="matchweek-column-container">
          <div className="matchweek-column">
              {firstColMatchups.map((matchup) => (
                <MatchupComponent key={matchup.id} matchup={matchup} />
              ))}
          </div>
          <div className="matchweek-column">
              {secondColMatchups.map((matchup) => (
                <MatchupComponent key={matchup.id} matchup={matchup} />
              ))}
          </div>
        </div>
        <button onClick={handlePlayAllMatchups} disabled={playedAll}>Play All Matchups</button>
      </div>
    );
  };
  
  export default MatchweekComponent;