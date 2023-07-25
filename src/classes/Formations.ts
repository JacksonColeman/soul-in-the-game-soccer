import { PlayerPosition } from "../constants/positions";
import { DepthChartWeights } from "../constants/depthChartWeights";

type PositionAmounts = {
  [position in PlayerPosition]: number;
};

export class Formation {
  constructor(public name: string, public positionRequirements: PositionAmounts, public gameStartAmounts: any, public depthChartWeights: DepthChartWeights) {}
}

