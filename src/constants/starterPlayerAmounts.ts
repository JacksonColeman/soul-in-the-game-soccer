import { PlayerPosition } from "./positions"

type starterAbilities = {
    [PlayerPosition: string]: number[]
  };

export const s442: starterAbilities = {
    [PlayerPosition.GK]: [1, 0.75,0.67],
    [PlayerPosition.LB]: [1, 0.75],
    [PlayerPosition.CB]: [1, 1, 0.75, 0.67],
    [PlayerPosition.RB]: [1, 0.75],
    [PlayerPosition.LWB]: [],
    [PlayerPosition.CDM]: [0.75],
    [PlayerPosition.RWB]: [],
    [PlayerPosition.LM]: [1,0.75],
    [PlayerPosition.CM]: [1,1,0.75,0.67],
    [PlayerPosition.RM]: [1,0.75],
    [PlayerPosition.LW]: [0.75],
    [PlayerPosition.CAM]: [0.75],
    [PlayerPosition.RW]: [0.75],
    [PlayerPosition.ST]: [1,1,0.75],
}

export const s4123: starterAbilities = {
    [PlayerPosition.GK]: [1,0.75,0.67],
    [PlayerPosition.LB]: [1,0.75],
    [PlayerPosition.CB]: [1, 1, 0.75, 0.67],
    [PlayerPosition.RB]: [1,0.75],
    [PlayerPosition.LWB]: [],
    [PlayerPosition.CDM]: [1,0.75],
    [PlayerPosition.RWB]: [0.75],
    [PlayerPosition.LM]: [0.75],
    [PlayerPosition.CM]: [1,1,0.75],
    [PlayerPosition.RM]: [0.75],
    [PlayerPosition.LW]: [1],
    [PlayerPosition.CAM]: [0.75],
    [PlayerPosition.RW]: [1],
    [PlayerPosition.ST]: [1,0.75,0.67],
}

export const s4231: starterAbilities = {
    [PlayerPosition.GK]: [1,0.75,0.67],
    [PlayerPosition.LB]: [1,0.75],
    [PlayerPosition.CB]: [1, 1, 0.75, 0.67],
    [PlayerPosition.RB]: [1,0.75],
    [PlayerPosition.LWB]: [0.75],
    [PlayerPosition.CDM]: [0.75],
    [PlayerPosition.RWB]: [],
    [PlayerPosition.LM]: [0.75],
    [PlayerPosition.CM]: [1,1,0.75],
    [PlayerPosition.RM]: [0.75],
    [PlayerPosition.LW]: [1],
    [PlayerPosition.CAM]: [1,0.75],
    [PlayerPosition.RW]: [1],
    [PlayerPosition.ST]: [1,0.75,0.67],
}

export const s352: starterAbilities = {
    [PlayerPosition.GK]: [1,0.75,0.67],
    [PlayerPosition.LB]: [0.75],
    [PlayerPosition.CB]: [1, 1, 1, 0.75, 0.67],
    [PlayerPosition.RB]: [0.75],
    [PlayerPosition.LWB]: [1,0.75],
    [PlayerPosition.CDM]: [0.75],
    [PlayerPosition.RWB]: [1,0.75],
    [PlayerPosition.LM]: [0.75],
    [PlayerPosition.CM]: [1, 1, 0.75, 0.67],
    [PlayerPosition.RM]: [0.75],
    [PlayerPosition.LW]: [],
    [PlayerPosition.CAM]: [0.75],
    [PlayerPosition.RW]: [],
    [PlayerPosition.ST]: [1,1,0.75],
}