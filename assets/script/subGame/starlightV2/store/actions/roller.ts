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
  STARLIGHTV2_UPDATE_ROLLER_STATUS = 'STARLIGHTV2_UPDATE_ROLLER_STATUS',
  STARLIGHTV2_UPDATE_SPEED_STATUS = 'STARLIGHTV2_UPDATE_SPEED_STATUS',
  STARLIGHTV2_INIT_ROLLER = 'STARLIGHTV2_ROLLER_QUIT_GAME',
  STARLIGHTV2_UPDATE_MANUAL_SPEED_STATUS = 'STARLIGHTV2_UPDATE_MANUAL_SPEED_STATUS',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.STARLIGHTV2_UPDATE_ROLLER_STATUS ? { rollerStatus: RollerStatus } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_SPEED_STATUS ? { isSpeed: boolean } :
  A extends ActionTypes.STARLIGHTV2_INIT_ROLLER ? { initState: InitStateType } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_MANUAL_SPEED_STATUS ? { isManualSpeed: boolean } :
  never;

export const updateRollerStatus = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_ROLLER_STATUS,
  (rollerStatus: RollerStatus): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_ROLLER_STATUS> => {
    return { rollerStatus }
  })
export const updateSpeedStatus = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_SPEED_STATUS,
  (isSpeed: boolean): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_SPEED_STATUS> => {
    return { isSpeed }
  })
export const updateManualSpeedStatus = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_MANUAL_SPEED_STATUS,
  (isManualSpeed: boolean): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_MANUAL_SPEED_STATUS> => {
    return { isManualSpeed }
  })
export const initRoller = reduxAct.createAction(ActionTypes.STARLIGHTV2_INIT_ROLLER,
  (): ActionPayLoad<ActionTypes.STARLIGHTV2_INIT_ROLLER> => {
    return { initState }
  })
