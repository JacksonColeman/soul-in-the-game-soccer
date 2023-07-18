import {League} from '../classes/League';
import {Universe} from '../classes/Universe'
import { generateTeams } from './GenerateTeams';
import { GameState } from '../constants/gameStates';


export default function generateUniverse(userTeamID: number){
    console.log("generating universe...")
    const universe = new Universe();
    universe.gameState = GameState.Start;

    // generate all leagues
    for (let i = 1; i <= 4; i++){
        const league = new League(i);
        league.teams = generateTeams(league, userTeamID);
        league.schedule = league.generateSchedule();
        universe.addLeague(league);
    }

    universe.saveUniverse();
    return universe;
}