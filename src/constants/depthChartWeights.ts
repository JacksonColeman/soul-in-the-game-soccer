import { PlayerPosition } from "./positions";

export type DepthChartWeights = {
    [PlayerPosition: string]: {
      [depth: number]: number;
    };
  };
  
  // 442
  export const dcw442: DepthChartWeights = {
    [PlayerPosition.GK]: { 1: 1, 2: 0.5, 3: 0.33},
    [PlayerPosition.LB]: { 1: 1, 2: 0.5},
    [PlayerPosition.CB]: { 1: 1, 2: 1, 3: 0.5, 4: 0.33},
    [PlayerPosition.RB]: { 1: 1, 2: 0.5},
    [PlayerPosition.LWB]: {},
    [PlayerPosition.CDM]: {},
    [PlayerPosition.RWB]: {},
    [PlayerPosition.LM]: { 1: 1, 2: 0.5},
    [PlayerPosition.CM]: { 1: 1, 2: 1, 3: 0.5, 4: 0.33},
    [PlayerPosition.RM]: { 1: 1, 2: 0.5},
    [PlayerPosition.LW]: {},
    [PlayerPosition.CAM]: {},
    [PlayerPosition.RW]: {},
    [PlayerPosition.ST]: { 1: 1, 2: 1, 3: 0.5, 4: 0.33},
  };

  //4123
  export const dcw4123: DepthChartWeights = {
    [PlayerPosition.GK]: { 1: 1, 2: 0.5, 3: 0.33},
    [PlayerPosition.LB]: { 1: 1, 2: 0.5},
    [PlayerPosition.CB]: { 1: 1, 2: 1, 3: 0.5, 4: 0.33},
    [PlayerPosition.RB]: { 1: 1, 2: 0.5},
    [PlayerPosition.LWB]: {},
    [PlayerPosition.CDM]: {1: 1, 2:0.5},
    [PlayerPosition.RWB]: {},
    [PlayerPosition.LM]: {},
    [PlayerPosition.CM]: {1: 1, 2: 1, 3: 0.5, 4: 0.33},
    [PlayerPosition.RM]: {},
    [PlayerPosition.LW]: {1: 1, 2: 0.5},
    [PlayerPosition.CAM]: {},
    [PlayerPosition.RW]: {1: 1, 2: 0.5},
    [PlayerPosition.ST]: { 1: 1, 2: 0.5, 3: 0.33},
  };

  //4231
  export const dcw4231: DepthChartWeights = {
    [PlayerPosition.GK]: { 1: 1, 2: 0.5, 3: 0.33},
    [PlayerPosition.LB]: { 1: 1, 2: 0.5},
    [PlayerPosition.CB]: { 1: 1, 2: 1, 3: 0.5, 4: 0.33},
    [PlayerPosition.RB]: { 1: 1, 2: 0.5},
    [PlayerPosition.LWB]: {},
    [PlayerPosition.CDM]: {},
    [PlayerPosition.RWB]: {},
    [PlayerPosition.LM]: {},
    [PlayerPosition.CM]: { 1: 1, 2: 1, 3: 0.5, 4: 0.33},
    [PlayerPosition.RM]: {},
    [PlayerPosition.LW]: {1: 1, 2: 0.5},
    [PlayerPosition.CAM]: {1: 1, 2: 0.5},
    [PlayerPosition.RW]: {1: 1, 2: 0.5},
    [PlayerPosition.ST]: { 1: 1, 2: 0.5, 3: 0.33},
  };

  //352
  export const dcw352: DepthChartWeights = {
    [PlayerPosition.GK]: { 1:1, 2:0.5, 3:0.33},
    [PlayerPosition.LB]: {},
    [PlayerPosition.CB]: { 1:1, 2:1, 3:1, 4:0.5, 5:0.33},
    [PlayerPosition.RB]: {},
    [PlayerPosition.LWB]: {1:1, 2:0.5},
    [PlayerPosition.CDM]: {},
    [PlayerPosition.RWB]: {1:1, 2:0.5},
    [PlayerPosition.LM]: {},
    [PlayerPosition.CM]: {1:1, 2:1, 3:1, 4:0.5, 5:0.25},
    [PlayerPosition.RM]: {},
    [PlayerPosition.LW]: {},
    [PlayerPosition.CAM]: {},
    [PlayerPosition.RW]: {},
    [PlayerPosition.ST]: {1:1, 2:1, 3:0.5, 4:0.33},
  };