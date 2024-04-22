import { default as reduxAct } from 'redux-act'
import { AnimationStatus, BetData, BetType, GameStatus, HeadType, Result, TipType } from '../../type';
import { Game } from 'cc';


export type InitStateType = {
  /**游戏状态 */
  gameStatus: GameStatus,
  /**倒计时 */
  countdown: number,
  /**结果 */
  results: Result[],
  /**最新结果 */
  newResult: Result,
  /**动画状态 */
  animationStatus: AnimationStatus,
  /**提示类型 */
  tipType: TipType,
}
export const initState: InitStateType = {
  gameStatus: null,
  countdown: 0,
  results: [],
  newResult: null,
  animationStatus: null,
  tipType: null,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  /**倒计时 */
  YXX_COUNTDOWN = 'YXX_COUNTDOWN',
  /**改变游戏状态 */
  YXX_CHANGE_GAME_STATUS = 'YXX_CHANGE_GAME_STATUS',
  /**初始化结果 */
  YXX_INIT_RESULT = 'YXX_INIT_RESULT',
  /**改变动画状态 */
  YXX_CHNAGE_ANIMATION_STATUS = 'YXX_CHNAGE_ANIMATION_STATUS',
  YXX_TIP_TYPE = 'YXX_TIP_TYPE',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.YXX_COUNTDOWN ? { countdown: number } :
  A extends ActionTypes.YXX_CHANGE_GAME_STATUS ? { gameStatus: GameStatus, second: number, result: Result } :
  A extends ActionTypes.YXX_INIT_RESULT ? { results: Result[] } :
  A extends ActionTypes.YXX_CHNAGE_ANIMATION_STATUS ? { animationStatus: AnimationStatus } :
  A extends ActionTypes.YXX_TIP_TYPE ? { tipType: TipType } :
  never;

export const countdown = reduxAct.createAction(ActionTypes.YXX_COUNTDOWN,
  (countdown: number): ActionPayLoad<ActionTypes.YXX_COUNTDOWN> => {
    return { countdown }
  })

export const changeGameStatus = reduxAct.createAction(ActionTypes.YXX_CHANGE_GAME_STATUS,
  (gameStatus: GameStatus, second: number, result: Result): ActionPayLoad<ActionTypes.YXX_CHANGE_GAME_STATUS> => {
    return { gameStatus, second, result }
  })

export const initResult = reduxAct.createAction(ActionTypes.YXX_INIT_RESULT,
  (results: Result[]): ActionPayLoad<ActionTypes.YXX_INIT_RESULT> => {
    return { results }
  })

export const changeAnimationStatus = reduxAct.createAction(ActionTypes.YXX_CHNAGE_ANIMATION_STATUS,
  (animationStatus: AnimationStatus): ActionPayLoad<ActionTypes.YXX_CHNAGE_ANIMATION_STATUS> => {
    return { animationStatus }
  })
export const setTipType = reduxAct.createAction(ActionTypes.YXX_TIP_TYPE,
  (tipType: TipType): ActionPayLoad<ActionTypes.YXX_TIP_TYPE> => {
    return { tipType }
  })