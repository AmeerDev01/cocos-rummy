import { default as reduxAct } from 'redux-act'
import { DirectionType, IconEffectType, RollerInfo, RollerStatus } from '../../type';
import config from '../../config';


export type InitStateType = {
  /**滚动状态 */
  rollerStatus: RollerStatus,
  /**是否加速 */
  isSpeed: boolean,
  /**是否手动加速 */
  isManualSpeed: boolean,
}
export const initState: InitStateType = {
  rollerStatus: RollerStatus.END,
  isSpeed: false,
  isManualSpeed: false,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  THORV2_UPDATE_ROLLER_STATUS = 'THORV2_UPDATE_ROLLER_STATUS',
  THORV2_UPDATE_SPEED_STATUS = 'THORV2_UPDATE_SPEED_STATUS',
  THORV2_INIT_ROLLER = 'THORV2_ROLLER_QUIT_GAME',
  THORV2_UPDATE_MANUAL_SPEED_STATUS = 'THORV2_UPDATE_MANUAL_SPEED_STATUS',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.THORV2_UPDATE_ROLLER_STATUS ? { rollerStatus: RollerStatus } :
  A extends ActionTypes.THORV2_UPDATE_SPEED_STATUS ? { isSpeed: boolean } :
  A extends ActionTypes.THORV2_INIT_ROLLER ? { initState: InitStateType } :
  A extends ActionTypes.THORV2_UPDATE_MANUAL_SPEED_STATUS ? { isManualSpeed: boolean } :
  never;

export const updateRollerStatus = reduxAct.createAction(ActionTypes.THORV2_UPDATE_ROLLER_STATUS,
  (rollerStatus: RollerStatus): ActionPayLoad<ActionTypes.THORV2_UPDATE_ROLLER_STATUS> => {
    return { rollerStatus }
  })
export const updateSpeedStatus = reduxAct.createAction(ActionTypes.THORV2_UPDATE_SPEED_STATUS,
  (isSpeed: boolean): ActionPayLoad<ActionTypes.THORV2_UPDATE_SPEED_STATUS> => {
    return { isSpeed }
  })
export const updateManualSpeedStatus = reduxAct.createAction(ActionTypes.THORV2_UPDATE_MANUAL_SPEED_STATUS,
  (isManualSpeed: boolean): ActionPayLoad<ActionTypes.THORV2_UPDATE_MANUAL_SPEED_STATUS> => {
    return { isManualSpeed }
  })
export const initRoller = reduxAct.createAction(ActionTypes.THORV2_INIT_ROLLER,
  (): ActionPayLoad<ActionTypes.THORV2_INIT_ROLLER> => {
    return { initState }
  })
