import { Team } from "../classes/Team"
import data from "../src/data/teams.json"
import generateStartingRoster from './GenerateStartingRoster.ts'

export function generateTeams(leagueStrength: string, userTeamStrength: string, userTeamID: number): Team[]{

    const teams: Team[] = [];
    data.map(teamInfo => {
        // reputation changes based on leagueMode
        let reputation: number;
        if (leagueStrength == "Realistic" || (userTeamStrength == "Realistic" && teamInfo.id == userTeamID)){
            reputation = teamInfo.reputation + Math.floor(Math.random() * 7) - 3;
        } 
        else if (leagueStrength == "Random"){
            reputation = Math.floor(Math.random()*41) + 55;
        } else {
            reputation = teamInfo.reputation;
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

// each team should have 1 goalkeeper, 4 defenders, 4 midfielders, 2 forwards (just to start)
