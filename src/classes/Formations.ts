import { PlayerPosition } from "../constants/positions";

type PositionRequirements = {
  [position in PlayerPosition]: number;
};

export class Formation {
  constructor(public name: string, public positionRequirements: PositionRequirements) {}
}

