import { PlayerPosition } from "./positions";
import { Formation } from "../classes/Formations";
import {s442, s4123, s4231, s352} from '../constants/starterPlayerAmounts'
import { dcw442, dcw4123, dcw4231, dcw352 } from "./depthChartWeights";

const f4123 = {
    [PlayerPosition.GK]: 1,
    [PlayerPosition.LB]: 1,
    [PlayerPosition.LWB]: 0,
    [PlayerPosition.CB]: 2,
    [PlayerPosition.RB]: 1,
    [PlayerPosition.RWB]: 0,
    [PlayerPosition.LM]: 0,
    [PlayerPosition.CM]: 2,
    [PlayerPosition.RM]: 0,
    [PlayerPosition.CDM]: 1,
    [PlayerPosition.CAM]: 0,
    [PlayerPosition.LW]: 1,
    [PlayerPosition.RW]: 1,
    [PlayerPosition.ST]: 1,
  };

  const f442 = {
    [PlayerPosition.GK]: 1,
    [PlayerPosition.LB]: 1,
    [PlayerPosition.LWB]: 0,
    [PlayerPosition.CB]: 2,
    [PlayerPosition.RB]: 1,
    [PlayerPosition.RWB]: 0,
    [PlayerPosition.LM]: 1,
    [PlayerPosition.CM]: 2,
    [PlayerPosition.RM]: 1,
    [PlayerPosition.CDM]: 0,
    [PlayerPosition.CAM]: 0,
    [PlayerPosition.LW]: 0,
    [PlayerPosition.RW]: 0,
    [PlayerPosition.ST]: 2,
  };

  // const f41212narrow = {
  //   [PlayerPosition.GK]: 1,
  //   [PlayerPosition.LB]: 1,
  //   [PlayerPosition.LWB]: 0,
  //   [PlayerPosition.CB]: 2,
  //   [PlayerPosition.RB]: 1,
  //   [PlayerPosition.RWB]: 0,
  //   [PlayerPosition.LM]: 0,
  //   [PlayerPosition.CM]: 2,
  //   [PlayerPosition.RM]: 0,
  //   [PlayerPosition.CDM]: 1,
  //   [PlayerPosition.CAM]: 1,
  //   [PlayerPosition.LW]: 0,
  //   [PlayerPosition.RW]: 0,
  //   [PlayerPosition.ST]: 2,
  // };

  // const f41212wide = {
  //   [PlayerPosition.GK]: 1,
  //   [PlayerPosition.LB]: 1,
  //   [PlayerPosition.LWB]: 0,
  //   [PlayerPosition.CB]: 2,
  //   [PlayerPosition.RB]: 1,
  //   [PlayerPosition.RWB]: 0,
  //   [PlayerPosition.LM]: 1,
  //   [PlayerPosition.CM]: 0,
  //   [PlayerPosition.RM]: 1,
  //   [PlayerPosition.CDM]: 1,
  //   [PlayerPosition.CAM]: 1,
  //   [PlayerPosition.LW]: 0,
  //   [PlayerPosition.RW]: 0,
  //   [PlayerPosition.ST]: 2,
  // };

  // const f433 = {
  //   [PlayerPosition.GK]: 1,
  //   [PlayerPosition.LB]: 1,
  //   [PlayerPosition.LWB]: 0,
  //   [PlayerPosition.CB]: 2,
  //   [PlayerPosition.RB]: 1,
  //   [PlayerPosition.RWB]: 0,
  //   [PlayerPosition.LM]: 0,
  //   [PlayerPosition.CM]: 3,
  //   [PlayerPosition.RM]: 0,
  //   [PlayerPosition.CDM]: 0,
  //   [PlayerPosition.CAM]: 0,
  //   [PlayerPosition.LW]: 1,
  //   [PlayerPosition.RW]: 1,
  //   [PlayerPosition.ST]: 1,
  // };

  const f4231 = {
    [PlayerPosition.GK]: 1,
    [PlayerPosition.LB]: 1,
    [PlayerPosition.LWB]: 0,
    [PlayerPosition.CB]: 2,
    [PlayerPosition.RB]: 1,
    [PlayerPosition.RWB]: 0,
    [PlayerPosition.LM]: 0,
    [PlayerPosition.CM]: 2,
    [PlayerPosition.RM]: 0,
    [PlayerPosition.CDM]: 0,
    [PlayerPosition.CAM]: 1,
    [PlayerPosition.LW]: 1,
    [PlayerPosition.RW]: 1,
    [PlayerPosition.ST]: 1,
  };

  // const f343 = {
  //   [PlayerPosition.GK]: 1,
  //   [PlayerPosition.LB]: 0,
  //   [PlayerPosition.LWB]: 0,
  //   [PlayerPosition.CB]: 3,
  //   [PlayerPosition.RB]: 0,
  //   [PlayerPosition.RWB]: 0,
  //   [PlayerPosition.LM]: 1,
  //   [PlayerPosition.CM]: 2,
  //   [PlayerPosition.RM]: 1,
  //   [PlayerPosition.CDM]: 0,
  //   [PlayerPosition.CAM]: 0,
  //   [PlayerPosition.LW]: 1,
  //   [PlayerPosition.RW]: 1,
  //   [PlayerPosition.ST]: 1,
  // };

  const f352 = {
    // update when wingbacks added
    [PlayerPosition.GK]: 1,
    [PlayerPosition.LB]: 0,
    [PlayerPosition.LWB]: 1,
    [PlayerPosition.CB]: 3,
    [PlayerPosition.RB]: 0,
    [PlayerPosition.RWB]: 1,
    [PlayerPosition.LM]: 0,
    [PlayerPosition.CM]: 3,
    [PlayerPosition.RM]: 0,
    [PlayerPosition.CDM]: 0,
    [PlayerPosition.CAM]: 0,
    [PlayerPosition.LW]: 0,
    [PlayerPosition.RW]: 0,
    [PlayerPosition.ST]: 2,
  };

  // const f532 = {
  //   [PlayerPosition.GK]: 1,
  //   [PlayerPosition.LB]: 0,
  //   [PlayerPosition.LWB]: 1,
  //   [PlayerPosition.CB]: 3,
  //   [PlayerPosition.RB]: 0,
  //   [PlayerPosition.RWB]: 1,
  //   [PlayerPosition.LM]: 0,
  //   [PlayerPosition.CM]: 3,
  //   [PlayerPosition.RM]: 0,
  //   [PlayerPosition.CDM]: 0,
  //   [PlayerPosition.CAM]: 0,
  //   [PlayerPosition.LW]: 0,
  //   [PlayerPosition.RW]: 0,
  //   [PlayerPosition.ST]: 2,
  // };

const formationList: Formation[] = [];
let f = new Formation("4-4-2",f442, s442, dcw442)
formationList.push(f);
f = new Formation("4-1-2-3",f4123, s4123, dcw4123)
formationList.push(f);
f = new Formation("4-2-3-1",f4231, s4231, dcw4231)
formationList.push(f);
// f = new Formation("3-5-2",f352, s352, dcw352)
// formationList.push(f);

export {formationList};