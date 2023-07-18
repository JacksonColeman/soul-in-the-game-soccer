import { Player } from "./Player";
import { Team } from "./Team";


export class Transfer{
    constructor(public player: Player, public buyingTeam: Team, public sellingTeam: Team, public fee: number){}

    processTransfer(){
        this.player.team = this.buyingTeam;
        this.buyingTeam.roster.push(this.player);
        this.sellingTeam.roster = this.sellingTeam.roster.filter(p => p != this.player);
        this.buyingTeam.transferBudget -= this.fee;
        this.sellingTeam.transferBudget += this.fee * 0.9; // selling team gets fee - 10% tax
        this.player.transferred = true;
    }
}