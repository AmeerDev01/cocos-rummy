import { default as reduxAct } from 'redux-act'
import { DirectionType, IconEffectType, RollerType } from '../../type';
import config from '../../config';
import { log } from 'cc';


export type InitStateType = {
  rollerMap: RollerType[],
  /**本轮是否全部转动结束 */
  roundAllEnd: boolean,
  iconEffectData: {
    iconEffect: IconEffectType,
    /**示例数据：[[0,1],[1,2],[2,1]] */
    coord: number[][]
  },
  // 小滚动框
  smallBox:object
}
export const initState: InitStateType = {
  rollerMap: [],
  roundAllEnd: true,
  iconEffectData: {
    iconEffect: IconEffectType.NONE,
    coord: []
  },
  smallBox:{}
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  THOR_INIT_ROLL = 'THOR_INIT_ROLL',
  THOR_BEGIN_ROLL = 'THOR_BEGIN_ROLL',
  THOR_SET_STOP_ROLL = 'THOR_SET_STOP_ROLL',
  THOR_END_ROLLING = 'THOR_END_ROLL',
  THOR_SET_FLICKER = 'THOR_SET_FLICKER',
  THOR_SET_ROUNT_END = 'THOR_SET_ROUNT_END',
  THOR_SET_ROLL_SPEED = 'THOR_SET_ROLL_SPEED',
  THOR_SET_ROLL_SMALLBOX = 'THOR_SET_ROLL_SMALLBOX',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.THOR_INIT_ROLL ? { rollerMap: RollerType[] } :
  A extends ActionTypes.THOR_BEGIN_ROLL ? { rollerIndex: number, speed?: number, direction?: DirectionType } :
  A extends ActionTypes.THOR_SET_STOP_ROLL ? { rollerIndex: number, stopIconIndex: number } :
  A extends ActionTypes.THOR_END_ROLLING ? { rollerIndex: number, rolling: boolean } :
  A extends ActionTypes.THOR_SET_FLICKER ? { iconEffect: IconEffectType, flickerCoord: number[][] } :
  A extends ActionTypes.THOR_SET_ROUNT_END ? { roundAllEnd: boolean } :
  A extends ActionTypes.THOR_SET_ROLL_SPEED ? { speedMultiple: number, rollerIndex?: number } :
  A extends ActionTypes.THOR_SET_ROLL_SMALLBOX ? {smallBox: { }} :
  never;

export const initRollAction = reduxAct.createAction(ActionTypes.THOR_INIT_ROLL,
  (rollerMap: RollerType[]): ActionPayLoad<ActionTypes.THOR_INIT_ROLL> => {
    return { rollerMap }
  })


export const beginRollAction = reduxAct.createAction(ActionTypes.THOR_BEGIN_ROLL,
  (rollerIndex: number, speed?: number, direction?: DirectionType): ActionPayLoad<ActionTypes.THOR_BEGIN_ROLL> => {
    return { rollerIndex, speed, direction }
  })

export const setStopRollAction = reduxAct.createAction(ActionTypes.THOR_SET_STOP_ROLL,
  (rollerIndex: number, stopIconIndex: number): ActionPayLoad<ActionTypes.THOR_SET_STOP_ROLL> => {
    return { rollerIndex, stopIconIndex }
  })

export const endRollingAction = reduxAct.createAction(ActionTypes.THOR_END_ROLLING,
  (rollerIndex: number, rolling: boolean): ActionPayLoad<ActionTypes.THOR_END_ROLLING> => {
    return { rollerIndex, rolling }
  })

export const setIconEffect = reduxAct.createAction(ActionTypes.THOR_SET_FLICKER,
  (iconEffect: IconEffectType, flickerCoord: number[][]): ActionPayLoad<ActionTypes.THOR_SET_FLICKER> => {
    return { iconEffect, flickerCoord }
  })
export const setSmallBox = reduxAct.createAction(ActionTypes.THOR_SET_ROLL_SMALLBOX,
  (smallBox:{}): ActionPayLoad<ActionTypes.THOR_SET_ROLL_SMALLBOX> => {
    return { smallBox}
  })

export const setRollRoundEnd = reduxAct.createAction(ActionTypes.THOR_SET_ROUNT_END,
  (roundAllEnd: boolean): ActionPayLoad<ActionTypes.THOR_SET_ROUNT_END> => {
    return { roundAllEnd }
  })

export const setRollSpeed = reduxAct.createAction(ActionTypes.THOR_SET_ROLL_SPEED,
  (speedMultiple: number, rollerIndex?: number): ActionPayLoad<ActionTypes.THOR_SET_ROLL_SPEED> => {
    return { speedMultiple, rollerIndex }
  })
