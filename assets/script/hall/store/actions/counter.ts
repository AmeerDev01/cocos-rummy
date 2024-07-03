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
  CHANGE_SIZE = 'CHANGE_SIZE',
  CHANGE_COLOR = 'CHANGE_COLOR'
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.CHANGE_COLOR ? { color: string } :
  A extends ActionTypes.CHANGE_SIZE ? { size: number } :
  never;


export const colorChangeAction = reduxAct.createAction(ActionTypes.CHANGE_COLOR,
  (color: string): ActionPayLoad<ActionTypes.CHANGE_COLOR> => {
    return { color }
  })

export const sizeChangeAction = reduxAct.createAction(ActionTypes.CHANGE_SIZE,
  (size: number): ActionPayLoad<ActionTypes.CHANGE_SIZE> => {
    return { size }
  })