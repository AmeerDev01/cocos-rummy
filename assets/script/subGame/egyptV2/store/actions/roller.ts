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
  EGYPTV2_UPDATE_ROLLER_STATUS = 'EGYPTV2_UPDATE_ROLLER_STATUS',
  EGYPTV2_UPDATE_SPEED_STATUS = 'EGYPTV2_UPDATE_SPEED_STATUS',
  EGYPTV2_INIT_ROLLER = 'EGYPTV2_ROLLER_QUIT_GAME',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.EGYPTV2_UPDATE_ROLLER_STATUS ? { rollerStatus: RollerStatus } :
  A extends ActionTypes.EGYPTV2_UPDATE_SPEED_STATUS ? { isSpeed: boolean } :
  A extends ActionTypes.EGYPTV2_INIT_ROLLER ? { initState: InitStateType } :
  never;

export const updateRollerStatus = reduxAct.createAction(ActionTypes.EGYPTV2_UPDATE_ROLLER_STATUS,
  (rollerStatus: RollerStatus): ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_ROLLER_STATUS> => {
    return { rollerStatus }
  })
export const updateSpeedStatus = reduxAct.createAction(ActionTypes.EGYPTV2_UPDATE_SPEED_STATUS,
  (isSpeed: boolean): ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_SPEED_STATUS> => {
    return { isSpeed }
  })
export const initRoller = reduxAct.createAction(ActionTypes.EGYPTV2_INIT_ROLLER,
  (): ActionPayLoad<ActionTypes.EGYPTV2_INIT_ROLLER> => {
    return { initState }
  })
