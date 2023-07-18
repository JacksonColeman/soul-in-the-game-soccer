import { Universe } from "../classes/Universe"
import generateStartingRoster from "./GenerateStartingRoster"

export function generateRosters(universe: Universe): void{
    for (const team of universe.allTeams){
        team.roster = generateStartingRoster(team);
    }
}