import { Team } from "../classes/Team";
import { Player } from "../classes/Player";
import { PlayerPosition } from "../constants/positions";
import { generatePlayer} from "./GeneratePlayers";

export default function generateStartingRoster(team: Team): Player[]{
    const roster: Player[] = [];
    const ability = (team.reputation + 100)/2 - 15;
    let player;

    // Goalkeepers
    player = generatePlayer(team, PlayerPosition.GK, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.GK, ability*.90 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.GK, ability*.80 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // Left backs
    player = generatePlayer(team, PlayerPosition.LB, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.LB, ability*.90 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // Right backs
    player = generatePlayer(team, PlayerPosition.RB, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.RB, ability*.90 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // Centre backs
    player = generatePlayer(team, PlayerPosition.CB, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.CB, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.CB, ability*.90 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.CB, ability*.80 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // CDM
    player = generatePlayer(team, PlayerPosition.CDM, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.CDM, ability*.90 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // LM
    player = generatePlayer(team, PlayerPosition.LM, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // RM
    player = generatePlayer(team, PlayerPosition.RM, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // CM
    player = generatePlayer(team, PlayerPosition.CM, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.CM, ability*.90 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // LW
    player = generatePlayer(team, PlayerPosition.LW, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // RW
    player = generatePlayer(team, PlayerPosition.RW, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // CAM
    player = generatePlayer(team, PlayerPosition.CAM, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.CAM, ability*.90 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    // ST
    player = generatePlayer(team, PlayerPosition.ST, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.ST, ability + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.ST, ability*.90 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);

    player = generatePlayer(team, PlayerPosition.ST, ability*.80 + Math.random() * 5 - 10, 17, 35);
    roster.push(player);


    return roster;
}
