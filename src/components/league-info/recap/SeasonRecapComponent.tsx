import React from 'react';
import { League } from '../../../classes/League';


type SeasonRecapProps = {
  league: League
};

const SeasonRecapComponent: React.FC<SeasonRecapProps> = ({league}) => {
    
    const leagueWinner = league.leagueWinner();
    const leagueMVP = league.leagueMVP();
    const topScorer = league.topScorer();
    const topAssister = league.topAssister();
    const bestGK = league.zamora();

    if (!leagueWinner || !leagueMVP || !topScorer || !topAssister || !bestGK){
        throw new Error("Not enough data for league recap")
    }

  return (
    <div>
      <h2>Season Recap</h2>
      <div>
        <h3>League Winner:</h3>
        <p>{leagueWinner.name}</p>
        <p>{leagueWinner.points} Points</p>
      </div>
      <div>
        <h3>Player of the Season</h3>
        <p>{leagueMVP.firstName} {leagueMVP.lastName} | {leagueMVP.team?.name}  | {leagueMVP.stats.goals} Goals | {leagueMVP.stats.assists} Assists</p>
      </div>
      <div>
        <h3>Top Scorer</h3>
        <p>{topScorer.firstName} {topScorer.lastName} | {topScorer.team?.name} | {topScorer.stats.goals} Goals</p>
      </div>
      <div>
        <h3>Top Assister</h3>
        <p>{topAssister.firstName} {topAssister.lastName} | {topAssister.team?.name} | {topAssister.stats.assists} Assists</p>
      </div>
      <div>
        <h3>Best Goalkeeper</h3>
        <p>{bestGK.firstName} {bestGK.lastName} | {bestGK.team?.name} | {bestGK.stats.matchesPlayed} Matches Played | {bestGK.stats.goalsConceded} Goals Conceded | {bestGK.stats.cleanSheets} Clean Sheets</p>
      </div>
    </div>
  );
};

export default SeasonRecapComponent;
