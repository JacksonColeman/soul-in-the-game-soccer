import {Player, PlayerGoalkeeper, PlayerOutfield} from './Player'

export class Team {
    constructor(
        public id: number,
        public name: string, 
        public stadium: string,
        public reputation: number,
        public roster: Player[],
        public standingsInfo: {wins:number, losses:number, draws:number, goalsFor:number, goalsAgainst:number} =
        {wins:0, losses:0, draws:0, goalsFor:0, goalsAgainst:0}
    ) {
    }

    user = false;

    resetStandingsInfo(): void{
        this.standingsInfo = {wins:0, losses:0, draws:0, goalsFor:0, goalsAgainst:0}
    }

    newYear(year:number): void{
        this.resetStandingsInfo();
        for (const player of this.roster){
            player.progress(year);
        }
    }

    positionQuotas: { [position: string]: number } = {
        DF: 4,
        MF: 3,
        FW: 3,
      };

    get startingLineup(): Player[] {

  const sortedPlayers = this.roster.sort((a, b) => b.overallRating - a.overallRating);
  const lineup: Player[] = [];

  // Select the goalkeeper
  const goalkeeper = sortedPlayers.find(player => player.position === 'GK');
  if (goalkeeper) {
    lineup.push(goalkeeper);
  }

  const positionQuotas = this.positionQuotas;

  const filledPositions: { [position: string]: number } = {
    GK: 1,
    DF: 0,
    MF: 0,
    FW: 0,
  };

  // Select players for each position until the lineup has 11 players
  for (const player of sortedPlayers) {
    if (lineup.length >= 11) {
      break;
    }

    if (player !== goalkeeper) {
      if (filledPositions[player.position] < positionQuotas[player.position]) {
        lineup.push(player);
        filledPositions[player.position]++;
      }
    }
  }

  return lineup;
}    
      
    // standings info

    get points():number{ 
        return this.standingsInfo.wins*3 + this.standingsInfo.draws;
    }

    get goalDiff():number{
        return this.standingsInfo.goalsFor - this.standingsInfo.goalsAgainst;
    }

    addPlayer(player: Player): void {
        this.roster.push(player);
      }

    get teamAttackingTotal(): number{
        let sum = 0;
        for (const player of this.startingLineup){
            if (player.position == "GK"){
                0;
            }
            if (player.position == "DF"){
                sum += player.attributes.attacking * 0.125;
            }
            if (player.position == "MF"){
                sum += player.attributes.attacking * 0.5;
            }
            if (player.position == "FW"){
                sum += player.attributes.attacking * 1;
            }
        }
        return sum;
    }

    get teamPlaymakingTotal(): number{
        let sum = 0;
        for (const player of this.startingLineup){
            if (player.position == "GK"){
                0;
            }
            if (player.position == "DF"){
                sum += player.attributes.playmaking * 0.25;
            }
            if (player.position == "MF"){
                sum += player.attributes.playmaking * 1;
            }
            if (player.position == "FW"){
                sum += player.attributes.playmaking * 0.5;
            }
        }
        return sum;
    }

    get teamDefenseTotal(): number{
        let sum = 0;
        for (const player of this.startingLineup){
            if (player instanceof PlayerGoalkeeper){
                sum += player.goalkeeping * 2;
            }
            if (player.position == "DF"){
                sum += player.attributes.defending * 1;
            }
            if (player.position == "MF"){
                sum += player.attributes.defending * 0.5;
            }
            if (player.position == "FW"){
                sum += player.attributes.defending * 0.125;
            }
        }
        return sum;
    }

    get teamPhysicalTotal(): number{
        let sum = 0;
        for (const player of this.startingLineup){
            if (player instanceof PlayerOutfield){
                sum += player.attributes.physical;
            }
        }
        return sum;
    }

    get startingGoalkeeper(): PlayerGoalkeeper {
        for (const player of this.startingLineup) {
          if (player instanceof PlayerGoalkeeper) {
            return player;
          }
        }
        throw new Error("No starting goalkeeper found"); // Throw an error if no goalkeeper is found
      }

    // teamOffenseRatio(league: League): number{
    //     return (this.teamOffenseTotal / league.averageOffense) ** 2;
    // }

    // teamDefenseRatio(league: League): number{
    //     return (league.averageDefense / this.teamDefenseTotal) ** 2;
    // }
    
}
