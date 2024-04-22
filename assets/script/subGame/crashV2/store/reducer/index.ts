import { default as redux } from "redux";
import gameReducer from "./game";
import { InitStateType as GameStateType } from "../actions/game";

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
}

export const rootReducer = redux.combineReducers<StateType>({
  // counter: counterReducer,
  game: gameReducer
})