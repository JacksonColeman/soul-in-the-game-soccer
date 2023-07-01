import { v4 as uuidv4 } from 'uuid';
import { Team } from './Team';

export class Player {
  public id = uuidv4();

  constructor(
    public team: Team | undefined,
    public firstName: string,
    public lastName: string,
    public age: number,
    public position: string,
    public attributes: any, // Generic attributes object
  ) {}

  stats: { matchesPlayed: number, goals: number, assists: number} = {
    matchesPlayed: 0,
    goals: 0,
    assists: 0
  }

  careerStats = {};

  progress(year:number): void {
    this.age += 1;
    // add stats to careerStats
    
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
    // Perform unique operations specific to Outfield subclass
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
      return(Math.floor(sum/200));
      
    } else if (this.position == "FW"){
      sum += this.attributes.defending * 12;
      sum += this.attributes.playmaking * 33;
      sum += this.attributes.attacking * 89;
      sum += this.attributes.physical * 40;
      return(Math.floor(sum/174));
    }
    return 0;
  }

  careerStats: { [year: number]: { teamName: string, matchesPlayed: number, goals: number, assists: number } } = {};

  progress(year:number): void {
    super.progress(year); // Increment age from the superclass
    const teamName = this.team?.name || '-';
    this.careerStats[year] = { teamName, ...this.stats };
    // reset stats
    this.stats = {
      matchesPlayed: 0,
      goals: 0,
      assists: 0
    }
    // Perform unique operations specific to Outfield subclass
    // ...
  }
}
