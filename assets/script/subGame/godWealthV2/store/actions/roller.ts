import { default as reduxAct } from "redux-act";
import { RollerStatus } from "../../type";

export type InitStateType = {
  rollerStatus: RollerStatus;
  isSpeed: boolean;
};
export const initState: InitStateType = {
  rollerStatus: RollerStatus.END,
  isSpeed: false
};
export enum ActionTypes {
  GODWEALTHV2_UPDATE_ROLLER_STATUS = "GODWEALTHV2_UPDATE_ROLLER_STATUS",
  GODWEALTHV2_UPDATE_SPEED_STATUS = "GODWEALTHV2_UPDATE_SPEED_STATUS",
  GODWEALTHV2_INIT_ROLLER = "GODWEALTHV2_INIT_ROLLER"
}

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.GODWEALTHV2_UPDATE_ROLLER_STATUS
    ? { rollerStatus: RollerStatus }
    : A extends ActionTypes.GODWEALTHV2_UPDATE_SPEED_STATUS
    ? { isSpeed: boolean }
    : A extends ActionTypes.GODWEALTHV2_INIT_ROLLER
    ? { initState: InitStateType }
    : never;

export const updateRollerStatus = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_UPDATE_ROLLER_STATUS,
  (
    rollerStatus: RollerStatus
  ): ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_ROLLER_STATUS> => {
    return { rollerStatus };
  }
);

export const updateSpeedStatus = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_UPDATE_SPEED_STATUS,
  (
    isSpeed: boolean
  ): ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_SPEED_STATUS> => {
    return { isSpeed };
  }
);

export const initRoller = reduxAct.createAction(
  ActionTypes.GODWEALTHV2_INIT_ROLLER,
  (): ActionPayLoad<ActionTypes.GODWEALTHV2_INIT_ROLLER> => {
    return { initState };
  }
);
