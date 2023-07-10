import { PlayerPosition } from "./positions"

export const positionGProb = {
    [PlayerPosition.GK]: 0,
    [PlayerPosition.LB]: 3,
    [PlayerPosition.CB]: 2,
    [PlayerPosition.RB]: 3,
    [PlayerPosition.CDM]: 2,
    [PlayerPosition.LM]: 4,
    [PlayerPosition.CM]: 4,
    [PlayerPosition.RM]: 4,
    [PlayerPosition.LW]: 7,
    [PlayerPosition.CAM]: 6,
    [PlayerPosition.RW]: 7,
    [PlayerPosition.ST]: 10,
  }
  
export const positionASTProb = {
    [PlayerPosition.GK]: 0.5,
    [PlayerPosition.LB]: 3,
    [PlayerPosition.CB]: 1,
    [PlayerPosition.RB]: 3,
    [PlayerPosition.CDM]: 6,
    [PlayerPosition.LM]: 6,
    [PlayerPosition.CM]: 6,
    [PlayerPosition.RM]: 6,
    [PlayerPosition.LW]: 8,
    [PlayerPosition.CAM]: 8,
    [PlayerPosition.RW]: 8,
    [PlayerPosition.ST]: 2,
  }
