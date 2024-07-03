import { default as redux } from "redux";
import UserInfoReducer from './userInfo';
import historyReducer from "./history";
import pokerReducer from "./pokerDetail";
import gameReducer from './game';
import {InitStateType as GameStateType} from '../actions/game';
import { InitStateType as UserInfoInitStateType } from "../actions/userInfo";
import {InitStateType as HistoryInitStateType} from '../actions/history';
import { InitStateType as pokerDetailStateType } from "../actions/pokerDetail";

window["process"] = {
  env: { NODE_ENV: "production" }, on: () => "",
  memoryUsage: () => ({
    rss: 4935680,
    heapTotal: 1826816,
    heapUsed: 650472,
    external: 49879
  })
}


export type StateType = {
  userInfo: UserInfoInitStateType,
  history:HistoryInitStateType,
  pokerDetail: pokerDetailStateType,
  game:GameStateType
  
}

export const rootReducer = redux.combineReducers<StateType>({
  userInfo: UserInfoReducer,
  history:historyReducer,
  pokerDetail: pokerReducer,
  game:gameReducer,
  
})
