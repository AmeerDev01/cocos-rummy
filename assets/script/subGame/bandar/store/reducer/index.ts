import { default as redux } from "redux";
import UserInfoReducer from './userInfo';
import historyReducer from "./history";
import pokerReducer from "./pokerDetail";
import gameReducer from './game';
import betReducer from './bet';
// import { InitStateType as UserInfoInitStateType } from "../actions/userInfo";
import {InitStateType as HistoryInitStateType} from '../actions/history';
import {InitStateType as GameStateType} from '../actions/game';
import {InitStateType as BetStateType} from '../actions/bet';
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
  // userInfo: UserInfoInitStateType,
  game:GameStateType
  history:HistoryInitStateType,
  bet:BetStateType,
  pokerDetail:pokerDetailStateType,
}

export const rootReducer = redux.combineReducers<StateType>({
  // userInfo:UserInfoReducer,
  history:historyReducer,
  game:gameReducer,
  bet:betReducer,
  pokerDetail:pokerReducer
})
