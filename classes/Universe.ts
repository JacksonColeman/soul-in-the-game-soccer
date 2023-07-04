import { League } from "./League";
import User from "./User";
import { Player, PlayerGoalkeeper, PlayerOutfield } from "./Player";
import { Matchup } from "./Matchup";
import { Team } from "./Team";
import { ProRel } from "../scripts/ProRel";

export enum GameState{
    Start = "start",
    Settings = "settings",
    Selection = "selection",
    Season = "season"
}

export class Universe {
    leagues: League[];
    user: User | undefined;
    gameState: GameState = GameState.Start;
    year: number = 2023;
    week: number = 1;
  
    constructor() {
      this.leagues = [];
    }

    playWeekMatches(){
        for (const league of this.leagues){
            league.playWeekMatches(this.week);
        }
    }

    playAllMatches(){
        for (const league of this.leagues){
            league.playAllMatches();
        }
    }

    handleNextWeek(){
        this.week++;
    }

    handleNewYear(){
        this.handleRelegation();
        for (const league of this.leagues){
            league.newYear(this.year);
        }
        this.year++;
        this.week = 1;
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
    }

    getLeagueByID(leagueID: number){
        return this.leagues.find((league) => league.id === leagueID);
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

        const packagedUniverse = {
            date: date, 
            gameState: gameState,
            user: this.user, 
            leagues: leagues
        };
        localStorage.setItem('universe', JSON.stringify(packagedUniverse))
    }
}

export function getStoredUniverse(): Universe{
    console.log("getting universe");
    const storedUniverse = localStorage.getItem('universe');

    if (storedUniverse) {
        const parsedUniverse = JSON.parse(storedUniverse);
        const newUniverse = new Universe();
        const { date, leagues, user, gameState } = parsedUniverse;

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

        if (gameState){
            newUniverse.gameState = gameState;
        }

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
        const newTeam = unpackageTeam(team);
        league.addTeam(newTeam);
    }

    // rebuild schedule
    const schedule = unpackageSchedule(league, scheduleData);
    league.schedule = schedule;

    return league;
}

// package and unpackage player
function packagePlayer(player: Player){
    const playerData = {
        firstName: player.firstName,
        lastName: player.lastName,
        teamID: player.team?.id,
        age: player.age,
        position: player.position,
        attributes: player.attributes,
        stats: player.stats,
        careerStats: player.careerStats,
        injured: player.injured,
        injuryTime: player.injuryTime
    }
    return playerData;
}

function unpackagePlayer(team: Team, playerData: any){
    const { firstName, lastName, age, position, attributes, stats, careerStats, injured, injuryTime } = playerData;
    // Determine player subclass based on position
    let player: Player;
    if (position === 'GK') {
      player = new PlayerGoalkeeper(team, firstName, lastName, age, attributes);
    } else {
      player = new PlayerOutfield(team, firstName, lastName, age, position, attributes);
    }
    player.stats = stats;
    player.careerStats = careerStats;
    player.injured = injured;
    player.injuryTime = injuryTime;
    return player;
}

function unpackageTeam(teamData: any): Team{
    const { id, name, stadium, reputation, roster, standingsInfo } = teamData;
    const team = new Team(id, name, stadium, reputation, [], standingsInfo);
    // Rebuild roster
    for (const playerData of roster) {
        const player = unpackagePlayer(team, playerData);
        team.addPlayer(player);
    };
    return team;
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

function getTeamByID(universe: Universe, teamID: number){
    return universe.getTeamByID(teamID);
}