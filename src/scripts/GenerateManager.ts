import { Manager } from "../classes/Manager";
import { Formation } from "../classes/Formations";
import { formationList} from "../constants/formationList";
import { Mentality } from "../constants/mentalities";
import { firstName, lastName } from "./GenerateNames";

export function generateManager(): Manager{
    // random formation
    const formation = getRandomFormation();
    // random mentality
    const mentality = getRandomMentality();
    
    const age = Math.floor(Math.random()*36 + 35);
    const m = new Manager(firstName('male'), lastName(), age, formation, mentality);
    return m;
}

function getRandomMentality(): Mentality {
    const keys = Object.keys(Mentality) as Array<keyof typeof Mentality>;
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomMentality = Mentality[keys[randomIndex]];
    return randomMentality;
  }

  function getRandomFormation(): Formation {
    const formations = formationList;
    const randomIndex = Math.floor(Math.random() * formations.length);
    return formations[randomIndex];
  }