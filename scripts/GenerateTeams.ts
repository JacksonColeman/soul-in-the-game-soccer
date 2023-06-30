import { Team } from "../classes/Team"
import { Player, PlayerGoalkeeper, PlayerOutfield } from "../classes/Player";
import data from "../src/data/teams.json"
import {firstName, lastName} from './GenerateNames.ts';

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

        let n = new Team(teamInfo.id, teamInfo.name,teamInfo.stadium,reputation,[],{wins: 0,losses: 0,draws: 0, goalsFor: 0, goalsAgainst:0})
        n.roster = generateRoster(n);
        teams.push(n);
    })
    return teams;
}

export function generateRoster(team: Team): Player[]{
    const roster: Player[] = [];
    // goalkeepers
    const GK = generateGoalkeeper(team.reputation);
    roster.push(GK);
    // defenders
    for (let i = 0; i < 4; i++){
        let DF = generateDefender(team.reputation);
        roster.push(DF);
    }
    // midfielders
    for (let i = 0; i < 4; i++){
        let MF = generateMidfielder(team.reputation);
        roster.push(MF);
    }
    // forward
    for (let i = 0; i < 2; i++){
        let FW = generateForward(team.reputation);
        roster.push(FW);
    }

    return roster;
}

// each team should have 1 goalkeeper, 4 defenders, 4 midfielders, 2 forwards (just to start)

function generateGoalkeeper(reputation: number): PlayerGoalkeeper{
    const averageGKP = Math.floor(reputation ** 0.99);
    const generatedGKP = generateRandomAttribute(averageGKP, 10)
    const GKage = generateRandomAge();
    const GK = new PlayerGoalkeeper(firstName('male'), lastName(), GKage, 0,0,{goalkeeping: generatedGKP});
    return GK;
}

function generateDefender(reputation: number){
    const averageDEF = Math.floor(reputation ** 0.99);
    const averageATT = Math.floor(averageDEF/2);
    const generatedDEF = generateRandomAttribute(averageDEF, 10)
    const generatedATT = generateRandomAttribute(averageATT, 10)
    const DFage = generateRandomAge();
    const DF = new PlayerOutfield(firstName('male'), lastName(), DFage,"DF",0,0, {attacking: generatedATT, defending: generatedDEF});
    return DF;
}

function generateMidfielder(reputation: number){
    const averageATT = Math.floor(reputation ** 0.95);
    const averageDEF = Math.floor(reputation ** 0.95);
    const generatedATT = generateRandomAttribute(averageATT, 10)
    const generatedDEF = generateRandomAttribute(averageDEF, 10)
    const MFage = generateRandomAge();
    const MF = new PlayerOutfield(firstName('male'), lastName(), MFage, "MF",0,0, {attacking: generatedATT, defending: generatedDEF});
    return MF;
}

function generateForward(reputation: number){
    const averageATT = Math.floor(reputation ** 0.99);
    const averageDEF = Math.floor(averageATT/2);
    const generatedATT = generateRandomAttribute(averageATT, 10)
    const generatedDEF = generateRandomAttribute(averageDEF, 10)
    const FWage = generateRandomAge();
    const FW = new PlayerOutfield(firstName('male'), lastName(), FWage, "FW",0,0, {attacking: generatedATT, defending: generatedDEF});
    return FW;
}

function generateRandomAttribute(average: number, variability: number): number {
    const min = Math.max(1, average - variability);
    const max = Math.min(100, average + variability);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function generateRandomAge(): number{
    return Math.floor(Math.random() * (17)) + 18;
}