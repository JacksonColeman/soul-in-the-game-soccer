import { Team } from "../classes/Team";
import { Player } from "../classes/Player";
import { PlayerPosition } from "../constants/positions";
import { generatePlayer} from "./GeneratePlayers";

export default function generateStartingRoster(team: Team): Player[]{
    const roster: Player[] = [];
    const ability = (team.reputation + 100)/2 - 10;
    let player;

    if (team.manager == null){
        throw new Error(`Team ${team.name} has no manager!`);
    }

    const gsa = team.manager.preferredFormation.gameStartAmounts;

    for (const position in gsa) {
        const times = gsa[position as PlayerPosition];
        for (let i = 0; i < times; i++) {
            player = generatePlayer(team, position as PlayerPosition, ability + Math.random() * 5 - 10, 17, 35)
            roster.push(player);
        }
    }
      
    return roster;
}
