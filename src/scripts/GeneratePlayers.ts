import { Team } from "../classes/Team"
import { Player} from "../classes/Player";
import { PlayerPosition } from "../constants/positions";
import { PlayerAttribute } from "../constants/attributes";
import {firstName, lastName} from './GenerateNames';
import { generationAttributeWeights } from "../constants/generationAttributeWeights";


function generateNormalDistribution(mean: number, stdDev: number) {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return Math.round(mean + stdDev * z);
}

function generateBoundedAge(ageMin: number, ageMax: number): number {
    let age = 0;
    while (age < ageMin || age > ageMax){
      age = generateNormalDistribution(26,4)
    }
    return age;
}

export function generatePlayer(team: Team | undefined, position: PlayerPosition, ability: number, ageMin:number, ageMax:number): Player {
    const age = generateBoundedAge(ageMin, ageMax);
    ability = Math.floor(ability);
    let player: Player | undefined = undefined;

    const attributes = generatePlayerAttributes(ability, position, age);
    player = new Player(team, firstName('male'), lastName(), age, position, attributes);
    return player;
}
interface AttributeWeights {
    Defending: number;
    Passing: number;
    Physical: number;
    Speed: number;
    Shooting: number;
    Mental: number;
    GKAgility: number;
    GKReflexes: number;
    GKHandling: number;
    GKReach: number;
    GKPositioning: number;
    GKKicking: number;
  }
  
  function generatePlayerAttributes(ability: number, position: PlayerPosition, age:number){
    ability = Math.floor(ability);
    if (ability > 99){
        ability = 99;
    }
    ability -= Math.abs(27 - age) // rudimentary age discount

    const attributeWeights = generationAttributeWeights;
    const positionAttributeWeights = attributeWeights[position];
    const attributeValues: AttributeWeights = {} as AttributeWeights;
    const totalAttributePoints = ability * 6;
    let remainingPoints = totalAttributePoints;
  
    // Assign initial attribute values
    for (const attr in positionAttributeWeights) {
      if (positionAttributeWeights[attr as PlayerAttribute] > 0) {
        const attributeValue = Math.round(ability / 5);
        attributeValues[attr as PlayerAttribute] = attributeValue;
        remainingPoints -= attributeValue;
      } else {
        attributeValues[attr as PlayerAttribute] = 0;
      }
    }
  
    // Randomly distribute the remaining points
    while (remainingPoints > 0) {
        let totalWeightSum = 0;
        const weightedAttributes: Array<[PlayerAttribute, number]> = [];
      
        for (const attr in positionAttributeWeights) {
          if (positionAttributeWeights.hasOwnProperty(attr)) {
            const attributeValue = attributeValues[attr as PlayerAttribute] || 0;
            const weight = positionAttributeWeights[attr as PlayerAttribute];
            const remainingAttributePoints = 99 - attributeValue;
      
            if (remainingAttributePoints > 0) {
              totalWeightSum += weight;
              weightedAttributes.push([attr as PlayerAttribute, weight]);
            }
          }
        }
      
        if (totalWeightSum === 0) {
          break;
        }
      
        const randomWeight = Math.random() * totalWeightSum;
        let weightSum = 0;
      
        for (const [PlayerAttr, weight] of weightedAttributes) {
          weightSum += weight;
      
          if (randomWeight <= weightSum) {
            attributeValues[PlayerAttr] = attributeValues[PlayerAttr] + 1;
            remainingPoints -= 1;

            if (attributeValues[PlayerAttr] > 80) {
                remainingPoints -= 1;
            }

            if (attributeValues[PlayerAttr] > 90) {
                remainingPoints -= 2 ** (1+(attributeValues[PlayerAttr] - 90)/2);
            }

            break;
          }
        }
      }
  
    return attributeValues;
  }






