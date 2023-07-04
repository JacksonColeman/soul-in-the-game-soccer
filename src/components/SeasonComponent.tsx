import React, { useState } from "react";
import { League } from "../../classes/League";
import MatchweekComponent from "./MatchweekComponent";
import StandingsTableComponent from "./StandingsTableComponent";
import UserBarComponent from "./UserBarComponent";
import LeagueLeadersComponent from "./LeagueLeadersComponent";
import FormationComponent from "./FormationComponent";
import TeamPlayersTableComponent from "./TeamPlayersTableComponent";
import { Universe } from "../../classes/Universe";

import "../styles/SeasonComponent.css";

interface SeasonProps {
  universe: Universe;
  handleUserLogout: () => void;
  handleNewYear: () => void;
}

const SeasonComponent: React.FC<SeasonProps> = ({
  universe,
  handleUserLogout,
  handleNewYear
}) => {
  const { user, year, week } = universe;

  if (!user) {
    throw new Error("No user!");
  }

  const [league, setLeague] = useState(universe.userLeague);
  if (!league) {
    throw new Error("No league!");
  }

  const [currentYear, setCurrentYear] = useState(year);
  const [currentWeek, setCurrentWeek] = useState(week);
  const [schedule, setSchedule] = useState(league.schedule);
  const [played, setPlayed] = useState(schedule[currentWeek - 1][0].played);
  const [showStandings, setShowStandings] = useState(true);

  const [selectedTeam, setSelectedTeam] = useState(league.getTeam(user.teamID));
  const userTeam = league.getTeam(user.teamID);

  const onTeamSelect = (id: number) => {
    const selectedTeam = universe.getTeamByID(id);
    selectedTeam ? setSelectedTeam(selectedTeam) : null;
  };

  const toggleStandingsView = () => {
    setShowStandings(!showStandings);
  };

  const handleNextWeek = () => {
    if (currentWeek < schedule.length) {
      setCurrentWeek(currentWeek + 1);
      universe.handleNextWeek();
      setSelectedTeam(league.getTeam(user.teamID));
      setPlayed(false);
    }
  };

  

  const handlePlayMatches = () => {
    universe.playWeekMatches();
    setPlayed(true);
  };

  const handleAdvance = () => {
    if (currentWeek === schedule.length && played) {
      handleNewYear();
    } else if (!played) {
      handlePlayMatches();
    } else {
      handleNextWeek();
    }
    universe.saveUniverse();
  };

  const handlePlayFullSeason = () => {
    universe.playAllMatches();
    setCurrentWeek(league.schedule.length);
    universe.week = league.schedule.length;
    setPlayed(true);
  };

  return (
    <div className="season-container">
      <UserBarComponent
        user={user}
        team={userTeam}
        onExitGame={handleUserLogout}
        year={currentYear}
        week={currentWeek}
      />
      

        <div className="fixtures-wrapper grid-item">
          <MatchweekComponent
            key={currentWeek}
            matchups={schedule[currentWeek - 1]}
            week={currentWeek}
            userTeamID={user.teamID}
          />
          <button onClick={handleAdvance}>Advance</button>
          <button onClick={handlePlayFullSeason}>Play Full Season</button>
        </div>


      </div>
  );
};

export default SeasonComponent;



  //   const {user, leagues} = universe;
  //   if (!user){throw new Error("No user!")};
  //   const league = leagues[0];
    
    
  //   const getGameDate = () => {
  //     const storedGameDate = localStorage.getItem('gameDate');
  //     if (storedGameDate) {
  //       const gameDate = JSON.parse(storedGameDate)
  //       return gameDate;
  //     }
  //     // Return default values or handle missing data
  //   };

  //   getGameDate();

  //   const [currentYear, setCurrentYear] = useState(getGameDate().year);
  //   const [currentWeek, setCurrentWeek] = useState(getGameDate().week);
  //   const [schedule, setSchedule] = useState([...league.schedule]);
  //   const [played, setPlayed] = useState(schedule[currentWeek - 1][0].played);
  //   const [selectedTeam, setSelectedTeam] = useState(league.getTeam(user.teamID));
  //   const [showStandings, setShowStandings] = useState(true)

  //   const toggleStandingsView = () => {
  //     setShowStandings(!showStandings);
  //   };

  //   const userTeam = league.getTeam(user.teamID);

    
  
  //   // const handlePreviousWeek = () => {
  //   //   if (currentWeek > 1) {
  //   //     setCurrentWeek(currentWeek - 1);
  //   //   }
  //   // };
  
 

  //   window.onbeforeunload = () => {
  //     storeLeagueData(league);
  //     saveGameDate(currentYear, currentWeek);
  //   };

  //   // const handlePlayMatches = () => {
  //   //   const currentMatchups = schedule[currentWeek - 1];
  //   //   const shouldUpdate = currentMatchups.some((matchup) => !matchup.played);
  
  //   //   if (shouldUpdate) {
  //   //     const updatedMatchups = currentMatchups.map((matchup) => {
  //   //       if (!matchup.played) {
  //   //         matchup.playMatch();
  //   //       }
  //   //       return matchup;
  //   //     });
  
  //   //     const updatedSchedule = [...schedule];
  //   //     updatedSchedule[currentWeek - 1] = updatedMatchups;
  
  //   //     setPlayed(true);
  //   //     storeLeagueData(league);
  //   //     setSchedule(updatedSchedule);
  //   //   }
  //   // };

  //   const handlePlayMatches = () => {
  //     league.playWeekMatches(currentWeek);
  //     setPlayed(true);
  //     storeLeagueData(league);
  //   }

  //   const handlePlayFullSeason = () => {
  //     league.playAllMatches();
  //     league.relegatesTo?.playAllMatches();
  //     console.log(league.relegatesTo);
  //     setCurrentWeek(league.schedule.length);
  //     saveGameDate(currentYear, league.schedule.length);
  //     setPlayed(true);
  //   }

  //   const playAndAdvance = () => {
  //     handlePlayMatches();
  //     handleNextWeek();
  //   }

  //   const handleNewYear = () => {
  //     league.newYear(currentYear);
  //     setCurrentYear(currentYear+1);
  //     setCurrentWeek(1);
  //     saveGameDate(currentYear+1,1);
  //     // pro/rel
  //     league.schedule = league.generateSchedule();
  //     if (league.relegatesTo) league.relegatesTo.schedule = league.relegatesTo?.generateSchedule();
  //     storeLeagueData(league);
  //     setSchedule(league.schedule);
  //     setPlayed(false);
  //   }

  //   const handleAdvance = () => {
  //     if (currentWeek == schedule.length && played){
  //       handleNewYear();
  //     } else if (!played) {
  //       handlePlayMatches();
  //     } else {
  //       handleNextWeek();
  //     }
  //   }
  
  //   return (
  //     <div className="season-container">
  //       <UserBarComponent user={user} team={userTeam} onExitGame={onUserLogout} year={currentYear} week={currentWeek}/>
  //       <div className="season-container-grid">
  //         <div className="standings-wrapper grid-item">
  //         <h3>{showStandings ? "Standings" : "League Leaders"}</h3>
  //           {showStandings ? (
  //             <StandingsTableComponent
  //               league={league}
  //               userTeamID={user.teamID}
  //               onTeamSelect={onTeamSelect}
  //             />
  //           ) : (
  //             <div>
  //             <LeagueLeadersComponent league={league} />
  //             {/* <TeamTotalsUnderTheHood league={league}/> */}
  //             </div>
  //           )}
  //           <a href="/#" onClick={toggleStandingsView}>
  //             {showStandings ? "League Leaders" : "Standings"}
  //           </a>
  //         </div>

  //         <div className="fixtures-wrapper grid-item">
  //         {/* <FormationComponent team={selectedTeam} key={currentWeek} /> */}
  //           <MatchweekComponent key={currentWeek} matchups={schedule[currentWeek - 1]} week={currentWeek} userTeamID={user.teamID}/>
  //           <button onClick={handleAdvance}>Advance</button>
  //           <button onClick={handlePlayFullSeason}>Play Full Season</button>
  //         </div>

  //         <div className="roster-wrapper grid-item">
  //           <h3>{selectedTeam.name} Roster</h3>
          
  //         <TeamPlayersTableComponent team={selectedTeam}/>
  //         {/* <button onClick={handlePlayMatches} disabled={played}>Play Matches</button>
  //           <button onClick={handleNextWeek} disabled={!played || currentWeek === schedule.length}>
  //             Next Week
  //           </button>
  //           <button onClick={playAndAdvance} disabled={played}>Play and Advance</button>
  //           {currentWeek == schedule.length && played && <button onClick={handleNewYear}>New Year!</button>} */}
  //           <FormationComponent team={selectedTeam}/>
  //       </div>
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default SeasonComponent;