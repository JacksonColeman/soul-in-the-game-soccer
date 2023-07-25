import { Team } from "../classes/Team";
import { Player } from "../classes/Player";
import { PlayerPosition } from "../constants/positions";
import { generatePlayer} from "./GeneratePlayers";

export default function generateStartingRoster(team: Team): Player[]{
    const roster: Player[] = [];
    const ability = team.reputation ** 0.97;
    let player;

    if (team.manager == null){
        throw new Error(`Team ${team.name} has no manager!`);
    }

    const gsa = team.manager.preferredFormation.gameStartAmounts;

    for (const position in gsa) {
        const abilities = gsa[position as PlayerPosition];
        for (let i = 0; i < abilities.length; i++) {
            player = generatePlayer(team, position as PlayerPosition, (ability * abilities[i]) + Math.random() * 20 - 10, 17, 35)
            roster.push(player);
        }
    }
      
    return roster;
}
