import { default as reduxAct } from 'redux-act'
import { DirectionType, IconEffectType, RollerType } from '../../type';


export type InitStateType = {
  rollerMap: RollerType[],
  /**本轮是否全部转动结束 */
  roundAllEnd: boolean,
  iconEffectData: {
    iconEffect: IconEffectType,
    /**示例数据：[[0,1],[1,2],[2,1]] */
    coord: number[][]
  },
  iconYuanBaoEffectData: {
    iconEffect: IconEffectType,
    /**示例数据：[[0,1],[1,2],[2,1]] */
    coord: number[][]
  },
  iconFreeGameEffectData: {
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
  },
  iconYuanBaoEffectData: {
    iconEffect: IconEffectType.NONE,
    coord: []
  },
  iconFreeGameEffectData: {
    iconEffect: IconEffectType.NONE,
    /**示例数据：[[0,1],[1,2],[2,1]] */
    coord: []
  }
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  DFDC_INIT_ROLL = 'DFDC_INIT_ROLL',
  DFDC_BEGIN_ROLL = 'DFDC_BEGIN_ROLL',
  DFDC_SET_STOP_ROLL = 'DFDC_SET_STOP_ROLL',
  DFDC_END_ROLLING = 'DFDC_END_ROLL',
  DFDC_SET_FLICKER = 'DFDC_SET_FLICKER',
  DFDC_SET_ROUNT_END = 'DFDC_SET_ROUNT_END',
  DFDC_SET_ROLL_SPEED = 'DFDC_SET_ROLL_SPEED',
  DFDC_SET_YUANBAO_FLICKER = 'DFDC_SET_YUANBAO_FLICKER',
  DFDC_SET_FREEGAME_FLICKER = 'DFDC_SET_FREEGAME_FLICKER',

}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.DFDC_INIT_ROLL ? { rollerMap: RollerType[] } :
  A extends ActionTypes.DFDC_BEGIN_ROLL ? { rollerIndex: number, speed?: number, direction?: DirectionType } :
  A extends ActionTypes.DFDC_SET_STOP_ROLL ? { rollerIndex: number, stopIconIndex: number } :
  A extends ActionTypes.DFDC_END_ROLLING ? { rollerIndex: number, rolling: boolean } :
  A extends ActionTypes.DFDC_SET_FLICKER ? { iconEffect: IconEffectType, flickerCoord: number[][] } :
  A extends ActionTypes.DFDC_SET_ROUNT_END ? { roundAllEnd: boolean } :
  A extends ActionTypes.DFDC_SET_ROLL_SPEED ? { speedMultiple: number, rollerIndex?: number } :
  A extends ActionTypes.DFDC_SET_YUANBAO_FLICKER ? { iconEffect: IconEffectType, flickerCoord: number[][] } :
  A extends ActionTypes.DFDC_SET_FREEGAME_FLICKER ? { iconEffect: IconEffectType, flickerCoord: number[][] } :

  never;

export const initRollAction = reduxAct.createAction(ActionTypes.DFDC_INIT_ROLL,
  (rollerMap: RollerType[]): ActionPayLoad<ActionTypes.DFDC_INIT_ROLL> => {
    return { rollerMap }
  })


export const beginRollAction = reduxAct.createAction(ActionTypes.DFDC_BEGIN_ROLL,
  (rollerIndex: number, speed?: number, direction?: DirectionType): ActionPayLoad<ActionTypes.DFDC_BEGIN_ROLL> => {
    return { rollerIndex, speed, direction }
  })

export const setStopRollAction = reduxAct.createAction(ActionTypes.DFDC_SET_STOP_ROLL,
  (rollerIndex: number, stopIconIndex: number): ActionPayLoad<ActionTypes.DFDC_SET_STOP_ROLL> => {
    return { rollerIndex, stopIconIndex }
  })

export const endRollingAction = reduxAct.createAction(ActionTypes.DFDC_END_ROLLING,
  (rollerIndex: number, rolling: boolean): ActionPayLoad<ActionTypes.DFDC_END_ROLLING> => {
    return { rollerIndex, rolling }
  })

export const setIconEffect = reduxAct.createAction(ActionTypes.DFDC_SET_FLICKER,
  (iconEffect: IconEffectType, flickerCoord: number[][]): ActionPayLoad<ActionTypes.DFDC_SET_FLICKER> => {
    return { iconEffect, flickerCoord }
  })

export const setRollRoundEnd = reduxAct.createAction(ActionTypes.DFDC_SET_ROUNT_END,
  (roundAllEnd: boolean): ActionPayLoad<ActionTypes.DFDC_SET_ROUNT_END> => {
    return { roundAllEnd }
  })

export const setRollSpeed = reduxAct.createAction(ActionTypes.DFDC_SET_ROLL_SPEED,
  (speedMultiple: number, rollerIndex?: number): ActionPayLoad<ActionTypes.DFDC_SET_ROLL_SPEED> => {
    return { speedMultiple, rollerIndex }
  })
  
export const setIconYuanBaoEffect = reduxAct.createAction(ActionTypes.DFDC_SET_YUANBAO_FLICKER,
  (iconEffect: IconEffectType, flickerCoord: number[][]): ActionPayLoad<ActionTypes.DFDC_SET_YUANBAO_FLICKER> => {
    return { iconEffect, flickerCoord }
  })
export const setIconFreeGameEffect = reduxAct.createAction(ActionTypes.DFDC_SET_FREEGAME_FLICKER,
  (iconEffect: IconEffectType, flickerCoord: number[][]): ActionPayLoad<ActionTypes.DFDC_SET_FREEGAME_FLICKER> => {
    return { iconEffect, flickerCoord }
  })
  
