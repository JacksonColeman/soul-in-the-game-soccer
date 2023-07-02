import { v4 as uuidv4 } from 'uuid';
import { Team } from './Team';

enum Attribute {
  Attacking = "attacking",
  Playmaking = "playmaking",
  Defending = "defending",
  Physical = "physical",
  Diving = "diving",
  Handling = "handling",
  Reflexes = "reflexes",
}
export class Player {
  public id = uuidv4();

  constructor(
    public team: Team | undefined,
    public firstName: string,
    public lastName: string,
    public age: number,
    public position: string,
    public attributes: any, // Generic attributes object
  ) {
  }



  stats: { matchesPlayed: number, goals: number, assists: number} = {
    matchesPlayed: 0,
    goals: 0,
    assists: 0
  }

  careerStats = {};

  progress(year:number): void {
    this.age += 1;
    year;
    // Unique operations for each subclass can be implemented here
  }

  get overallRating(): number {
    return 0;
  }
}

export class PlayerGoalkeeper extends Player {
  constructor(
    team: Team | undefined,
    firstName: string,
    lastName: string,
    age: number,
    attributes: { diving: number, handling: number, reflexes: number, physical: number },
  ) {
    super(team, firstName, lastName, age, 'GK', attributes);
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
    // Perform unique operations specific to Goalkeeper subclass
    //Attribute progression/regression
    this.attributes.diving = progressAttribute(Attribute.Diving, this.attributes.diving, this.age);
    this.attributes.handling = progressAttribute(Attribute.Handling, this.attributes.handling, this.age);
    this.attributes.reflexes = progressAttribute(Attribute.Reflexes, this.attributes.reflexes, this.age);
    this.attributes.physical = progressAttribute(Attribute.Physical, this.attributes.physical, this.age);
    // ...
  }

  get goalkeeping(): number {
    const gk = Math.floor((this.attributes.diving + this.attributes.handling + this.attributes.reflexes + this.attributes.physical) / 4);
    return gk;
  }

  get overallRating(): number {
    return this.goalkeeping;
  }

  
}

export class PlayerOutfield extends Player {
  constructor(
    team: Team | undefined,
    firstName: string,
    lastName: string,
    age: number,
    position: string,
    attributes: { attacking: number, playmaking: number, defending: number, physical: number },
    
  ) {
    super(team, firstName, lastName, age, position, attributes);
  }

  stats: { matchesPlayed: number, goals: number, assists: number} = {
    matchesPlayed: 0,
    goals: 0,
    assists: 0,
  }

  get overallRating(): number {
    let sum = 0;
    if (this.position == "DF"){
      sum += this.attributes.defending * 97;
      sum += this.attributes.playmaking * 17;
      sum += this.attributes.attacking * 11;
      sum += this.attributes.physical * 40;
      return(Math.floor(sum/165))
    
    } else if (this.position == "MF"){
      sum += this.attributes.defending * 48;
      sum += this.attributes.playmaking * 67;
      sum += this.attributes.attacking * 44;
      sum += this.attributes.physical * 40;
      return(Math.floor(sum/199));
      
    } else if (this.position == "FW"){
      sum += this.attributes.defending * 12;
      sum += this.attributes.playmaking * 33;
      sum += this.attributes.attacking * 89;
      sum += this.attributes.physical * 40;
      return(Math.floor(sum/174));
    }
    return 0;
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

    //Attribute progression/regression
    this.attributes.attacking = progressAttribute(Attribute.Attacking, this.attributes.attacking, this.age);
    this.attributes.playmaking = progressAttribute(Attribute.Playmaking, this.attributes.playmaking, this.age);
    this.attributes.defending = progressAttribute(Attribute.Defending, this.attributes.defending, this.age);
    this.attributes.physical = progressAttribute(Attribute.Physical, this.attributes.physical, this.age);
    // Perform unique operations specific to Outfield subclass
    // ...
  }
}

function progressAttribute(attribute: Attribute, attributeValue: number, age: number){
  // ages are that of upcoming year
  if (age < 26){
    // create an attribute development system
    const developmentRate = {
      [Attribute.Physical]: 0.5,
      [Attribute.Attacking]: 1,
      [Attribute.Defending]: 1,
      [Attribute.Playmaking]: 1,
      [Attribute.Diving]: 1,
      [Attribute.Handling]: 1,
      [Attribute.Reflexes]: 1,
    };
    // const yearsBeforePrime = 26-age;
    const development = Math.floor((Math.random()*4 - 1) * developmentRate[attribute]);
    return Math.min(99, attributeValue + development);
  }
  if (age > 29){
    const declineYear = age - 29;
    const meanDecline = (declineYear);
    const randomFactor = Math.random() * 0.5 + 0.75;
    const attributeDeclineRates = {
      [Attribute.Physical]: 1.5,
      [Attribute.Attacking]: 1,
      [Attribute.Defending]: 1,
      [Attribute.Playmaking]: 0.5,
      [Attribute.Diving]: 0.5,
      [Attribute.Handling]: 0.5,
      [Attribute.Reflexes]: 0.5,
    }
    const attributeDeclineRate = attributeDeclineRates[attribute];
    const decline =  Math.floor(meanDecline * randomFactor * attributeDeclineRate);
    return Math.max(10, attributeValue - decline);
  }
  return attributeValue;
}