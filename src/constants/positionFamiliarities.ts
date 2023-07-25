import { PlayerPosition } from "./positions";

export const getPositionFamiliarity = (position: PlayerPosition): Record<PlayerPosition, number> => {
    const positionFamiliarity: Record<PlayerPosition, number> = {
      [PlayerPosition.GK]: 0,
      [PlayerPosition.LB]: 0,
      [PlayerPosition.CB]: 0,
      [PlayerPosition.RB]: 0,
      [PlayerPosition.LWB]: 0,
      [PlayerPosition.CDM]: 0,
      [PlayerPosition.RWB]: 0,
      [PlayerPosition.LM]: 0,
      [PlayerPosition.CM]: 0,
      [PlayerPosition.RM]: 0,
      [PlayerPosition.LW]: 0,
      [PlayerPosition.CAM]: 0,
      [PlayerPosition.RW]: 0,
      [PlayerPosition.ST]: 0,
    };

    positionFamiliarity[position] = 100;

    // Set familiarity for related positions based on the player's main position
    switch (position) {
      case PlayerPosition.LB: // first vertical row = -10, each additional row = -20, moving inside/outside = -10, other side = -5
        positionFamiliarity[PlayerPosition.LB] = 100;
        positionFamiliarity[PlayerPosition.CB] = 90;
        positionFamiliarity[PlayerPosition.RB] = 95; // -20 into midfield
        positionFamiliarity[PlayerPosition.LWB] = 90;
        positionFamiliarity[PlayerPosition.CDM] = 70;
        positionFamiliarity[PlayerPosition.RWB] = 85;
        positionFamiliarity[PlayerPosition.LM] = 70;
        positionFamiliarity[PlayerPosition.CM] = 60;
        positionFamiliarity[PlayerPosition.RM] = 65; // -20 into attacking mid
        positionFamiliarity[PlayerPosition.LW] = 50;
        positionFamiliarity[PlayerPosition.CAM] = 40;
        positionFamiliarity[PlayerPosition.RW] = 45; // - 20 into striker
        positionFamiliarity[PlayerPosition.ST] = 20;
        break;
      case PlayerPosition.RB:
        positionFamiliarity[PlayerPosition.LB] = 95;
        positionFamiliarity[PlayerPosition.CB] = 90;
        positionFamiliarity[PlayerPosition.RB] = 100;
        positionFamiliarity[PlayerPosition.LWB] = 85;
        positionFamiliarity[PlayerPosition.CDM] = 70;
        positionFamiliarity[PlayerPosition.RWB] = 90;
        positionFamiliarity[PlayerPosition.LM] = 65;
        positionFamiliarity[PlayerPosition.CM] = 60;
        positionFamiliarity[PlayerPosition.RM] = 70;
        positionFamiliarity[PlayerPosition.LW] = 45;
        positionFamiliarity[PlayerPosition.CAM] = 40;
        positionFamiliarity[PlayerPosition.RW] = 50;
        positionFamiliarity[PlayerPosition.ST] = 20;
        break;
      case PlayerPosition.CB:
        positionFamiliarity[PlayerPosition.LB] = 90;
        positionFamiliarity[PlayerPosition.CB] = 100;
        positionFamiliarity[PlayerPosition.RB] = 90;
        positionFamiliarity[PlayerPosition.LWB] = 80;
        positionFamiliarity[PlayerPosition.CDM] = 90;
        positionFamiliarity[PlayerPosition.RWB] = 80;
        positionFamiliarity[PlayerPosition.LM] = 60;
        positionFamiliarity[PlayerPosition.CM] = 70;
        positionFamiliarity[PlayerPosition.RM] = 60;
        positionFamiliarity[PlayerPosition.LW] = 40;
        positionFamiliarity[PlayerPosition.CAM] = 50;
        positionFamiliarity[PlayerPosition.RW] = 40;
        positionFamiliarity[PlayerPosition.ST] = 30;
        break;
      case PlayerPosition.LWB: // first vertical row = -10, each additional row = -20, moving inside/outside = -10, other side = -5
        positionFamiliarity[PlayerPosition.LB] = 90;
        positionFamiliarity[PlayerPosition.CB] = 80;
        positionFamiliarity[PlayerPosition.RB] = 85; // -20 into midfield
        positionFamiliarity[PlayerPosition.LWB] = 100;
        positionFamiliarity[PlayerPosition.CDM] = 90;
        positionFamiliarity[PlayerPosition.RWB] = 95;
        positionFamiliarity[PlayerPosition.LM] = 90;
        positionFamiliarity[PlayerPosition.CM] = 80;
        positionFamiliarity[PlayerPosition.RM] = 85; // -20 into attacking mid
        positionFamiliarity[PlayerPosition.LW] = 70;
        positionFamiliarity[PlayerPosition.CAM] = 60;
        positionFamiliarity[PlayerPosition.RW] = 65; // - 20 into striker
        positionFamiliarity[PlayerPosition.ST] = 40;
        break;
      case PlayerPosition.CDM:
        positionFamiliarity[PlayerPosition.LB] = 80;
        positionFamiliarity[PlayerPosition.CB] = 90;
        positionFamiliarity[PlayerPosition.RB] = 80;
        positionFamiliarity[PlayerPosition.LWB] = 90;
        positionFamiliarity[PlayerPosition.CDM] = 100;
        positionFamiliarity[PlayerPosition.RWB] = 90;
        positionFamiliarity[PlayerPosition.LM] = 80;
        positionFamiliarity[PlayerPosition.CM] = 90;
        positionFamiliarity[PlayerPosition.RM] = 80;
        positionFamiliarity[PlayerPosition.LW] = 60;
        positionFamiliarity[PlayerPosition.CAM] = 70;
        positionFamiliarity[PlayerPosition.RW] = 60;
        positionFamiliarity[PlayerPosition.ST] = 50;
        break;
      case PlayerPosition.RWB: // first vertical row = -10, each additional row = -20, moving inside/outside = -10, other side = -5
        positionFamiliarity[PlayerPosition.LB] = 85;
        positionFamiliarity[PlayerPosition.CB] = 80;
        positionFamiliarity[PlayerPosition.RB] = 90; // -20 into midfield
        positionFamiliarity[PlayerPosition.LWB] = 95;
        positionFamiliarity[PlayerPosition.CDM] = 90;
        positionFamiliarity[PlayerPosition.RWB] = 100;
        positionFamiliarity[PlayerPosition.LM] = 85;
        positionFamiliarity[PlayerPosition.CM] = 80;
        positionFamiliarity[PlayerPosition.RM] = 90; // -20 into attacking mid
        positionFamiliarity[PlayerPosition.LW] = 65;
        positionFamiliarity[PlayerPosition.CAM] = 60;
        positionFamiliarity[PlayerPosition.RW] = 70; // - 20 into striker
        positionFamiliarity[PlayerPosition.ST] = 40;
        break;
      case PlayerPosition.LM:
        positionFamiliarity[PlayerPosition.LB] = 70;
        positionFamiliarity[PlayerPosition.CB] = 60;
        positionFamiliarity[PlayerPosition.RB] = 65;
        positionFamiliarity[PlayerPosition.LWB] = 90;
        positionFamiliarity[PlayerPosition.CDM] = 80;
        positionFamiliarity[PlayerPosition.RWB] = 85;
        positionFamiliarity[PlayerPosition.LM] = 100;
        positionFamiliarity[PlayerPosition.CM] = 90;
        positionFamiliarity[PlayerPosition.RM] = 95;
        positionFamiliarity[PlayerPosition.LW] = 90;
        positionFamiliarity[PlayerPosition.CAM] = 80;
        positionFamiliarity[PlayerPosition.RW] = 85;
        positionFamiliarity[PlayerPosition.ST] = 60;
        break;
      case PlayerPosition.RM:
        positionFamiliarity[PlayerPosition.LB] = 65;
        positionFamiliarity[PlayerPosition.CB] = 60;
        positionFamiliarity[PlayerPosition.RB] = 70;
        positionFamiliarity[PlayerPosition.LWB] = 85;
        positionFamiliarity[PlayerPosition.CDM] = 80;
        positionFamiliarity[PlayerPosition.RWB] = 90;
        positionFamiliarity[PlayerPosition.LM] = 95;
        positionFamiliarity[PlayerPosition.CM] = 90;
        positionFamiliarity[PlayerPosition.RM] = 100;
        positionFamiliarity[PlayerPosition.LW] = 85;
        positionFamiliarity[PlayerPosition.CAM] = 80;
        positionFamiliarity[PlayerPosition.RW] = 90;
        positionFamiliarity[PlayerPosition.ST] = 60;
        break;
      // Add cases for other positions as needed
      case PlayerPosition.CM:
        positionFamiliarity[PlayerPosition.LB] = 60;
        positionFamiliarity[PlayerPosition.CB] = 70;
        positionFamiliarity[PlayerPosition.RB] = 60;
        positionFamiliarity[PlayerPosition.LWB] = 80;
        positionFamiliarity[PlayerPosition.CDM] = 90;
        positionFamiliarity[PlayerPosition.RWB] = 80;
        positionFamiliarity[PlayerPosition.LM] = 90;
        positionFamiliarity[PlayerPosition.CM] = 100;
        positionFamiliarity[PlayerPosition.RM] = 90;
        positionFamiliarity[PlayerPosition.LW] = 80;
        positionFamiliarity[PlayerPosition.CAM] = 90;
        positionFamiliarity[PlayerPosition.RW] = 80;
        positionFamiliarity[PlayerPosition.ST] = 70;
      break;
        case PlayerPosition.LW:
        positionFamiliarity[PlayerPosition.LB] = 50;
        positionFamiliarity[PlayerPosition.CB] = 40;
        positionFamiliarity[PlayerPosition.RB] = 45;
        positionFamiliarity[PlayerPosition.LWB] = 70;
        positionFamiliarity[PlayerPosition.CDM] = 60;
        positionFamiliarity[PlayerPosition.RWB] = 65;
        positionFamiliarity[PlayerPosition.LM] = 90;
        positionFamiliarity[PlayerPosition.CM] = 80;
        positionFamiliarity[PlayerPosition.RM] = 85;
        positionFamiliarity[PlayerPosition.LW] = 100;
        positionFamiliarity[PlayerPosition.CAM] = 90;
        positionFamiliarity[PlayerPosition.RW] = 95;
        positionFamiliarity[PlayerPosition.ST] = 80;
        break;
      case PlayerPosition.RW:
        positionFamiliarity[PlayerPosition.LB] = 45;
        positionFamiliarity[PlayerPosition.CB] = 40;
        positionFamiliarity[PlayerPosition.RB] = 50;
        positionFamiliarity[PlayerPosition.LWB] = 65;
        positionFamiliarity[PlayerPosition.CDM] = 60;
        positionFamiliarity[PlayerPosition.RWB] = 70;
        positionFamiliarity[PlayerPosition.LM] = 85;
        positionFamiliarity[PlayerPosition.CM] = 80;
        positionFamiliarity[PlayerPosition.RM] = 90;
        positionFamiliarity[PlayerPosition.LW] = 95;
        positionFamiliarity[PlayerPosition.CAM] = 90;
        positionFamiliarity[PlayerPosition.RW] = 100;
        positionFamiliarity[PlayerPosition.ST] = 80;
        break;
      case PlayerPosition.CAM:
          positionFamiliarity[PlayerPosition.LB] = 40;
          positionFamiliarity[PlayerPosition.CB] = 50;
          positionFamiliarity[PlayerPosition.RB] = 40;
          positionFamiliarity[PlayerPosition.LWB] = 60;
          positionFamiliarity[PlayerPosition.CDM] = 70;
          positionFamiliarity[PlayerPosition.RWB] = 60;
          positionFamiliarity[PlayerPosition.LM] = 80;
          positionFamiliarity[PlayerPosition.CM] = 90;
          positionFamiliarity[PlayerPosition.RM] = 80;
          positionFamiliarity[PlayerPosition.LW] = 90;
          positionFamiliarity[PlayerPosition.CAM] = 100;
          positionFamiliarity[PlayerPosition.RW] = 90;
          positionFamiliarity[PlayerPosition.ST] = 90;
        break;
        case PlayerPosition.ST:
          positionFamiliarity[PlayerPosition.LB] = 20;
          positionFamiliarity[PlayerPosition.CB] = 30;
          positionFamiliarity[PlayerPosition.RB] = 20;
          positionFamiliarity[PlayerPosition.LWB] = 40;
          positionFamiliarity[PlayerPosition.CDM] = 50;
          positionFamiliarity[PlayerPosition.RWB] = 40;
          positionFamiliarity[PlayerPosition.LM] = 60;
          positionFamiliarity[PlayerPosition.CM] = 70;
          positionFamiliarity[PlayerPosition.RM] = 60;
          positionFamiliarity[PlayerPosition.LW] = 80;
          positionFamiliarity[PlayerPosition.CAM] = 90;
          positionFamiliarity[PlayerPosition.RW] = 80;
          positionFamiliarity[PlayerPosition.ST] = 100;
        break;
      // Add cases for other positions as needed
    }

    return positionFamiliarity;
  }