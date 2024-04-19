import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/roller";
import { default as reduxAct } from 'redux-act'
import config from "../../config";
import { copy } from "../../../../utils/tool";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.PHOENIX_BEGIN_ROLL]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_BEGIN_ROLL>): InitStateType => {
    const _state = instantiate(state)
    if (payload.rollerIndex !== -1) {
      const rollData = _state.rollerMap[payload.rollerIndex]
      _state.rollerMap[payload.rollerIndex].rolling = true
      _state.rollerMap[payload.rollerIndex].direction = payload.direction || config.normalRollOption.direction
      payload.speed && (_state.rollerMap[payload.rollerIndex].speed = payload.speed)
      // _state.rollerMap[payload.rollerIndex].speed = payload.speed || (rollData.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
      // _state.rollerMap[payload.rollerIndex].speedBackUp = payload.speed || (rollData.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
      _state.rollerMap[payload.rollerIndex].stopIconIndex = -1
    } else {
      _state.rollerMap.forEach(item => {
        item.rolling = true
        item.direction = payload.direction || config.normalRollOption.direction
        payload.speed && (item.speed = payload.speed)
        // item.speed = payload.speed || (item.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
        // item.speedBackUp = payload.speed || (item.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
        item.stopIconIndex = -1
      })
    }
    _state.roundAllEnd = false
    return {
      ..._state
    }
  },
  [ActionTypes.PHOENIX_INIT_ROLL]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_INIT_ROLL>): InitStateType => {
    // const _state = instantiate(state)
    // _state.rollerMap = payload.rollerMap
    // return {
    //   ..._state
    // }
    return {
      ...state,
      rollerMap: copy(payload.rollerMap)
    }
  },
  [ActionTypes.PHOENIX_SET_STOP_ROLL]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_STOP_ROLL>): InitStateType => {
    const rollerMapItem = instantiate(state.rollerMap[payload.rollerIndex])
    rollerMapItem.stopIconIndex = payload.stopIconIndex
    state.rollerMap[payload.rollerIndex] = rollerMapItem
    // const _state = instantiate(state)
    // _state.rollerMap[payload.rollerIndex].stopIconIndex = payload.stopIconIndex
    return {
      ...state,
    }
  },
  [ActionTypes.PHOENIX_END_ROLLING]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_END_ROLLING>): InitStateType => {
    // const _state = instantiate(state)
    state.rollerMap[payload.rollerIndex].rolling = payload.rolling
    return {
      ...state
    }
  },
  [ActionTypes.PHOENIX_SET_FLICKER]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_FLICKER>): InitStateType => {
    return {
      ...state,
      iconEffectData: {
        iconEffect: payload.iconEffect,
        coord: payload.flickerCoord
      }
    }
  },
  [ActionTypes.PHOENIX_SET_ROUNT_END]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_ROUNT_END>): InitStateType => {
    return {
      ...state,
      roundAllEnd: payload.roundAllEnd
    }
  },
  [ActionTypes.PHOENIX_SET_ROLL_SPEED]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_ROLL_SPEED>): InitStateType => {
    const _state = instantiate(state)
    if (payload.rollerIndex) {
      _state.rollerMap[payload.rollerIndex].speed = _state.rollerMap[payload.rollerIndex].speedBackUp * payload.speedMultiple
    } else {
      _state.rollerMap.forEach(i => i.speed = i.speedBackUp * payload.speedMultiple)
    }
    return {
      ..._state
    }
  },
  [ActionTypes.PHOENIX_SET_YUANBAO_FLICKER]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_YUANBAO_FLICKER>): InitStateType => {
    return {
      ...state,
      iconYuanBaoEffectData: {
        iconEffect: payload.iconEffect,
        coord: payload.flickerCoord
      }
    }
  },
  [ActionTypes.PHOENIX_SET_FREEGAME_FLICKER]: (state, payload: ActionPayLoad<ActionTypes.PHOENIX_SET_FREEGAME_FLICKER>): InitStateType => {
    return {
      ...state,
      iconFreeGameEffectData: {
        iconEffect: payload.iconEffect,
        coord: payload.flickerCoord
      }
    }
  },
}, initState);
