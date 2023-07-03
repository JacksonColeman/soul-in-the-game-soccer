import { Team } from "../classes/Team"
import { Player, PlayerGoalkeeper, PlayerOutfield, PlayerPosition } from "../classes/Player";
import {firstName, lastName} from './GenerateNames';

function generateBoundedAge(min:number,max:number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generatePlayer(team: Team | undefined, position: PlayerPosition, ability: number, ageMin:number, ageMax:number): Player {
    const age = generateBoundedAge(ageMin, ageMax);
    const ageDiscount = generateAgeDiscount(age);
    let player: Player | undefined = undefined;

    // goalkeeper
    if (position == PlayerPosition.GK){
        const averageGKP = Math.floor(ability ** 0.99) - ageDiscount;
        const averagePHY = Math.floor(ability ** 0.98) - ageDiscount;
        // generated attributes from means
        const generatedDIV = generateRandomAttribute(averageGKP , 20);
        const generatedHAN = generateRandomAttribute(averageGKP, 20) ;
        const generatedREF = generateRandomAttribute(averageGKP, 20) ;
        const generatedPHY = generateRandomAttribute(averagePHY, 20);
        player = new PlayerGoalkeeper(team, firstName('male'), lastName(), age, {diving: generatedDIV, handling: generatedHAN, reflexes: generatedREF, physical: generatedPHY});
    }
    // defender
    if (position == PlayerPosition.DF){
        const averageDEF = Math.floor(ability ** 0.99) - ageDiscount;
        const averagePLY = Math.floor(averageDEF * (3/4) - ageDiscount)
        const averageATT = Math.floor(averageDEF/2) - ageDiscount;
        const averagePHY = Math.floor(ability ** 0.98) - ageDiscount;
        // generated attributes from means
        const generatedDEF = generateRandomAttribute(averageDEF, 20)
        const generatedPLY = generateRandomAttribute(averagePLY, 20)
        const generatedATT = generateRandomAttribute(averageATT, 20)
        const generatedPHY = generateRandomAttribute(averagePHY, 20);
        player = new PlayerOutfield(team, firstName('male'), lastName(), age,position,{attacking: generatedATT, playmaking: generatedPLY, defending: generatedDEF, physical: generatedPHY});
    }
    // midfielder
    if (position == PlayerPosition.MF){
        const averageATT = Math.floor(ability ** 0.94) - ageDiscount;
        const averagePLY = Math.floor(ability ** 0.97) - ageDiscount;
        const averageDEF = Math.floor(ability ** 0.94) - ageDiscount;
        const averagePHY = Math.floor(ability ** 0.98) - ageDiscount;
        // generated attributes from means
        const generatedATT = generateRandomAttribute(averageATT, 20)
        const generatedPLY = generateRandomAttribute(averagePLY, 20)
        const generatedDEF = generateRandomAttribute(averageDEF, 20)
        const generatedPHY = generateRandomAttribute(averagePHY, 20);
        player = new PlayerOutfield(team, firstName('male'), lastName(), age, position,{attacking: generatedATT, playmaking: generatedPLY, defending: generatedDEF, physical: generatedPHY});    
    }
    // forward
    if (position == PlayerPosition.FW){
        const averageATT = Math.floor(ability ** 0.99) - ageDiscount;
        const averagePLY = Math.floor(averageATT * (3/4)) - ageDiscount;
        const averageDEF = Math.floor(averageATT/2) - ageDiscount;
        const averagePHY = Math.floor(ability ** 0.98) - ageDiscount;
        // generate attributes from means
        const generatedATT = generateRandomAttribute(averageATT, 20)
        const generatedPLY = generateRandomAttribute(averagePLY, 20)
        const generatedDEF = generateRandomAttribute(averageDEF, 20)
        const generatedPHY = generateRandomAttribute(averagePHY, 20);
        //create player
        player = new PlayerOutfield(team, firstName('male'), lastName(), age, position,{attacking: generatedATT, playmaking: generatedPLY, defending: generatedDEF, physical: generatedPHY});
    }

    if (!player) {
        throw new Error('Invalid player position');
      }
      
    return player;
}

function generateRandomAttribute(average: number, variability: number): number {
    const min = Math.max(1, average - variability);
    const max = Math.min(99, average + variability);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function generateAgeDiscount(age: number): number {
    let ageDiscount: number;
    if (age >= 25 && age <= 29) {
    ageDiscount = 0; // No discount between ages 25 and 29
    } else if (age < 25) {
    ageDiscount = 25 - age; // Positive age difference below 25
    } else {
    ageDiscount = age - 29; // Positive age difference beyond 29
    }
    ageDiscount = ageDiscount ** 1.4;
    return ageDiscount;
}