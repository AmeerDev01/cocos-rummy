import { default as reduxAct } from 'redux-act'
import { RoomInfo } from '../../type';


export type InitStateType = {
  roomInfos: RoomInfo[],
  myBatteryId: number,
}
export const initState: InitStateType = {
  roomInfos: [],
  myBatteryId: 1
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  FISH_QUIT_GAME = 'FISH_QUIT_GAME',
  FISH_INIT_ROOM_LIST = 'FISH_INIT_ROOM_LIST',
  FISH_CHANGE_BATTERY = 'FISH_CHANGE_BATTERY',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.FISH_QUIT_GAME ? { initState: InitStateType } :
  A extends ActionTypes.FISH_INIT_ROOM_LIST ? { roomInfos: RoomInfo[] } :
  A extends ActionTypes.FISH_CHANGE_BATTERY ? { batteryId: number } :
  never;

/**初始化房间列表 */
export const initRoomList = reduxAct.createAction(ActionTypes.FISH_INIT_ROOM_LIST,
  (roomInfos: RoomInfo[]): ActionPayLoad<ActionTypes.FISH_INIT_ROOM_LIST> => {
    return { roomInfos }
  })
export const quitGame = reduxAct.createAction(ActionTypes.FISH_QUIT_GAME,
  (): ActionPayLoad<ActionTypes.FISH_QUIT_GAME> => {
    return { initState }
  })
export const changeBattery = reduxAct.createAction(ActionTypes.FISH_CHANGE_BATTERY,
  (batteryId: number): ActionPayLoad<ActionTypes.FISH_CHANGE_BATTERY> => {
    return { batteryId }
  })