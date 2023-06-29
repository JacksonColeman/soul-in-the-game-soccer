import { v4 as uuidv4 } from 'uuid';

export class Player {
  public id = uuidv4();

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public position: string,
    public goals: number,
    public matchesPlayed: number,
    public attributes: any // Generic attributes object
  ) {}

  progress(): void {
    this.age += 1;
    // Unique operations for each subclass can be implemented here
  }

  get rating(): number {
    return 0;
  }
}

export class PlayerGoalkeeper extends Player {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    goals: number,
    matchesPlayed: number,
    attributes: { goalkeeping: number }
  ) {
    super(firstName, lastName, age, 'GK', goals, matchesPlayed, attributes);
  }

  progress(): void {
    super.progress(); // Increment age from the superclass
    // Perform unique operations specific to Goalkeeper subclass
    // ...
  }

  get rating(): number {
    return this.attributes.goalkeeping;
  }
}

export class PlayerOutfield extends Player {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    position: string,
    goals: number,
    matchesPlayed: number,
    attributes: { attacking: number; defending: number }
  ) {
    super(firstName, lastName, age, position, goals, matchesPlayed, attributes);
  }

  progress(): void {
    super.progress(); // Increment age from the superclass
    // Perform unique operations specific to Outfield subclass
    // ...
  }
}
