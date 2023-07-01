import {Player} from './Player'

export class Goal {
    minute: number;
    scorer: Player;
    assister: Player | undefined;
    homeTeam?: boolean;
  
    constructor(minute: number, scorer: Player, assister: Player| undefined, homeTeam?: boolean) {
      this.minute = minute;
      this.scorer = scorer;
      this.assister = assister;
      this.homeTeam = homeTeam;
    }
  }