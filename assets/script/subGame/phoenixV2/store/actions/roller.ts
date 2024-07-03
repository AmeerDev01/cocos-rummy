import { default as reduxAct } from 'redux-act'
import { DirectionType, IconEffectType, RollerInfo, RollerStatus } from '../../type';
import config from '../../config';


export type InitStateType = {
  /**滚动状态 */
  rollerStatus: RollerStatus,
  /**是否加速 */
  isSpeed: boolean,
}
export const initState: InitStateType = {
  rollerStatus: RollerStatus.END,
  isSpeed: false,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  PHOENIXV2_UPDATE_ROLLER_STATUS = 'PHOENIXV2_UPDATE_ROLLER_STATUS',
  PHOENIXV2_UPDATE_SPEED_STATUS = 'PHOENIXV2_UPDATE_SPEED_STATUS',
  PHOENIXV2_INIT_ROLLER = 'PHOENIXV2_INIT_ROLLER',

}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.PHOENIXV2_UPDATE_ROLLER_STATUS ? { rollerStatus: RollerStatus } :
  A extends ActionTypes.PHOENIXV2_UPDATE_SPEED_STATUS ? { isSpeed: boolean } :
  A extends ActionTypes.PHOENIXV2_INIT_ROLLER ? { initState: InitStateType } :
  never;

export const updateRollerStatus = reduxAct.createAction(ActionTypes.PHOENIXV2_UPDATE_ROLLER_STATUS,
  (rollerStatus: RollerStatus): ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_ROLLER_STATUS> => {
    return { rollerStatus }
  })
export const updateSpeedStatus = reduxAct.createAction(ActionTypes.PHOENIXV2_UPDATE_SPEED_STATUS,
  (isSpeed: boolean): ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_SPEED_STATUS> => {
    return { isSpeed }
  })
export const initRoller = reduxAct.createAction(ActionTypes.PHOENIXV2_INIT_ROLLER,
  (): ActionPayLoad<ActionTypes.PHOENIXV2_INIT_ROLLER> => {
    return { initState }
  })
