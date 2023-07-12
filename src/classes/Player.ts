import { v4 as uuidv4 } from 'uuid';
import { Team } from './Team';
import { PlayerPosition } from '../constants/positions';
import { PlayerAttribute } from '../constants/attributes';
import { positionGProb, positionASTProb } from '../constants/statProbabilities';
import { getPositionFamiliarity } from '../constants/positionFamiliarities';
import { getOverallAttributeWeights } from '../constants/overallAttributeWeights';

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

  matchStats: {minutes: number, goals: number, assists: number} = {
    minutes: 0,
    goals: 0,
    assists: 0
  }

  // store position that player is playing at in lineup

  public fieldPosition: PlayerPosition | null = null;
  public updatePositionFamiliarity(position: PlayerPosition, change: number): void {
    this.positionFamiliarity[position] = Math.min(100, this.positionFamiliarity[position] + change);
  }

  progress(year:number): void {
    this.age += 1;
    this.condition = 100;
    this.injuryTime -= 20;
    if (this.injuryTime <= 0){
      this.injuryTime = 0;
      this.injured = false;
    }
    year;
    
    
  }

  advanceWeek(){
    this.condition = Math.floor(Math.min(100, this.condition+20));
    if (this.condition < 0){
      this.condition = 0;
    }
    //injury update
    if (this.injured){
      this.injuryTime -= 1;
      if (this.injuryTime <= 0){
        this.injured = false;
      }
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
      let attributeValue = this.attributes[attributeKey];
      
      if (attributeKey === PlayerAttribute.Mental) {
        attributeValue *= this.positionFamiliarity[position] / 100;
      }
    
      return sum + attributeValue * weight;
    }, 0);
  
    const totalWeight = Object.values(attributeWeights).reduce((sum, weight) => sum + weight, 0);
    weightedAverage = weightedSum / totalWeight;
  
    return Math.min(99, Math.floor(weightedAverage) + 10);
  }
  
  get effectiveOverallRating(){
    if (this.injured){return 0}
    let weightedAverage = 0;
    const attributeWeights = getOverallAttributeWeights(this.position);
  
    const weightedSum = Object.entries(attributeWeights).reduce((sum, [attribute, weight]) => {
      const attributeKey = attribute as PlayerAttribute; // Type assertion
      
      return sum + this.attributes[attributeKey] * weight * (this.condition/100);
    }, 0);
  
    const totalWeight = Object.values(attributeWeights).reduce((sum, weight) => sum + weight, 0);
    weightedAverage = weightedSum / totalWeight;
  
    return Math.min(99, Math.floor(weightedAverage) + 10);
  }

  effectiveOverallAtPosition(position: PlayerPosition | undefined){
    if (this.injured){return 0}
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
      let attributeValue = this.attributes[attributeKey];
      
      if (attributeKey === PlayerAttribute.Mental) {
        attributeValue *= this.positionFamiliarity[position] / 100;
      }

      attributeValue *= (this.condition/100);
    
      return sum + attributeValue * weight;
    }, 0);
  
    const totalWeight = Object.values(attributeWeights).reduce((sum, weight) => sum + weight, 0);
    weightedAverage = weightedSum / totalWeight;
  
    return Math.min(99, Math.floor(weightedAverage) + 10);
  }

  // probabilities of being the goalscorer or assister
  get goalScorerProb(){
    if (this.fieldPosition == null){return 0};
    return (this.attributes.Shooting * 2 + this.attributes.Speed * 1 + this.attributes.Mental*1 + this.attributes.Physical*0.5 + this.attributes.Passing*0.1) * positionGProb[this.fieldPosition];
  } 

  get assistProb(){
    if (this.fieldPosition == null){return 0};
    return (this.attributes.Passing * 2 + this.attributes.Mental*1 + this.attributes.Physical*0.5 + this.attributes.Speed*0.5) * positionASTProb[this.fieldPosition];

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


function progressAttribute(attribute: PlayerAttribute, attributeValue: number, age: number){
  // ages are that of upcoming year
  if (age < 26){
    // create an attribute development system
    const developmentRate = {
      [PlayerAttribute.Defending]: 1,
      [PlayerAttribute.Mental]: 0.5,
      [PlayerAttribute.Passing]: 1,
      [PlayerAttribute.Physical]: 1,
      [PlayerAttribute.Shooting]: 1,
      [PlayerAttribute.Speed]: 1,
      // gk
      [PlayerAttribute.GKAgility]: 1,
      [PlayerAttribute.GKHandling]: 1,
      [PlayerAttribute.GKKicking]: 1,
      [PlayerAttribute.GKPositioning]: 1,
      [PlayerAttribute.GKReach]: 1,
      [PlayerAttribute.GKReflexes]: 1,
    };
    const expectedDevelopment = 1 + (26 - age)/4;
    const developmentMultiplier = Math.random() * 1.5 + 0.5;
    const development = Math.floor(expectedDevelopment * developmentMultiplier * developmentRate[attribute]);
    return Math.min(99, attributeValue + development);
  }
  if (age > 29){
    const attributeDeclineRates = {
      [PlayerAttribute.Defending]: 1,
      [PlayerAttribute.Mental]: 0,
      [PlayerAttribute.Passing]: 1,
      [PlayerAttribute.Physical]: 2,
      [PlayerAttribute.Shooting]: 1,
      [PlayerAttribute.Speed]: 2,
      [PlayerAttribute.GKAgility]: 0.5,
      [PlayerAttribute.GKHandling]: 0.5,
      [PlayerAttribute.GKKicking]: 0.5,
      [PlayerAttribute.GKPositioning]: 0.5,
      [PlayerAttribute.GKReach]: 0.5,
      [PlayerAttribute.GKReflexes]: 0.5,
    }

    const expectedDecline = 1 + (age - 29)/2;
    const declineMultiplier = Math.random() * 1.5 + 0.5;
    const attributeDeclineRate = attributeDeclineRates[attribute];
    const decline =  Math.floor(expectedDecline * declineMultiplier * attributeDeclineRate);
    return Math.max(10, attributeValue - decline);
  }
  return attributeValue;
}