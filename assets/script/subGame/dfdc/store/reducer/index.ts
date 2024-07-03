import { default as redux } from "redux";
import rollerReducer from "./roller";
import gameReducer from "./game";
import { InitStateType as RollerStateType } from "../actions/roller";
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
  roller: RollerStateType,
  game: GameStateType,
}

export const rootReducer = redux.combineReducers<StateType>({
  roller: rollerReducer,
  game: gameReducer
})
