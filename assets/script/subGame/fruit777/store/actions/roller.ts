import { default as reduxAct } from 'redux-act'
import { DirectionType, IconEffectType, RollerType } from '../../type';
import config from '../../config';


export type InitStateType = {
  rollerMap: RollerType[],
  /**本轮是否全部转动结束 */
  roundAllEnd: boolean,
  iconEffectData: {
    iconEffect: IconEffectType,
    /**示例数据：[[0,1],[1,2],[2,1]] */
    coord: number[][]
  }
}
export const initState: InitStateType = {
  rollerMap: [],
  roundAllEnd: true,
  iconEffectData: {
    iconEffect: IconEffectType.NONE,
    coord: []
  }
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  FRUIT777_INIT_ROLL = 'FRUIT777_INIT_ROLL',
  FRUIT777_BEGIN_ROLL = 'FRUIT777_BEGIN_ROLL',
  FRUIT777_SET_STOP_ROLL = 'FRUIT777_SET_STOP_ROLL',
  FRUIT777_END_ROLLING = 'FRUIT777_END_ROLL',
  FRUIT777_SET_FLICKER = 'FRUIT777_SET_FLICKER',
  FRUIT777_SET_ROUNT_END = 'FRUIT777_SET_ROUNT_END',
  FRUIT777_SET_ROLL_SPEED = 'FRUIT777_SET_ROLL_SPEED',
  
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.FRUIT777_INIT_ROLL ? { rollerMap: RollerType[] } :
  A extends ActionTypes.FRUIT777_BEGIN_ROLL ? { rollerIndex: number, speed?: number, direction?: DirectionType } :
  A extends ActionTypes.FRUIT777_SET_STOP_ROLL ? { rollerIndex: number, stopIconIndex: number } :
  A extends ActionTypes.FRUIT777_END_ROLLING ? { rollerIndex: number, rolling: boolean } :
  A extends ActionTypes.FRUIT777_SET_FLICKER ? { iconEffect: IconEffectType, flickerCoord: number[][] } :
  A extends ActionTypes.FRUIT777_SET_ROUNT_END ? { roundAllEnd: boolean } :
  A extends ActionTypes.FRUIT777_SET_ROLL_SPEED ? { speedMultiple: number, rollerIndex?: number } :
  never;

export const initRollAction = reduxAct.createAction(ActionTypes.FRUIT777_INIT_ROLL,
  (rollerMap: RollerType[]): ActionPayLoad<ActionTypes.FRUIT777_INIT_ROLL> => {
    return { rollerMap }
  })


export const beginRollAction = reduxAct.createAction(ActionTypes.FRUIT777_BEGIN_ROLL,
  (rollerIndex: number, speed?: number, direction?: DirectionType): ActionPayLoad<ActionTypes.FRUIT777_BEGIN_ROLL> => {
    return { rollerIndex, speed, direction }
  })

export const setStopRollAction = reduxAct.createAction(ActionTypes.FRUIT777_SET_STOP_ROLL,
  (rollerIndex: number, stopIconIndex: number): ActionPayLoad<ActionTypes.FRUIT777_SET_STOP_ROLL> => {
    return { rollerIndex, stopIconIndex }
  })

export const endRollingAction = reduxAct.createAction(ActionTypes.FRUIT777_END_ROLLING,
  (rollerIndex: number, rolling: boolean): ActionPayLoad<ActionTypes.FRUIT777_END_ROLLING> => {
    return { rollerIndex, rolling }
  })

export const setIconEffect = reduxAct.createAction(ActionTypes.FRUIT777_SET_FLICKER,
  (iconEffect: IconEffectType, flickerCoord: number[][]): ActionPayLoad<ActionTypes.FRUIT777_SET_FLICKER> => {
    return { iconEffect, flickerCoord }
  })

export const setRollRoundEnd = reduxAct.createAction(ActionTypes.FRUIT777_SET_ROUNT_END,
  (roundAllEnd: boolean): ActionPayLoad<ActionTypes.FRUIT777_SET_ROUNT_END> => {
    return { roundAllEnd }
  })

export const setRollSpeed = reduxAct.createAction(ActionTypes.FRUIT777_SET_ROLL_SPEED,
  (speedMultiple: number, rollerIndex?: number): ActionPayLoad<ActionTypes.FRUIT777_SET_ROLL_SPEED> => {
    return { speedMultiple, rollerIndex }
  })
