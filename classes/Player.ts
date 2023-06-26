export class Player {
    constructor(
      public firstName: string,
      public lastName: string,
      public age: number,
      public position: string
    ) {}
  
    progress(): void {
      this.age += 1;
      // Unique operations for each subclass can be implemented here
    }
  }
  
  export class PlayerGoalkeeper extends Player {
    constructor(
      firstName: string,
      lastName: string,
      age: number,
      public goalkeeping: number,
    ) {
      super(firstName, lastName, age, "GK");
    }
  
    progress(): void {
      super.progress(); // Increment age from the superclass
      // Perform unique operations specific to Goalkeeper subclass
      // ...
    }
  }
  
  export class PlayerOutfield extends Player {
    constructor(
      firstName: string,
      lastName: string,
      age: number,
      position: string,
      // attributes
      public attacking: number,
      public defending: number,
    ) {
      super(firstName, lastName, age, position);
    }
  
    progress(): void {
      super.progress(); // Increment age from the superclass
      // Perform unique operations specific to Outfield subclass
      // ...
    }
  }