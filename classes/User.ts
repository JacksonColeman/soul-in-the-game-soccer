import {Team} from './Team'

enum Difficulty {
    Standard = "Standard",
    Hard = "Hard",
  }
  
  class User {
    name: string;
    selectedTeam: Team; // Replace 'any' with the appropriate type for the selected team
    difficulty: Difficulty;
  
    constructor(name: string, selectedTeam: any, difficulty: Difficulty) {
      this.name = name;
      this.selectedTeam = selectedTeam;
      this.difficulty = difficulty;
    }
  }
  
  export default User;