import { PlayerPosition } from "./positions";
import { PlayerAttribute } from "./attributes";

export function getOverallAttributeWeights(position: PlayerPosition): Record<PlayerAttribute, number> {
    switch (position) {
      case PlayerPosition.GK:
        return {
           // keeper attributes
          [PlayerAttribute.GKAgility]: 8,
          [PlayerAttribute.GKReflexes]: 8,
          [PlayerAttribute.GKHandling]: 8,
          [PlayerAttribute.GKReach]: 6,
          [PlayerAttribute.GKPositioning]: 5,
          [PlayerAttribute.GKKicking]: 5,
          // outfield attributes
          [PlayerAttribute.Speed]: 0,
          [PlayerAttribute.Physical]: 0,
          [PlayerAttribute.Shooting]: 0,
          [PlayerAttribute.Passing]: 0,
          [PlayerAttribute.Defending]: 0,
          [PlayerAttribute.Mental]: 0,
        };
      case PlayerPosition.LB:
      case PlayerPosition.RB:
        return {
          [PlayerAttribute.Speed]: 12,
          [PlayerAttribute.Physical]: 10,
          [PlayerAttribute.Shooting]: 2,
          [PlayerAttribute.Passing]: 6,
          [PlayerAttribute.Defending]: 7,
          [PlayerAttribute.Mental]: 9,
          // keeper attributes
          [PlayerAttribute.GKAgility]: 0,
          [PlayerAttribute.GKReflexes]: 0,
          [PlayerAttribute.GKHandling]: 0,
          [PlayerAttribute.GKReach]: 0,
          [PlayerAttribute.GKPositioning]: 0,
          [PlayerAttribute.GKKicking]: 0,
        };
      case PlayerPosition.LWB:
      case PlayerPosition.RWB:
        return {
          [PlayerAttribute.Speed]: 14,
          [PlayerAttribute.Physical]: 11,
          [PlayerAttribute.Shooting]: 2,
          [PlayerAttribute.Passing]: 8,
          [PlayerAttribute.Defending]: 5,
          [PlayerAttribute.Mental]: 7,
          // keeper attributes
          [PlayerAttribute.GKAgility]: 0,
          [PlayerAttribute.GKReflexes]: 0,
          [PlayerAttribute.GKHandling]: 0,
          [PlayerAttribute.GKReach]: 0,
          [PlayerAttribute.GKPositioning]: 0,
          [PlayerAttribute.GKKicking]: 0,
        };
      case PlayerPosition.LM:
      case PlayerPosition.RM:
        return {
          [PlayerAttribute.Speed]: 14,
          [PlayerAttribute.Physical]: 8,
          [PlayerAttribute.Shooting]: 4,
          [PlayerAttribute.Passing]: 11,
          [PlayerAttribute.Defending]: 3,
          [PlayerAttribute.Mental]: 8,
          // keeper attributes
          [PlayerAttribute.GKAgility]: 0,
          [PlayerAttribute.GKReflexes]: 0,
          [PlayerAttribute.GKHandling]: 0,
          [PlayerAttribute.GKReach]: 0,
          [PlayerAttribute.GKPositioning]: 0,
          [PlayerAttribute.GKKicking]: 0,
        };
      case PlayerPosition.LW:
      case PlayerPosition.RW:
        return {
          [PlayerAttribute.Speed]: 20,
          [PlayerAttribute.Physical]: 10,
          [PlayerAttribute.Shooting]: 4,
          [PlayerAttribute.Passing]: 10,
          [PlayerAttribute.Defending]: 3,
          [PlayerAttribute.Mental]: 8,
          // keeper attributes
          [PlayerAttribute.GKAgility]: 0,
          [PlayerAttribute.GKReflexes]: 0,
          [PlayerAttribute.GKHandling]: 0,
          [PlayerAttribute.GKReach]: 0,
          [PlayerAttribute.GKPositioning]: 0,
          [PlayerAttribute.GKKicking]: 0,
        };
      case PlayerPosition.CB:
        return {
          [PlayerAttribute.Speed]: 11,
          [PlayerAttribute.Physical]: 9,
          [PlayerAttribute.Shooting]: 2,
          [PlayerAttribute.Passing]: 4,
          [PlayerAttribute.Defending]: 13,
          [PlayerAttribute.Mental]: 12,
          // keeper attributes
          [PlayerAttribute.GKAgility]: 0,
          [PlayerAttribute.GKReflexes]: 0,
          [PlayerAttribute.GKHandling]: 0,
          [PlayerAttribute.GKReach]: 0,
          [PlayerAttribute.GKPositioning]: 0,
          [PlayerAttribute.GKKicking]: 0,
        };
      case PlayerPosition.CDM:
        return {
          [PlayerAttribute.Speed]: 10,
          [PlayerAttribute.Physical]: 9,
          [PlayerAttribute.Shooting]: 5,
          [PlayerAttribute.Passing]: 9,
          [PlayerAttribute.Defending]: 10,
          [PlayerAttribute.Mental]: 10,
          // keeper attributes
          [PlayerAttribute.GKAgility]: 0,
          [PlayerAttribute.GKReflexes]: 0,
          [PlayerAttribute.GKHandling]: 0,
          [PlayerAttribute.GKReach]: 0,
          [PlayerAttribute.GKPositioning]: 0,
          [PlayerAttribute.GKKicking]: 0,
        };
      case PlayerPosition.CM:
        return {
          [PlayerAttribute.Speed]: 11,
          [PlayerAttribute.Physical]: 10,
          [PlayerAttribute.Shooting]: 5,
          [PlayerAttribute.Passing]: 13,
          [PlayerAttribute.Defending]: 6,
          [PlayerAttribute.Mental]: 10,
          // keeper attributes
          [PlayerAttribute.GKAgility]: 0,
          [PlayerAttribute.GKReflexes]: 0,
          [PlayerAttribute.GKHandling]: 0,
          [PlayerAttribute.GKReach]: 0,
          [PlayerAttribute.GKPositioning]: 0,
          [PlayerAttribute.GKKicking]: 0,
        };
      case PlayerPosition.CAM:
        return {
          [PlayerAttribute.Speed]: 16,
          [PlayerAttribute.Physical]: 9,
          [PlayerAttribute.Shooting]: 6,
          [PlayerAttribute.Passing]: 11,
          [PlayerAttribute.Defending]: 3,
          [PlayerAttribute.Mental]: 9,
          // keeper attributes
          [PlayerAttribute.GKAgility]: 0,
          [PlayerAttribute.GKReflexes]: 0,
          [PlayerAttribute.GKHandling]: 0,
          [PlayerAttribute.GKReach]: 0,
          [PlayerAttribute.GKPositioning]: 0,
          [PlayerAttribute.GKKicking]: 0,
        };
      case PlayerPosition.ST:
        return {
          [PlayerAttribute.Speed]: 17,
          [PlayerAttribute.Physical]: 12,
          [PlayerAttribute.Shooting]: 10,
          [PlayerAttribute.Passing]: 6,
          [PlayerAttribute.Defending]: 2,
          [PlayerAttribute.Mental]: 11,
          // keeper attributes
          [PlayerAttribute.GKAgility]: 0,
          [PlayerAttribute.GKReflexes]: 0,
          [PlayerAttribute.GKHandling]: 0,
          [PlayerAttribute.GKReach]: 0,
          [PlayerAttribute.GKPositioning]: 0,
          [PlayerAttribute.GKKicking]: 0,
        };
      default:
        throw new Error('Invalid player position');
    }
  }
  