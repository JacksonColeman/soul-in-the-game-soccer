import { PlayerPosition } from "./positions";
import { PlayerAttribute } from "./attributes";

export const GKAttributesWithZeroValues = {
  [PlayerAttribute.GKAgility]: 0,
  [PlayerAttribute.GKHandling]: 0,
  [PlayerAttribute.GKKicking]: 0,
  [PlayerAttribute.GKPositioning]: 0,
  [PlayerAttribute.GKReach]: 0,
  [PlayerAttribute.GKReflexes]: 0,
}

const FBAttributes = {
  [PlayerAttribute.Defending]: 8,
  [PlayerAttribute.Mental]: 9,
  [PlayerAttribute.Passing]: 7,
  [PlayerAttribute.Physical]: 9,
  [PlayerAttribute.Shooting]: 2,
  [PlayerAttribute.Speed]: 9,
}

const WBAttributes = {
  [PlayerAttribute.Defending]: 6, //
  [PlayerAttribute.Mental]: 7, //
  [PlayerAttribute.Passing]: 7, //
  [PlayerAttribute.Physical]: 9, //
  [PlayerAttribute.Shooting]: 2, //
  [PlayerAttribute.Speed]: 9, //
}

const WMAttributes = {
  [PlayerAttribute.Defending]: 3,
  [PlayerAttribute.Mental]: 7,
  [PlayerAttribute.Passing]: 7,
  [PlayerAttribute.Physical]: 7,
  [PlayerAttribute.Shooting]: 4,
  [PlayerAttribute.Speed]: 9,
}

const WAttributes = {
  [PlayerAttribute.Defending]: 3,
  [PlayerAttribute.Mental]: 8,
  [PlayerAttribute.Passing]: 8,
  [PlayerAttribute.Physical]: 8,
  [PlayerAttribute.Shooting]: 6,
  [PlayerAttribute.Speed]: 9,
}

export const generationAttributeWeights: Record<PlayerPosition, Record<PlayerAttribute, number>> = {
  [PlayerPosition.GK]: {
    [PlayerAttribute.Defending]: 0,
    [PlayerAttribute.Mental]: 0,
    [PlayerAttribute.Passing]: 0,
    [PlayerAttribute.Physical]: 0,
    [PlayerAttribute.Shooting]: 0,
    [PlayerAttribute.Speed]: 0,
    [PlayerAttribute.GKAgility]: 1,
    [PlayerAttribute.GKHandling]: 1,
    [PlayerAttribute.GKKicking]: 1,
    [PlayerAttribute.GKPositioning]: 1,
    [PlayerAttribute.GKReach]: 1,
    [PlayerAttribute.GKReflexes]: 1,
  },
  [PlayerPosition.LB]: {
    ...FBAttributes,
    ...GKAttributesWithZeroValues,
  },
  // Add the remaining positions with aligned attribute weights
  [PlayerPosition.RB]: {
    ...FBAttributes,
    ...GKAttributesWithZeroValues,
  },
  [PlayerPosition.LWB]: {
    ...WBAttributes,
    ...GKAttributesWithZeroValues,
  },
  // Add the remaining positions with aligned attribute weights
  [PlayerPosition.RWB]: {
    ...WBAttributes,
    ...GKAttributesWithZeroValues,
  },
  [PlayerPosition.CB]: {
    [PlayerAttribute.Defending]: 9,
    [PlayerAttribute.Mental]: 8,
    [PlayerAttribute.Passing]: 4,
    [PlayerAttribute.Physical]: 7,
    [PlayerAttribute.Shooting]: 2,
    [PlayerAttribute.Speed]: 6,
    ...GKAttributesWithZeroValues,
  },
  [PlayerPosition.CDM]: {
    [PlayerAttribute.Defending]: 8,
    [PlayerAttribute.Mental]: 8,
    [PlayerAttribute.Passing]: 9,
    [PlayerAttribute.Physical]: 9,
    [PlayerAttribute.Shooting]: 4,
    [PlayerAttribute.Speed]: 7,
    ...GKAttributesWithZeroValues,
  },
  [PlayerPosition.LM]: {
    ...WMAttributes,
    ...GKAttributesWithZeroValues,
  },
  [PlayerPosition.RM]: {
    ...WMAttributes,
    ...GKAttributesWithZeroValues,
  },
  [PlayerPosition.CM]: {
    [PlayerAttribute.Defending]: 6,
    [PlayerAttribute.Mental]: 10,
    [PlayerAttribute.Passing]: 10,
    [PlayerAttribute.Physical]: 10,
    [PlayerAttribute.Shooting]: 5,
    [PlayerAttribute.Speed]: 9,
    ...GKAttributesWithZeroValues,
  },
  [PlayerPosition.LW]: {
    ...WAttributes,
    ...GKAttributesWithZeroValues,
  },
  [PlayerPosition.RW]: {
    ...WAttributes,
    ...GKAttributesWithZeroValues,
  },
  [PlayerPosition.CAM]: { 
    [PlayerAttribute.Defending]: 3, 
    [PlayerAttribute.Mental]: 9, 
    [PlayerAttribute.Passing]: 10, 
    [PlayerAttribute.Physical]: 9, 
    [PlayerAttribute.Shooting]: 6, 
    [PlayerAttribute.Speed]: 10, 
    ...GKAttributesWithZeroValues,
  },
  [PlayerPosition.ST]: { 
    [PlayerAttribute.Defending]: 2, 
    [PlayerAttribute.Mental]: 8, 
    [PlayerAttribute.Passing]: 6, 
    [PlayerAttribute.Physical]: 9, 
    [PlayerAttribute.Shooting]: 9, 
    [PlayerAttribute.Speed]: 9, 
    ...GKAttributesWithZeroValues,
  }
};


