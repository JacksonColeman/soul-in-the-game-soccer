import { Team } from "../classes/Team.ts"
import { League } from "../classes/League.ts";
import leaguesData from "../data/teams.json"
import { generateManager } from "./GenerateManager.ts";

export function generateTeams(league: League, userTeamID: number): Team[]{
    let leagueID = league.id;
    let teamsData = leaguesData.find(league => league.id == leagueID)?.teams;
    if (!teamsData){
        throw new Error("invalid league ID")
    }
    const teams: Team[] = [];
    teamsData.map(teamInfo => {
        // reputation changes based on leagueMode
        let reputation = teamInfo.reputation + Math.floor(Math.random() * 7) - 3;
        let n = new Team(league, teamInfo.id, teamInfo.name,teamInfo.stadium,reputation,[])
        if (teamInfo.id != userTeamID){
            n.manager = generateManager();
        }
        // n.roster = generateStartingRoster(n); // moving generate roster elsewhere
        teams.push(n);
    })
    return teams;
}
