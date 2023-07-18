import { PlayerPosition } from "../constants/positions";
import { DepthChartWeights } from "../constants/depthChartWeights";

type PositionAmounts = {
  [position in PlayerPosition]: number;
};

export class Formation {
  constructor(public name: string, public positionRequirements: PositionAmounts, public gameStartAmounts: PositionAmounts, public depthChartWeights: DepthChartWeights) {}
}

