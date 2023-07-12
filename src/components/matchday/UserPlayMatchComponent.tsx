import React, { useState, useEffect } from "react";
import { Matchup, updateReputation } from "../../classes/Matchup";
import { PlayerAttribute } from "../../constants/attributes";
import { PlayerPosition } from "../../constants/positions";
import poisson from "@stdlib/random-base-poisson";
import { Goal } from "../../classes/Goal";
import LineupTurtleComponent from "../team-info/LineupTurtleComponent";
import './UserPlayMatchComponent.css'
import { Universe } from "../../classes/Universe";

interface UserPlayMatchComponentProps {
  universe: Universe;
  matchup: Matchup;
  handleAdvance: () => void;
}

const UserPlayMatchComponent: React.FC<UserPlayMatchComponentProps> = ({ universe, matchup, handleAdvance }) => {
  const [minute, setMinute] = useState(0);
  const [playPause, setPlayPause] = useState(false);
  const [homeGoals, setHomeGoals] = useState<Goal[]>([]);
  const [awayGoals, setAwayGoals] = useState<Goal[]>([]);
  const [half, setHalf] = useState(1);
  const [buttonText, setButtonText] = useState("Start Match")
  const [isMatchInProgress, setIsMatchInProgress] = useState(true);
  //
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homeTeam, setHomeTeam] = useState(matchup.homeTeam)
  const [awayTeam, setAwayTeam] = useState(matchup.awayTeam);
  const [homeLineup, setHomeLineup] = useState(homeTeam.lineup);
  const [awayLineup, setAwayLineup] = useState(awayTeam.lineup);

  // copied from playmatch
  matchup.homeTeam.inMatch = true;
  matchup.awayTeam.inMatch = true;
      // get starters
  const homeStarters = homeLineup.starterArray;
  const awayStarters = awayLineup.starterArray;
  const allStarters = homeStarters.concat(awayStarters);

  const handlePlayPause = () => {
    if (minute == 45){
      setHalf(2);
    }
    if (playPause){
      setButtonText("Resume Match")
    } else {
      setButtonText("Pause Match")
    }
    setPlayPause(!playPause);
  
  }

  const matchInProgress = () => {
      // figure out cards and subs
      // decrement condition
      if(minute % 4 == 0){
        for (const p of allStarters){
          if (p.position == PlayerPosition.GK){
            p.condition -= Math.random()*1;
            if (Math.random() < 0.00){
              p.injured = true;
              p.injuryTime = Math.floor(Math.random()*5);
            }
          } else {
            p.condition -= Math.random()*1.8;
            if (Math.random() < 0.00){
              p.injured = true;
              p.injuryTime = Math.floor(Math.random()*5);
            }
          }
        }
      }
      let homeGoal:number = poisson(homeScoreMean90);
      let awayGoal:number = poisson(awayScoreMean90);
      if (homeGoal > 0){
        setHomeScore(homeScore+1);
        homeTeam.inMatchStats.matchGoals++;
        let goal = matchup.createGoal(homeTeam, homeLineup, minute+1)
        setHomeGoals([...homeGoals, goal]);
        matchup.goals.push(goal);
        universe.saveUniverse();
        handlePlayPause();
      }
      if (awayGoal > 0){
        setAwayScore(awayScore+1);
        awayTeam.inMatchStats.matchGoals++;
        let goal = matchup.createGoal(awayTeam, awayLineup, minute+1)
        setAwayScore
        setAwayGoals([...awayGoals, goal]);
        matchup.goals.push(goal);
        universe.saveUniverse();
        handlePlayPause();
      }
    homeTeam.inMatchStats.matchMinutes++;
    awayTeam.inMatchStats.matchMinutes++;
    universe.saveUniverse();
    setMinute(minute + 1);
  };

  const handleEndOfMatch = () => {
      matchup.homeScore = homeScore;
      matchup.awayScore = awayScore;

      homeTeam.standingsInfo.goalsFor += homeScore;
      awayTeam.standingsInfo.goalsFor += awayScore;
      homeTeam.standingsInfo.goalsAgainst += awayScore;
      awayTeam.standingsInfo.goalsAgainst += homeScore;
      
      // update standings 
      if (homeScore == awayScore){
        homeTeam.standingsInfo.draws++;
        awayTeam.standingsInfo.draws++;
      } else if (homeScore > awayScore){
        homeTeam.standingsInfo.wins++;
        awayTeam.standingsInfo.losses++;
      } else {
        homeTeam.standingsInfo.losses++;
        awayTeam.standingsInfo.wins++;
      }

      //update player stats
      for (const player of homeLineup.starterArray){
        player.stats.matchesPlayed++;
        player.stats.goals += player.matchStats.goals;
        player.stats.assists += player.matchStats.assists;
        player.matchStats.goals = 0;
        player.matchStats.assists = 0;
      }
      for (const player of awayLineup.starterArray){
        player.stats.matchesPlayed++;
        player.stats.goals += player.matchStats.goals;
        player.stats.assists += player.matchStats.assists;
        player.matchStats.goals = 0;
        player.matchStats.assists = 0;
      }

      // update keeper stats
      // bug check

      homeLineup.startingGoalkeeper.stats.goalsConceded += awayScore;
      awayLineup.startingGoalkeeper.stats.goalsConceded += homeScore;

      if (awayScore === 0 && homeLineup.startingGoalkeeper) {
        homeLineup.startingGoalkeeper.stats.cleanSheets += 1;
      }

      if (homeScore === 0 && awayLineup.startingGoalkeeper) {
        awayLineup.startingGoalkeeper.stats.cleanSheets += 1;
      }
      
      // increment goals allowed
      // set match to played

      // reputation update
      updateReputation(homeTeam, awayTeam, homeScore, awayScore);
      
      homeTeam.inMatch = false;
      awayTeam.inMatch = false;
      homeTeam.inMatchStats = {matchMinutes: 0, matchGoals: 0}
      awayTeam.inMatchStats = {matchMinutes: 0, matchGoals: 0}
      matchup.played = true;
      handleAdvance();
  }



  // attribute ratios
  const homeAttributeRatios = homeTeam.attributeRatios(matchup.league);
  const awayAttributeRatios = awayTeam.attributeRatios(matchup.league);

  const homeTeamAttackProxy = (homeAttributeRatios[PlayerAttribute.Passing] * 10 + 
                              homeAttributeRatios[PlayerAttribute.Shooting] * 10 +
                              homeAttributeRatios[PlayerAttribute.Speed] * 10 +
                              homeAttributeRatios[PlayerAttribute.Mental] * 10 +
                              homeAttributeRatios[PlayerAttribute.Physical] * 5 +
                              homeAttributeRatios[PlayerAttribute.Defending] * 1)/46

  const homeTeamDefendProxy = (homeAttributeRatios[PlayerAttribute.Passing] * 5 + 
                              homeAttributeRatios[PlayerAttribute.Shooting] * 1 +
                              homeAttributeRatios[PlayerAttribute.Speed] * 5 +
                              homeAttributeRatios[PlayerAttribute.Mental] * 8 +
                              homeAttributeRatios[PlayerAttribute.Physical] * 8 +
                              homeAttributeRatios[PlayerAttribute.Defending] * 10)/37 

  const awayTeamAttackProxy = (awayAttributeRatios[PlayerAttribute.Passing] * 10 + 
                              awayAttributeRatios[PlayerAttribute.Shooting] * 10 +
                              awayAttributeRatios[PlayerAttribute.Speed] * 10 +
                              awayAttributeRatios[PlayerAttribute.Mental] * 10 +
                              awayAttributeRatios[PlayerAttribute.Physical] * 5 +
                              awayAttributeRatios[PlayerAttribute.Defending] * 1)/46

  const awayTeamDefendProxy = (awayAttributeRatios[PlayerAttribute.Passing] * 5 + 
                              awayAttributeRatios[PlayerAttribute.Shooting] * 1 +
                              awayAttributeRatios[PlayerAttribute.Speed] * 5 +
                              awayAttributeRatios[PlayerAttribute.Mental] * 8 +
                              awayAttributeRatios[PlayerAttribute.Physical] * 8 +
                              awayAttributeRatios[PlayerAttribute.Defending] * 10)/37

  let homeScoreMean = matchup.league.avgGoals * (homeTeamAttackProxy) * ((1/awayTeamDefendProxy)) *1.05;
  let awayScoreMean = matchup.league.avgGoals * (awayTeamAttackProxy) * ((1/homeTeamDefendProxy)) * 0.95; 

  // by minute simulation
  let homeScoreMean90 = homeScoreMean/90;
  let awayScoreMean90 = awayScoreMean/90;

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (playPause && minute < 90) {
      intervalId = setInterval(matchInProgress, 100);
    }

    if (minute == 45 && half == 1){
      setPlayPause(false);
      setButtonText("Start 2nd Half")
    }
    if (minute == 90){
      setIsMatchInProgress(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [playPause, minute]);

    // prevent refresh scumming by storing and retriving data
    const retrieveMatchData = () => {
      const storedHomeScore = homeTeam.inMatchStats.matchGoals;
      const storedAwayScore = awayTeam.inMatchStats.matchGoals;
      const storedMinute = homeTeam.inMatchStats.matchMinutes;
  
      // Update the state with the retrieved values
      if (storedMinute > 0){
        setButtonText("Resume Match");
      }

      setHomeScore(storedHomeScore);
      setAwayScore(storedAwayScore);
      setMinute(storedMinute);
    }
  
    useEffect(() => {
      retrieveMatchData();
    }, []);


  return (
    <div className="match-container">
      <div className="match-info-container">
        <div className="home-info">
          <h2 className="home-team">{homeTeam.name}</h2>
          <div className="home-goals">
          {homeGoals.map((goal) => (
              <span>
                {goal.scorer.lastName} '{goal.minute}
                {homeGoals.indexOf(goal) !== homeGoals.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>

        <div className="match-info">
          <h2 className="score">{homeScore} - {awayScore}</h2>
          <p>{homeTeam.stadium}</p>
        {isMatchInProgress ? <h2>{minute}:00</h2> : <h2>Final</h2>}
        </div>

        <div className="away-info">
          <h2 className="away-team">{awayTeam.name}</h2>
          <div className="away-goals">
          {awayGoals.map((goal) => (
              <span>
                {goal.scorer.lastName} '{goal.minute}
                {awayGoals.indexOf(goal) !== awayGoals.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className='match-team-container'>
        <div className="match-team">
          <LineupTurtleComponent lineup={homeLineup}/>
        </div>
        <div className="match-team">
          <LineupTurtleComponent lineup={awayLineup}/>
        </div>
      </div>

      {isMatchInProgress ? <button onClick={handlePlayPause}>{buttonText}</button> : <button onClick={handleEndOfMatch}>Advance</button>}
    </div>
  );
};

export default UserPlayMatchComponent;
