import { default as redux } from "redux";
import gameReducer from "./game";
import betReducer from "./bet";
import gameFlowReducer from "./gameFlow";
import { InitStateType as GameStateType } from "../actions/game";
import { InitStateType as BetStateType } from "../actions/bet";
import { InitStateType as GameFlowStateType } from "../actions/gameFlow";

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
  // counter: CounterInitStateType
  game: GameStateType,
  bet: BetStateType,
  gameFlow: GameFlowStateType,
}

export const rootReducer = redux.combineReducers<StateType>({
  // counter: counterReducer,
  game: gameReducer,
  bet: betReducer,
  gameFlow: gameFlowReducer

})