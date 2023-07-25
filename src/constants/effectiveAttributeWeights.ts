import { PlayerPosition } from "./positions";
import { PlayerAttribute } from "./attributes";
import { GKAttributesWithZeroValues } from "./generationAttributeWeights";

export const effectiveAttributeWeights = {
    [PlayerPosition.GK]: {
      [PlayerAttribute.GKAgility]: 100,
      [PlayerAttribute.GKHandling]: 100,
      [PlayerAttribute.GKKicking]: 63,
      [PlayerAttribute.GKReach]: 75,
      [PlayerAttribute.GKReflexes]: 100,
      [PlayerAttribute.GKPositioning]: 63,
      //
      [PlayerAttribute.Defending]: 0,
      [PlayerAttribute.Mental]: 0,
      [PlayerAttribute.Passing]: 0,
      [PlayerAttribute.Physical]: 0,
      [PlayerAttribute.Shooting]: 0,
      [PlayerAttribute.Speed]: 0,
    },
    [PlayerPosition.LB]: {
      [PlayerAttribute.Defending]: 76,
      [PlayerAttribute.Mental]: 98,
      [PlayerAttribute.Passing]: 65,
      [PlayerAttribute.Physical]: 109,
      [PlayerAttribute.Shooting]: 22,
      [PlayerAttribute.Speed]: 130,
      ...GKAttributesWithZeroValues
    },
    [PlayerPosition.RB]: {
      [PlayerAttribute.Defending]: 76,
      [PlayerAttribute.Mental]: 98,
      [PlayerAttribute.Passing]: 65,
      [PlayerAttribute.Physical]: 109,
      [PlayerAttribute.Shooting]: 22,
      [PlayerAttribute.Speed]: 130,
      ...GKAttributesWithZeroValues
    },
    [PlayerPosition.LWB]: {
      [PlayerAttribute.Defending]: 53,
      [PlayerAttribute.Mental]: 74,
      [PlayerAttribute.Passing]: 85,
      [PlayerAttribute.Physical]: 117,
      [PlayerAttribute.Shooting]: 21,
      [PlayerAttribute.Speed]: 149,
      ...GKAttributesWithZeroValues
    },
    [PlayerPosition.RWB]: {
      [PlayerAttribute.Defending]: 53,
      [PlayerAttribute.Mental]: 74,
      [PlayerAttribute.Passing]: 85,
      [PlayerAttribute.Physical]: 117,
      [PlayerAttribute.Shooting]: 21,
      [PlayerAttribute.Speed]: 149,
      ...GKAttributesWithZeroValues
    },
    [PlayerPosition.LM]: {
      [PlayerAttribute.Defending]: 31,
      [PlayerAttribute.Mental]: 83,
      [PlayerAttribute.Passing]: 115,
      [PlayerAttribute.Physical]: 83,
      [PlayerAttribute.Shooting]: 42,
      [PlayerAttribute.Speed]: 146,
      ...GKAttributesWithZeroValues,
    },
    [PlayerPosition.RM]: {
      [PlayerAttribute.Defending]: 31,
      [PlayerAttribute.Mental]: 83,
      [PlayerAttribute.Passing]: 115,
      [PlayerAttribute.Physical]: 83,
      [PlayerAttribute.Shooting]: 42,
      [PlayerAttribute.Speed]: 146,
      ...GKAttributesWithZeroValues,
    },
    [PlayerPosition.LW]: {
      [PlayerAttribute.Defending]: 27,
      [PlayerAttribute.Mental]: 73,
      [PlayerAttribute.Passing]: 91,
      [PlayerAttribute.Physical]: 91,
      [PlayerAttribute.Shooting]: 36,
      [PlayerAttribute.Speed]: 182,
      ...GKAttributesWithZeroValues,
    },
    [PlayerPosition.RW]: {
      [PlayerAttribute.Defending]: 27,
      [PlayerAttribute.Mental]: 73,
      [PlayerAttribute.Passing]: 91,
      [PlayerAttribute.Physical]: 91,
      [PlayerAttribute.Shooting]: 36,
      [PlayerAttribute.Speed]: 182,
      ...GKAttributesWithZeroValues,
    },
    [PlayerPosition.CB]: {
      [PlayerAttribute.Defending]: 127,
      [PlayerAttribute.Mental]: 118,
      [PlayerAttribute.Passing]: 39,
      [PlayerAttribute.Physical]: 88,
      [PlayerAttribute.Shooting]: 20,
      [PlayerAttribute.Speed]: 108,
      ...GKAttributesWithZeroValues,
    },
    [PlayerPosition.CDM]: {
      [PlayerAttribute.Defending]: 94,
      [PlayerAttribute.Mental]: 94,
      [PlayerAttribute.Passing]: 85,
      [PlayerAttribute.Physical]: 85,
      [PlayerAttribute.Shooting]: 47,
      [PlayerAttribute.Speed]: 94,
      ...GKAttributesWithZeroValues,
    },
    [PlayerPosition.CM]: {
      [PlayerAttribute.Defending]: 55,
      [PlayerAttribute.Mental]: 91,
      [PlayerAttribute.Passing]: 118,
      [PlayerAttribute.Physical]: 91,
      [PlayerAttribute.Shooting]: 45,
      [PlayerAttribute.Speed]: 100,
      ...GKAttributesWithZeroValues,
    },
    [PlayerPosition.CAM]: {
      [PlayerAttribute.Defending]: 28,
      [PlayerAttribute.Mental]: 83,
      [PlayerAttribute.Passing]: 102,
      [PlayerAttribute.Physical]: 83,
      [PlayerAttribute.Shooting]: 56,
      [PlayerAttribute.Speed]: 148,
      ...GKAttributesWithZeroValues,
    },
    [PlayerPosition.ST]: {
      [PlayerAttribute.Defending]: 17,
      [PlayerAttribute.Mental]: 95,
      [PlayerAttribute.Passing]: 52,
      [PlayerAttribute.Physical]: 103,
      [PlayerAttribute.Shooting]: 86,
      [PlayerAttribute.Speed]: 147,
      ...GKAttributesWithZeroValues,
    },
  };
  