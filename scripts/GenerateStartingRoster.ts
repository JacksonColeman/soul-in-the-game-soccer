import { Team } from "../classes/Team";
import { Player, PlayerPosition } from "../classes/Player";
import { generatePlayer} from "./GeneratePlayers";

export default function generateStartingRoster(team: Team): Player[]{
    const roster: Player[] = [];
    // goalkeepers
    const youthGK = generatePlayer(team, PlayerPosition.GK, team.reputation, 17,23);
    const primeGK = generatePlayer(team, PlayerPosition.GK, team.reputation, 24,30);
    const vetGK = generatePlayer(team, PlayerPosition.GK, team.reputation, 31,35);
    roster.push(youthGK, primeGK, vetGK);

    // defenders
    // youth defenders
    for (let i = 0; i < 2; i++){
        let youthDF = generatePlayer(team, PlayerPosition.DF, team.reputation, 17,23);
        roster.push(youthDF);
    }
    // prime defenders
    for (let i = 0; i < 4; i++){
        let primeDF = generatePlayer(team, PlayerPosition.DF, team.reputation, 24,30);
        roster.push(primeDF);
    }
    // vet defenders
    for (let i = 0; i < 2; i++){
        let vetDF = generatePlayer(team, PlayerPosition.DF, team.reputation, 31,35);
        roster.push(vetDF);
    }

    //midfielders
    // youth defenders
    for (let i = 0; i < 2; i++){
        let youthMF = generatePlayer(team, PlayerPosition.MF, team.reputation, 17,23);
        roster.push(youthMF);
    }
    // prime midfielders
    for (let i = 0; i < 4; i++){
        let primeMF = generatePlayer(team, PlayerPosition.MF, team.reputation, 24,30);
        roster.push(primeMF);
    }
    // vet midfielders
    for (let i = 0; i < 2; i++){
        let vetMF = generatePlayer(team, PlayerPosition.MF, team.reputation, 31,35);
        roster.push(vetMF);
    }

    // forwards
    // youth defenders
    for (let i = 0; i < 2; i++){
        let youthFW = generatePlayer(team, PlayerPosition.FW, team.reputation, 17,23);
        roster.push(youthFW);
    }
    // prime forwards
    for (let i = 0; i < 3; i++){
        let primeFW = generatePlayer(team, PlayerPosition.FW, team.reputation, 24,30);
        roster.push(primeFW);
    }
    // vet forwards
    for (let i = 0; i < 1; i++){
        let vetFW = generatePlayer(team, PlayerPosition.FW, team.reputation, 31,35);
        roster.push(vetFW);
    }

    return roster;
}
