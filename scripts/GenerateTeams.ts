import { Team } from "../classes/Team"
import leaguesData from "../src/data/teams.json"
import generateStartingRoster from './GenerateStartingRoster.ts'

export function generateTeams(leagueID: number, leagueStrength: string | undefined, userTeamStrength: string| undefined, userTeamID: number | undefined): Team[]{
    let teamsData = leaguesData.find(league => league.id == leagueID)?.teams;
    if (!teamsData){
        throw new Error("invalid league ID")
    }
    const teams: Team[] = [];
    teamsData.map(teamInfo => {
        // reputation changes based on leagueMode
        let reputation: number;
        if (leagueStrength == "Realistic" || (userTeamStrength == "Realistic" && teamInfo.id == userTeamID)){
            reputation = teamInfo.reputation + Math.floor(Math.random() * 7) - 3;
        } 
        else if (leagueStrength == "Random"){
            reputation = Math.floor(Math.random()*41) + 55;
        } else {
            reputation = teamInfo.reputation + Math.floor(Math.random() * 7) - 3;
        }

        // 
        if (teamInfo.id == userTeamID && userTeamStrength == "Challenge"){
            reputation = 65;
         }

        let n = new Team(teamInfo.id, teamInfo.name,teamInfo.stadium,reputation,[])
        n.roster = generateStartingRoster(n);
        teams.push(n);
    })
    return teams;
}
