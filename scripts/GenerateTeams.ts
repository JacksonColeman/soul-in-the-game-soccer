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

        let n = new Team(teamInfo.id, teamInfo.name,teamInfo.stadium,reputation,[])
        n.roster = generateRoster(n);
        teams.push(n);
    })
    return teams;
}

export function generateRoster(team: Team): Player[]{
    const roster: Player[] = [];
    // goalkeepers
    const GK = generateGoalkeeper(team, team.reputation, generateRandomAge());
    roster.push(GK);
    // defenders
    for (let i = 0; i < 4; i++){
        let DF = generateDefender(team, team.reputation, generateRandomAge());
        roster.push(DF);
    }
    // midfielders
    for (let i = 0; i < 4; i++){
        let MF = generateMidfielder(team, team.reputation, generateRandomAge());
        roster.push(MF);
    }
    // forward
    for (let i = 0; i < 2; i++){
        let FW = generateForward(team, team.reputation, generateRandomAge());
        roster.push(FW);
    }

    return roster;
}

// each team should have 1 goalkeeper, 4 defenders, 4 midfielders, 2 forwards (just to start)

function generateGoalkeeper(team: Team | undefined, reputation: number, age:number): PlayerGoalkeeper{
    // discount player attributes further from prime
    const ageDiscount = Math.abs(age - 28);
    // generate attribute means from reputation
    const averageGKP = Math.floor(reputation ** 0.99);
    const averagePHY = Math.floor(reputation ** 0.98);
    // generated attributes from means
    const generatedDIV = generateRandomAttribute(averageGKP, 20) - ageDiscount;
    const generatedHAN = generateRandomAttribute(averageGKP, 20) - ageDiscount;
    const generatedREF = generateRandomAttribute(averageGKP, 20) - ageDiscount;
    const generatedPHY = generateRandomAttribute(averagePHY, 25) - ageDiscount;
    const GK = new PlayerGoalkeeper(team, firstName('male'), lastName(), age, {diving: generatedDIV, handling: generatedHAN, reflexes: generatedREF, physical: generatedPHY});
    return GK;
}

function generateDefender(team: Team | undefined,reputation: number, age:number){
    // discount player attributes further from prime
    const ageDiscount = Math.abs(age - 27);
    // generate attribute means from reputation
    const averageDEF = Math.floor(reputation ** 0.99) - ageDiscount;
    const averagePLY = Math.floor(averageDEF * (3/4) - ageDiscount)
    const averageATT = Math.floor(averageDEF/2) - ageDiscount;
    const averagePHY = Math.floor(reputation ** 0.98) - ageDiscount;
    // generated attributes from means
    const generatedDEF = generateRandomAttribute(averageDEF, 20)
    const generatedPLY = generateRandomAttribute(averagePLY, 20)
    const generatedATT = generateRandomAttribute(averageATT, 20)
    const generatedPHY = generateRandomAttribute(averagePHY, 25);
    const DF = new PlayerOutfield(team, firstName('male'), lastName(), age,"DF",{attacking: generatedATT, playmaking: generatedPLY, defending: generatedDEF, physical: generatedPHY});
    return DF;
}

function generateMidfielder(team: Team | undefined,reputation: number, age:number){
    // discount player attributes further from prime
    const ageDiscount = Math.abs(age - 27);
    // generate attribute means from reputation
    const averageATT = Math.floor(reputation ** 0.94) - ageDiscount;
    const averagePLY = Math.floor(reputation ** 0.97) - ageDiscount;
    const averageDEF = Math.floor(reputation ** 0.94) - ageDiscount;
    const averagePHY = Math.floor(reputation ** 0.98) - ageDiscount;
    // generated attributes from means
    const generatedATT = generateRandomAttribute(averageATT, 20)
    const generatedPLY = generateRandomAttribute(averagePLY, 20)
    const generatedDEF = generateRandomAttribute(averageDEF, 20)
    const generatedPHY = generateRandomAttribute(averagePHY, 25);
    const MF = new PlayerOutfield(team, firstName('male'), lastName(), age, "MF",{attacking: generatedATT, playmaking: generatedPLY, defending: generatedDEF, physical: generatedPHY});
    return MF;
}

function generateForward(team: Team | undefined,reputation: number, age:number){
    // discount player attributes further from prime
    const ageDiscount = Math.abs(age - 27);
    // generate attribute means from reputation
    const averageATT = Math.floor(reputation ** 0.99) - ageDiscount;
    const averagePLY = Math.floor(averageATT * (3/4)) - ageDiscount;
    const averageDEF = Math.floor(averageATT/2) - ageDiscount;
    const averagePHY = Math.floor(reputation ** 0.98) - ageDiscount;
    // generate attributes from means
    const generatedATT = generateRandomAttribute(averageATT, 20)
    const generatedPLY = generateRandomAttribute(averagePLY, 20)
    const generatedDEF = generateRandomAttribute(averageDEF, 20)
    const generatedPHY = generateRandomAttribute(averagePHY, 25);
    //create player
    const FW = new PlayerOutfield(team, firstName('male'), lastName(), age, "FW",{attacking: generatedATT, playmaking: generatedPLY, defending: generatedDEF, physical: generatedPHY});
    return FW;
}

function generateRandomAttribute(average: number, variability: number): number {
    const min = Math.max(1, average - variability);
    const max = Math.min(99, average + variability);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function generateRandomAge(): number{
    return Math.floor(Math.random() * (17)) + 18;
}