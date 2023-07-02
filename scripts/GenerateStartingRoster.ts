import { Team } from "../classes/Team";
import { Player } from "../classes/Player";
import { generateGoalkeeper, generateDefender, generateMidfielder, generateForward} from "./GeneratePlayers";

export default function generateStartingRoster(team: Team): Player[]{
    const roster: Player[] = [];
    // goalkeepers
    const youthGK = generateGoalkeeper(team, team.reputation, 17,23);
    const primeGK = generateGoalkeeper(team, team.reputation, 24,30);
    const vetGK = generateGoalkeeper(team, team.reputation, 31,35);
    roster.push(youthGK, primeGK, vetGK);

    // defenders
    // youth defenders
    for (let i = 0; i < 2; i++){
        let youthDF = generateDefender(team, team.reputation, 17,23);
        roster.push(youthDF);
    }
    // prime defenders
    for (let i = 0; i < 4; i++){
        let primeDF = generateDefender(team, team.reputation, 24,30);
        roster.push(primeDF);
    }
    // vet defenders
    for (let i = 0; i < 2; i++){
        let vetDF = generateDefender(team, team.reputation, 31,35);
        roster.push(vetDF);
    }

    //midfielders
    // youth defenders
    for (let i = 0; i < 2; i++){
        let youthMF = generateMidfielder(team, team.reputation, 17,23);
        roster.push(youthMF);
    }
    // prime midfielders
    for (let i = 0; i < 4; i++){
        let primeMF = generateMidfielder(team, team.reputation, 24,30);
        roster.push(primeMF);
    }
    // vet midfielders
    for (let i = 0; i < 2; i++){
        let vetMF = generateMidfielder(team, team.reputation, 31,35);
        roster.push(vetMF);
    }

    // forwards
    // youth defenders
    for (let i = 0; i < 2; i++){
        let youthFW = generateForward(team, team.reputation, 17,23);
        roster.push(youthFW);
    }
    // prime forwards
    for (let i = 0; i < 2; i++){
        let primeFW = generateForward(team, team.reputation, 24,30);
        roster.push(primeFW);
    }
    // vet forwards
    for (let i = 0; i < 1; i++){
        let vetFW = generateForward(team, team.reputation, 31,35);
        roster.push(vetFW);
    }

    return roster;
}
