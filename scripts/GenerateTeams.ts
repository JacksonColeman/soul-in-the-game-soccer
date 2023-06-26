import { Team } from "../classes/Team"
import { Player, PlayerGoalkeeper, PlayerOutfield } from "../classes/Player";
import data from "../src/data/teams.json"
import foobar from "foobar.js"

export function generateTeams(): Team[]{
    const teams: Team[] = [];
    data.map(teamInfo => {
        const repAdjust = Math.floor(Math.random() * 7) - 3;
        let n = new Team(teamInfo.name,teamInfo.stadium,teamInfo.reputation + repAdjust,[])
        n.roster = generateRoster();
        teams.push(n);
    })
    console.log(teams);
    return teams;
}

export function generateRoster(): Player[]{
    const roster: Player[] = [];
    // goalkeepers
    for (let i = 0; i < 1; i++){
        let p = new PlayerGoalkeeper(foobar.firstName('male'), foobar.lastName(), 21, Math.floor(Math.random() * 11));
        roster.push(p);
    }
    // defenders
    for (let i = 0; i < 4; i++){
        let p = new PlayerOutfield(foobar.firstName('male'), foobar.lastName(), 21, "DF", Math.floor(Math.random() * 6), Math.floor(Math.random() * 11));
        roster.push(p);
    }
    // midfielders
    for (let i = 0; i < 4; i++){
        let p = new PlayerOutfield(foobar.firstName('male'), foobar.lastName(), 21, "MF", Math.floor(Math.random() * 9), Math.floor(Math.random() * 9));
        roster.push(p);
    }
    // forward
    for (let i = 0; i < 2; i++){
        let p = new PlayerOutfield(foobar.firstName('male'), foobar.lastName(), 21, "FW", Math.floor(Math.random() * 11), Math.floor(Math.random() * 6));
        roster.push(p);
    }

    return roster;
}

// each team should have 1 goalkeeper, 4 defenders, 4 midfielders, 2 forwards (just to start)