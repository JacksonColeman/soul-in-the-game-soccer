import { Team } from "../classes/Team"
import leaguesData from "../src/data/teams.json"
import generateStartingRoster from './GenerateStartingRoster.ts'

export function generateTeams(leagueID: number): Team[]{
    let teamsData = leaguesData.find(league => league.id == leagueID)?.teams;
    if (!teamsData){
        throw new Error("invalid league ID")
    }
    const teams: Team[] = [];
    teamsData.map(teamInfo => {
        // reputation changes based on leagueMode
        let reputation = teamInfo.reputation + Math.floor(Math.random() * 7) - 3;
        let n = new Team(teamInfo.id, teamInfo.name,teamInfo.stadium,reputation,[])
        n.roster = generateStartingRoster(n);
        teams.push(n);
    })
    return teams;
}
