import { Team } from "../classes/Team"
import { Player, PlayerGoalkeeper, PlayerOutfield } from "../classes/Player";
import data from "../src/data/teams.json"
import foobar from "foobar.js"

export function generateTeams(): Team[]{
    const teams: Team[] = [];
    let teamId = 0;
    data.map(teamInfo => {
        teamId++;
        const repAdjust = Math.floor(Math.random() * 7) - 3;
        let n = new Team(teamId, teamInfo.name,teamInfo.stadium,teamInfo.reputation + repAdjust,[])
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
    const GK = new PlayerGoalkeeper(foobar.firstName('male'), foobar.lastName(), GKage, 0,0,{goalkeeping: generatedGKP});
    return GK;
}

function generateDefender(reputation: number){
    const averageDEF = Math.floor(reputation ** 0.99);
    const averageATT = Math.floor(averageDEF/2);
    const generatedDEF = generateRandomAttribute(averageDEF, 10)
    const generatedATT = generateRandomAttribute(averageATT, 10)
    const DFage = generateRandomAge();
    const DF = new PlayerOutfield(foobar.firstName('male'), foobar.lastName(), DFage,"DF",0,0, {attacking: generatedATT, defending: generatedDEF});
    return DF;
}

function generateMidfielder(reputation: number){
    const averageATT = Math.floor(reputation ** 0.95);
    const averageDEF = Math.floor(reputation ** 0.95);
    const generatedATT = generateRandomAttribute(averageATT, 10)
    const generatedDEF = generateRandomAttribute(averageDEF, 10)
    const MFage = generateRandomAge();
    const MF = new PlayerOutfield(foobar.firstName('male'), foobar.lastName(), MFage, "MF",0,0, {attacking: generatedATT, defending: generatedDEF});
    return MF;
}

function generateForward(reputation: number){
    const averageATT = Math.floor(reputation ** 0.99);
    const averageDEF = Math.floor(averageATT/2);
    const generatedATT = generateRandomAttribute(averageATT, 10)
    const generatedDEF = generateRandomAttribute(averageDEF, 10)
    const FWage = generateRandomAge();
    const FW = new PlayerOutfield(foobar.firstName('male'), foobar.lastName(), FWage, "FW",0,0, {attacking: generatedATT, defending: generatedDEF});
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