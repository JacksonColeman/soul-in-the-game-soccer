import {League} from '../classes/League';
import {Universe, GameState } from '../classes/Universe'
import { generateTeams } from './GenerateTeams';


export default function generateUniverse(){
    console.log("generating universe...")
    const universe = new Universe();
    universe.gameState = GameState.Start;

    // generate all leagues
    for (let i = 1; i <=2; i++){
        const league = new League(i);
        league.teams = generateTeams(i);
        league.schedule = league.generateSchedule();
        universe.addLeague(league);
    }

    universe.saveUniverse();
    return universe;
}