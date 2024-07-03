import { default as redux } from "redux";
import gameReducer from "./game";
import { InitStateType as GameStateType } from "../action/game";

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
  deskData: GameStateType,
}

export const rootReducer = redux.combineReducers<StateType>({
  deskData: gameReducer
})