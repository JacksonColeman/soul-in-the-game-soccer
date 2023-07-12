import { Formation } from "./Formations";
import { Mentality } from "../constants/mentalities";

export class Manager{
    constructor(public firstName: string, public lastName: string, public age:number, public preferredFormation: Formation, public mentality: Mentality){}
}