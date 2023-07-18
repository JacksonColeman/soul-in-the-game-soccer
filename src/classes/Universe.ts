import { League } from "./League";
import User from "./User";
import { Player } from "./Player";
import { Matchup } from "./Matchup";
import { Team } from "./Team";
import { ProRel } from "../scripts/ProRel";
import { Lineup } from "./Lineup";
import { PlayerPosition } from "../constants/positions";
import { Formation } from "./Formations";
import { GameState, WeekState } from "../constants/gameStates";

export class Universe {
    leagues: League[];
    user: User | undefined;
    gameState: GameState = GameState.Start;
    weekState: WeekState = WeekState.Overview;
    year: number = 2023;
    week: number = 1;
    playerCount: number = 0;
    playedCurrentWeek: boolean = false;
  
    constructor() {
      this.leagues = [];
    }

    get userMatchup(): Matchup{
        const league = this.userLeague;
        if (!league || !this.user){throw new Error("unable to retrieve user matchup")}
        for (const matchup of league.getWeekMatchups(this.week)){
            if (matchup.homeTeam.id == this.user.teamID || matchup.awayTeam.id == this.user.teamID){
                return matchup;
            }
        }
        throw new Error("unable to retrieve user matchup");
    }

    get userLeague(): League | undefined{
        if (this.user){
            return this.getLeagueByTeamID(this.user.teamID);
        }
    }

    get allPlayers(): Player[] {
        let allPlayersArray: Player[] = [];
      
        for (const lg of this.leagues) {
          allPlayersArray = allPlayersArray.concat(lg.allPlayers);
        }
      
        return allPlayersArray;
      }

    get allTeams(): Team[]{
        let teamArray: Team[] = [];
        for (const lg of this.leagues){
            teamArray = teamArray.concat(lg.teams);
        }
        return teamArray;
    }
    
    playWeekMatches(){
        for (const league of this.leagues){
            if (this.week <= league.schedule.length){
                league.playWeekMatches(this.week);
            }
        }
        this.playedCurrentWeek = true;
    }

    playAllMatches(){
        for (const league of this.leagues){
            league.playAllMatches();
        }
        this.playedCurrentWeek = true;
    }

    handleNextWeek(){
        this.week++;
        for (const p of this.allPlayers){
            p.advanceWeek();
        }
        this.playedCurrentWeek = false;
    }

    handleNewYear(){
        this.handleRelegation();
        for (const league of this.leagues){
            league.newYear(this.year);
        }
        this.year++;
        this.week = 1;
        this.playedCurrentWeek = false;
    }

    handleRelegation(){
        for (const league of this.leagues){
            const relegatesToID = league.relegatesToID;
            if (relegatesToID){
                const lowerTier = this.getLeagueByID(relegatesToID);
                if (lowerTier){ProRel(league,lowerTier,3)}
            }
        }
    }

    getTeamByID(teamID: number){
        for (const league of this.leagues) {
            const team = league.teams.find((team) => team.id === teamID);
            if (team) {
                return team;
            }
        }
        throw new Error(`${teamID} is an invalid team id`)
    }

    getLeagueByID(leagueID: number): League{
        const lg = this.leagues.find((league) => league.id === leagueID);
        if (!lg){throw new Error("league does not exist")}
        return lg;
    }

    getLeagueByTeamID(teamID: number){
        for (const league of this.leagues) {
            const team = league.teams.find((team) => team.id === teamID);
            if (team) {
              return league;
            }
          }
        return undefined;
    }

    addLeague(league: League) {
        this.leagues.push(league);
    }

    packageLeagues(){
        const packagedLeagues: any = [];
        for (const league of this.leagues){
            let packagedLeague = packageLeagueData(league);
            packagedLeagues.push(packagedLeague);
        }
        return (packagedLeagues);
    }

    packageDate(){
        const date = {
            year: this.year,
            week: this.week
        }
        return date;
    }

    saveUniverse(){
        console.log("saving universe");
        const date = this.packageDate();
        const leagues = this.packageLeagues();
        const gameState = this.gameState;
        const weekState = this.weekState;
        const playedCurrentWeek = this.playedCurrentWeek;

        const packagedUniverse = {
            date: date, 
            gameState: gameState,
            weekState: weekState,
            user: this.user, 
            leagues: leagues,
            playedCurrentWeek: playedCurrentWeek
        };
        localStorage.setItem('universe', JSON.stringify(packagedUniverse))
    }

    // transfers
    handleTransferRound(){
        for (let i = 0; i < 50; i++){
            for (const lg of this.leagues){
                for (const tm of lg.teams){
                tm.identifyTransferTargets(this.allPlayers);
                }
            }
            for (const player of this.allPlayers){
                player.updateMarketValue();
            }
        }
        for (const lg of this.leagues){
            for (const tm of lg.teams){
            tm.makeTransferOffers();
            }
        }
    }
}

export function getStoredUniverse(): Universe{
    console.log("getting universe");
    const storedUniverse = localStorage.getItem('universe');

    if (storedUniverse) {
        const parsedUniverse = JSON.parse(storedUniverse);
        const newUniverse = new Universe();
        const { date, leagues, user, gameState, weekState, playedCurrentWeek } = parsedUniverse;

        // set date
        const {year, week} = date;
        newUniverse.year = year;
        newUniverse.week = week;

        // get leagues
        for (const league of leagues){
            const unpackagedLeague = unpackageLeagueData(league);
            newUniverse.addLeague(unpackagedLeague);
        }

        // get user
        if (user){
            const {name, teamID} = user;
            const unpackagedUser = new User(name, teamID);
            newUniverse.user = unpackagedUser;
        }

        newUniverse.gameState = gameState;
        newUniverse.weekState = weekState;
        newUniverse.playedCurrentWeek = playedCurrentWeek;

        return newUniverse;
    }
    throw new Error("Universe does not exist");
}

// package and unpackage league
function packageLeagueData(league: League) {
    const id = league.id;

    // Teams data
    const teamsData = league.teams?.map((team) => ({
        id: team.id,
        name: team.name,
        stadium: team.stadium,
        reputation: team.reputation,
        standingsInfo: team.standingsInfo,
        manager: team.manager,
        inMatch: team.inMatch,
        inMatchStats: team.inMatchStats,
        transferBudget: team.transferBudget,
        savedLineup: team.savedLineup ? packageLineup(team.savedLineup) : null,
        roster: team.roster.map((p) => (packagePlayer(p))),
    }));

    // Schedule data
    const scheduleData = league.schedule?.map((week) =>
        week.map((matchup) => ({
            homeTeamID: matchup.homeTeam.id,
            awayTeamID: matchup.awayTeam.id,
            homeScore: matchup.homeScore,
            awayScore: matchup.awayScore,
            played: matchup.played,
            id: matchup.id,
        }))
    );

    const leagueItem = { id, teamsData, scheduleData };
    return leagueItem;
}

function unpackageLeagueData(packagedLeague: {
    id: number,
    teamsData: any[],
    scheduleData: any[]
    }): League{

    const {id, teamsData, scheduleData} = packagedLeague;
    const league = new League(id);
    
    // rebuild teams
    for (const team of teamsData){
        const newTeam = unpackageTeam(league,team);
        league.addTeam(newTeam);
    }

    // rebuild schedule
    const schedule = unpackageSchedule(league, scheduleData);
    league.schedule = schedule;
    league.generateWeightedAttributeTotals();

    return league;
}

function unpackageTeam(league: League, teamData: any): Team{
    const { id, name, stadium, reputation, roster, standingsInfo, manager, inMatch, inMatchStats, transferBudget, savedLineup } = teamData;
    const team = new Team(league, id, name, stadium, reputation, [], standingsInfo);
    team.manager = manager;
    team.inMatch = inMatch;
    team.inMatchStats = inMatchStats;
    team.transferBudget = transferBudget;
    // Rebuild roster
    for (const playerData of roster) {
        const player = unpackagePlayer(team, playerData);
        team.roster.push(player);
    };
    // rebuild lineup
    if (savedLineup){
        team.savedLineup = rebuildLineup(team, savedLineup);
    }
    return team;
}

// package and unpackage player
function packagePlayer(player: Player){
    const playerData = {
        id: player.id,
        firstName: player.firstName,
        lastName: player.lastName,
        teamID: player.team?.id,
        age: player.age,
        position: player.position,
        fieldPosition: player.fieldPosition,
        attributes: player.attributes,
        stats: player.stats,
        matchStats: player.matchStats,
        careerStats: player.careerStats,
        injured: player.injured,
        injuryTime: player.injuryTime,
        condition: player.condition,
        marketValue: player.marketValue
    }
    return playerData;
}

function unpackagePlayer(team: Team, playerData: any){
    const { id, firstName, lastName, age, position, fieldPosition, attributes, stats, matchStats, careerStats, injured, injuryTime, condition, marketValue } = playerData;
    // Determine player subclass based on position
    let player: Player;
    player = new Player(team, firstName, lastName, age, position, attributes)
    player.fieldPosition = fieldPosition;
    player.id = id;
    player.stats = stats;
    player.matchStats = matchStats;
    player.careerStats = careerStats;
    player.injured = injured;
    player.injuryTime = injuryTime;
    player.condition = condition;
    player.marketValue = marketValue;
    return player;
}



function unpackageSchedule(league: League, scheduleData: any){
    const schedule: Matchup[][] = scheduleData.map((weekData: any[]) =>
    weekData.map((matchupData: any) => {
      const { homeTeamID, awayTeamID, played, homeScore, awayScore } = matchupData;
      let homeTeam = league.getTeam(homeTeamID);
      let awayTeam = league.getTeam(awayTeamID);

      if (!homeTeam || !awayTeam) {
        throw new Error('Invalid team data in scheduleData');
      }

      return new Matchup(homeTeam, awayTeam, league, played, homeScore, awayScore);
    })
  )
  return schedule;
}

function packageLineup(lineup: Lineup) {
    const starters = lineup.starters;
    const bench = lineup.bench;
    const reserves = lineup.reserves;
    const formation = lineup.formation;
  
    const packagedLineup = {
      starters: {} as { [position in PlayerPosition]: string[] },
      bench: bench.map((player) => player.id),
      reserves: reserves.map((player) => player.id),
      formation: formation,
    };
  
    for (const position in lineup.starters) {
      packagedLineup.starters[position as PlayerPosition] = starters[position as PlayerPosition].map(
        (player) => player.id
      );
    }
  
    return packagedLineup;
  }

  function rebuildLineup(team: Team, lineupData: any) {
    const formation = new Formation(lineupData.formation.name, lineupData.formation.positionRequirements, lineupData.formation.gameStartAmounts, lineupData.formation.depthChartWeights);
    const lineup = new Lineup([],formation);
  
    // Rebuild starters
    for (const position in lineupData.starters) {
      const playerIDs = lineupData.starters[position as PlayerPosition];
      const players = playerIDs.map((id: string) => team.getPlayerByID(id));
      lineup.starters[position as PlayerPosition] = players;
    }
  
    // Rebuild bench
    lineup.bench = lineupData.bench.map((id: string) => team.getPlayerByID(id));
  
    // Rebuild reserves
    lineup.reserves = lineupData.reserves.map((id: string) => team.getPlayerByID(id));

    lineup.allPlayers = lineup.starterArray.concat(lineup.bench).concat(lineup.reserves);
  
    return lineup;
  }
  


// function unpackageLineup(team: Team, lineupData: any): Lineup {

//     const allPlayers = lineupData.allPlayers.map((playerData: any) => unpackagePlayer(playerData, team));
//     const starters = lineupData.starters;
//     const bench = lineupData.bench.map((playerData: any) => unpackagePlayer(playerData, team));

//     const reserves = lineupData.reserves.map((playerData: any) => unpackagePlayer(playerData));
//     const formation = lineupData.formation;

//     const lineup = new Lineup(allPlayers, formation);

//     // Unpackage each position in starters
//     for (const position in starters) {
//       lineup.starters[position] = starters[position].map((playerData: any) => unpackagePlayer(playerData));
//     }

//     lineup.bench = bench;
//     lineup.reserves = reserves;

//     return lineup;
//   }