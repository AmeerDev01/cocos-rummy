import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/roller";
import { default as reduxAct } from 'redux-act'
import config from "../../config";
import { copy } from "../../../../utils/tool";
import { RollerType } from "../../type";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.STARLIGHT_BEGIN_ROLL]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_BEGIN_ROLL>): InitStateType => {
    const rollerMap = copy(state.rollerMap)
    if (payload.rollerIndex !== -1) {
      const rollData =rollerMap[payload.rollerIndex]
      rollerMap[payload.rollerIndex].rolling = true
      rollerMap[payload.rollerIndex].direction = payload.direction || (rollData.LargeRoller ? config.largeRollOption.direction : config.normalRollOption.direction)
      payload.speed && (rollerMap[payload.rollerIndex].speed = payload.speed)
      // _state.rollerMap[payload.rollerIndex].speed = payload.speed || (rollData.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
      // _state.rollerMap[payload.rollerIndex].speedBackUp = payload.speed || (rollData.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
      rollerMap[payload.rollerIndex].stopIconIndex = -1
    } else {
      rollerMap.forEach(item => {
        item.rolling = true
        item.direction = payload.direction || (item.LargeRoller ? config.largeRollOption.direction : config.normalRollOption.direction)
        payload.speed && (item.speed = payload.speed)
        // item.speed = payload.speed || (item.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
        // item.speedBackUp = payload.speed || (item.LargeRoller ? config.largeRollOption.rollerSpeed : config.normalRollOption.rollerSpeed)
        item.stopIconIndex = -1
      })
    }
    return {
      ...state,
      rollerMap,
      roundAllEnd:false
    }
  },
  [ActionTypes.STARLIGHT_INIT_ROLL]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_INIT_ROLL>): InitStateType => {
    return {
      ...state,
      rollerMap: payload.rollerMap
    }
  },
  [ActionTypes.STARLIGHT_SET_STOP_ROLL]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_STOP_ROLL>): InitStateType => {
    const rollerMap = copy(state.rollerMap)
    rollerMap[payload.rollerIndex].stopIconIndex = payload.stopIconIndex
    return {
      ...state,
      rollerMap
    }
  },
  [ActionTypes.STARLIGHT_END_ROLLING]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_END_ROLLING>): InitStateType => {
    const rollerMap = copy(state.rollerMap)
    rollerMap[payload.rollerIndex].rolling = payload.rolling
    return {
      ...state,
      rollerMap
    }
  },
  [ActionTypes.STARLIGHT_SET_FLICKER]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_FLICKER>): InitStateType => {
    return {
      ...state,
      iconEffectData: {
        iconEffect: payload.iconEffect,
        coord: payload.flickerCoord
      }
    }
  },
  [ActionTypes.STARLIGHT_SET_ROUNT_END]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_ROUNT_END>): InitStateType => {
    return {
      ...state,
      roundAllEnd: payload.roundAllEnd
    }
  },
  [ActionTypes.STARLIGHT_SET_ROLL_SMALLBOX]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_ROLL_SMALLBOX>): InitStateType => {
    // console.log('STARLIGHT_SET_ROLL_SMALLBOX -- ', payload.smallBox);
    return {
      ...state,
      smallBox: payload.smallBox
    }
  },
  [ActionTypes.STARLIGHT_SET_ROLL_SPEED]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_SET_ROLL_SPEED>): InitStateType => {
    const rollerMap = copy(state.rollerMap) as RollerType[]
    if (payload.rollerIndex) {
      rollerMap[payload.rollerIndex].speed =rollerMap[payload.rollerIndex].speedBackUp * payload.speedMultiple
    } else {
      rollerMap.forEach(i => i.speed = i.speedBackUp * payload.speedMultiple)
    }
    return {
      ...state,
      rollerMap
    }
  }
}, initState);