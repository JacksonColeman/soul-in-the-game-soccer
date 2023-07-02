import { Team } from "../classes/Team"
import { PlayerGoalkeeper, PlayerOutfield } from "../classes/Player";
import {firstName, lastName} from './GenerateNames';


function generateBoundedAge(min:number,max:number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateGoalkeeper(team: Team | undefined, reputation: number, ageMin:number, ageMax:number): PlayerGoalkeeper{
    // discount player attributes further from prime
    const age = generateBoundedAge(ageMin, ageMax);
    const ageDiscount = Math.abs(age - 28);
    // generate attribute means from reputation
    const averageGKP = Math.floor(reputation ** 0.99);
    const averagePHY = Math.floor(reputation ** 0.98);
    // generated attributes from means
    const generatedDIV = generateRandomAttribute(averageGKP, 20) - ageDiscount;
    const generatedHAN = generateRandomAttribute(averageGKP, 20) - ageDiscount;
    const generatedREF = generateRandomAttribute(averageGKP, 20) - ageDiscount;
    const generatedPHY = generateRandomAttribute(averagePHY, 25) - ageDiscount;
    const GK = new PlayerGoalkeeper(team, firstName('male'), lastName(), age, {diving: generatedDIV, handling: generatedHAN, reflexes: generatedREF, physical: generatedPHY});
    return GK;
}

export function generateDefender(team: Team | undefined,reputation: number, ageMin:number, ageMax:number){
    // discount player attributes further from prime
    const age = generateBoundedAge(ageMin, ageMax);
    const ageDiscount = Math.abs(age - 27);
    // generate attribute means from reputation
    const averageDEF = Math.floor(reputation ** 0.99) - ageDiscount;
    const averagePLY = Math.floor(averageDEF * (3/4) - ageDiscount)
    const averageATT = Math.floor(averageDEF/2) - ageDiscount;
    const averagePHY = Math.floor(reputation ** 0.98) - ageDiscount;
    // generated attributes from means
    const generatedDEF = generateRandomAttribute(averageDEF, 20)
    const generatedPLY = generateRandomAttribute(averagePLY, 20)
    const generatedATT = generateRandomAttribute(averageATT, 20)
    const generatedPHY = generateRandomAttribute(averagePHY, 25);
    const DF = new PlayerOutfield(team, firstName('male'), lastName(), age,"DF",{attacking: generatedATT, playmaking: generatedPLY, defending: generatedDEF, physical: generatedPHY});
    return DF;
}

export function generateMidfielder(team: Team | undefined,reputation: number, ageMin:number, ageMax:number){
    // discount player attributes further from prime
    const age = generateBoundedAge(ageMin, ageMax);
    const ageDiscount = Math.abs(age - 27);
    // generate attribute means from reputation
    const averageATT = Math.floor(reputation ** 0.94) - ageDiscount;
    const averagePLY = Math.floor(reputation ** 0.97) - ageDiscount;
    const averageDEF = Math.floor(reputation ** 0.94) - ageDiscount;
    const averagePHY = Math.floor(reputation ** 0.98) - ageDiscount;
    // generated attributes from means
    const generatedATT = generateRandomAttribute(averageATT, 20)
    const generatedPLY = generateRandomAttribute(averagePLY, 20)
    const generatedDEF = generateRandomAttribute(averageDEF, 20)
    const generatedPHY = generateRandomAttribute(averagePHY, 25);
    const MF = new PlayerOutfield(team, firstName('male'), lastName(), age, "MF",{attacking: generatedATT, playmaking: generatedPLY, defending: generatedDEF, physical: generatedPHY});
    return MF;
}

export function generateForward(team: Team | undefined,reputation: number, ageMin:number, ageMax:number){
    // discount player attributes further from prime
    const age = generateBoundedAge(ageMin, ageMax);
    const ageDiscount = Math.abs(age - 27);
    // generate attribute means from reputation
    const averageATT = Math.floor(reputation ** 0.99) - ageDiscount;
    const averagePLY = Math.floor(averageATT * (3/4)) - ageDiscount;
    const averageDEF = Math.floor(averageATT/2) - ageDiscount;
    const averagePHY = Math.floor(reputation ** 0.98) - ageDiscount;
    // generate attributes from means
    const generatedATT = generateRandomAttribute(averageATT, 20)
    const generatedPLY = generateRandomAttribute(averagePLY, 20)
    const generatedDEF = generateRandomAttribute(averageDEF, 20)
    const generatedPHY = generateRandomAttribute(averagePHY, 25);
    //create player
    const FW = new PlayerOutfield(team, firstName('male'), lastName(), age, "FW",{attacking: generatedATT, playmaking: generatedPLY, defending: generatedDEF, physical: generatedPHY});
    return FW;
}

function generateRandomAttribute(average: number, variability: number): number {
    const min = Math.max(1, average - variability);
    const max = Math.min(99, average + variability);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }