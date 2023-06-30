class User {
    name: string;
    teamID: number; // Replace 'any' with the appropriate type for the selected team
  
    constructor(name: string, teamID: number) {
      this.name = name;
      this.teamID = teamID;
    }
  }
  
  export default User;