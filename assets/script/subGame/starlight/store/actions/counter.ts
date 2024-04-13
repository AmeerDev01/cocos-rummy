import { default as reduxAct } from 'redux-act'


export type InitStateType = {
  size: number,
  color: string
}
export const initState: InitStateType = {
  size: 12,
  color: "#fcfcfc"
}

/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  STARLIGHT_CHANGE_SIZE = 'STARLIGHT_CHANGE_SIZE',
  STARLIGHT_CHANGE_COLOR = 'STARLIGHT_CHANGE_COLOR'
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.STARLIGHT_CHANGE_COLOR ? { color: string } :
  A extends ActionTypes.STARLIGHT_CHANGE_SIZE ? { size: number } :
  never;


export const colorChangeAction = reduxAct.createAction(ActionTypes.STARLIGHT_CHANGE_COLOR,
  (color: string): ActionPayLoad<ActionTypes.STARLIGHT_CHANGE_COLOR> => {
    return { color }
  })

export const sizeChangeAction = reduxAct.createAction(ActionTypes.STARLIGHT_CHANGE_SIZE,
  (size: number): ActionPayLoad<ActionTypes.STARLIGHT_CHANGE_SIZE> => {
    return { size }
  })
