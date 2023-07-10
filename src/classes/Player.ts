import { v4 as uuidv4 } from 'uuid';
import { Team } from './Team';
import { PlayerPosition } from '../constants/positions';
import { PlayerAttribute } from '../constants/attributes';
import { positionGProb, positionASTProb } from '../constants/statProbabilities';
import { getPositionFamiliarity } from '../constants/positionFamiliarities';
import { getOverallAttributeWeights } from '../constants/overallWeights';

export class Player {
  public id = uuidv4();
  public positionFamiliarity: Record<PlayerPosition, number>;

  constructor(
    public team: Team | undefined,
    public firstName: string,
    public lastName: string,
    public age: number,
    public position: PlayerPosition,
    public attributes: Record<PlayerAttribute, number>
  ) {
    this.positionFamiliarity = getPositionFamiliarity(this.position);
  }

  // injury/conditioning variables
  condition = 100;
  injured = false;
  injuryTime = 0;

  // stats
  stats: { matchesPlayed: number, goals: number, assists: number} = {
    matchesPlayed: 0,
    goals: 0,
    assists: 0
  }
  careerStats = {};

  // store position that player is playing at in lineup

  public fieldPosition: PlayerPosition | null = null;
  public updatePositionFamiliarity(position: PlayerPosition, change: number): void {
    this.positionFamiliarity[position] = Math.min(100, this.positionFamiliarity[position] + change);
  }

  progress(year:number): void {
    this.age += 1;
    year;
    // Unique operations for each subclass can be implemented here
  }

  advanceWeek(){
    this.condition = Math.floor(Math.min(100, this.condition+20));
    this.injuryTime -= 1;
    if (this.injuryTime <= 0){
      this.injured = false;
    }
  }

  // overall retrieval functions
  get overallRating(): number {
    let weightedAverage = 0;
    const attributeWeights = getOverallAttributeWeights(this.position);
  
    const weightedSum = Object.entries(attributeWeights).reduce((sum, [attribute, weight]) => {
      const attributeKey = attribute as PlayerAttribute; // Type assertion
      return sum + this.attributes[attributeKey] * weight;
    }, 0);
  
    const totalWeight = Object.values(attributeWeights).reduce((sum, weight) => sum + weight, 0);
    weightedAverage = weightedSum / totalWeight;
  
    return Math.min(99, Math.floor(weightedAverage) + 10);
  }

  overallAtPosition(position: PlayerPosition | undefined): number {
    if (position === undefined) {
      return 0;
    }
  
    if (this.position === PlayerPosition.GK && position !== PlayerPosition.GK) {
      return 0;
    }
  
    let weightedAverage = 0;
    const attributeWeights = getOverallAttributeWeights(position);
  
    const weightedSum = Object.entries(attributeWeights).reduce((sum, [attribute, weight]) => {
      const attributeKey = attribute as PlayerAttribute; // Type assertion
      return sum + this.attributes[attributeKey] * weight * (this.positionFamiliarity[position] / 100);
    }, 0);
  
    const totalWeight = Object.values(attributeWeights).reduce((sum, weight) => sum + weight, 0);
    weightedAverage = weightedSum / totalWeight;
  
    return Math.min(99, Math.floor(weightedAverage) + 10);
  }
  
  effectiveOverallAtPosition(position: PlayerPosition | undefined){
    if (this.injured){return 0}
    let OAP = this.overallAtPosition(position);
    let EOAP = OAP * (this.condition/100);
    return EOAP;
  }

  // probabilities of being the goalscorer or assister
  get goalScorerProb(){
    if (this.fieldPosition == null){return 0};
    return (this.attributes.Shooting * 2 + this.attributes.Speed * 1 + this.attributes.Mental*1 + this.attributes.Physical*0.5 + this.attributes.Passing*0.1) * positionGProb[this.fieldPosition];
  } 

  get assistProb(){
    if (this.fieldPosition == null){return 0};
    return (this.attributes.Passing * 1 + this.attributes.Mental*1 * this.attributes.Physical*0.5 + this.attributes.Speed*0.5) * positionASTProb[this.fieldPosition];

  } 

}

export class PlayerGoalkeeper extends Player {
  constructor(
    team: Team | undefined,
    firstName: string,
    lastName: string,
    age: number,
    attributes: Record<PlayerAttribute, number>,
  ) {
    super(team, firstName, lastName, age, PlayerPosition.GK, attributes);
  }

  stats: { matchesPlayed: number, goals: number, assists: number, goalsConceded: number, cleanSheets: number} = {
    matchesPlayed: 0,
    goals: 0,
    assists: 0,
    goalsConceded: 0,
    cleanSheets: 0
  }

  careerStats: { [year: number]: { teamName: string, matchesPlayed: number, goals: number, assists: number, goalsConceded: number, cleanSheets: number } } = {};

  progress(year:number): void {
    super.progress(year); // Increment age from the superclass
    const teamName = this.team?.name || '-';
    this.careerStats[year] = { teamName, ...this.stats };
    // reset stats
    this.stats = {
      matchesPlayed: 0,
      goals: 0,
      assists: 0,
      goalsConceded: 0,
      cleanSheets: 0
    }
  }
  
}

export class PlayerOutfield extends Player {
  constructor(
    team: Team | undefined,
    firstName: string,
    lastName: string,
    age: number,
    position: PlayerPosition,
    attributes: Record<PlayerAttribute, number>,
    
  ) {
    super(team, firstName, lastName, age, position, attributes);
  }

  stats: { matchesPlayed: number, goals: number, assists: number} = {
    matchesPlayed: 0,
    goals: 0,
    assists: 0,
  }

  careerStats: { [year: number]: { teamName: string, age: number, stats: any } } = {};

  progress(year:number): void {
    const teamName = this.team?.name || '-';
    const age = this.age;
    this.careerStats[year] = { teamName, age, stats: this.stats };
    super.progress(year); // Increment age from the superclass
    // reset stats
    this.stats = {
      matchesPlayed: 0,
      goals: 0,
      assists: 0
    }
  }
}


// function progressAttribute(attribute: Attribute, attributeValue: number, age: number){
//   // ages are that of upcoming year
//   if (age < 26){
//     // create an attribute development system
//     const developmentRate = {
//       [Attribute.Physical]: 1,
//       [Attribute.Attacking]: 1,
//       [Attribute.Defending]: 1,
//       [Attribute.Playmaking]: 1,
//       [Attribute.Diving]: 1,
//       [Attribute.Handling]: 1,
//       [Attribute.Reflexes]: 1,
//     };
//     const expectedDevelopment = 1 + (26 - age)/4;
//     const developmentMultiplier = Math.random() * 1.5 + 0.5;
//     const development = Math.floor(expectedDevelopment * developmentMultiplier * developmentRate[attribute]);
//     return Math.min(99, attributeValue + development);
//   }
//   if (age > 29){
//     const attributeDeclineRates = {
//       [Attribute.Physical]: 1.5,
//       [Attribute.Attacking]: 1,
//       [Attribute.Defending]: 1,
//       [Attribute.Playmaking]: 0.5,
//       [Attribute.Diving]: 0.5,
//       [Attribute.Handling]: 0.5,
//       [Attribute.Reflexes]: 0.5,
//     }

//     const expectedDecline = 1 + (age - 29)/2;
//     const declineMultiplier = Math.random() * 1.5 + 0.5;
//     const attributeDeclineRate = attributeDeclineRates[attribute];
//     const decline =  Math.floor(expectedDecline * declineMultiplier * attributeDeclineRate);
//     return Math.max(10, attributeValue - decline);
//   }
//   return attributeValue;
// }