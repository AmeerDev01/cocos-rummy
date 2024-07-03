import { default as redux } from "redux";
import counterReducer from "./counter";
import baseBoardReducer from "./baseBoard";
import memberInfoReducer from "./memberInfo";
import withdrawReducer from "./withdraw";
import { InitStateType as CounterInitStateType } from "../actions/counter";
import { InitStateType as BaseBoardInitStateType } from "../actions/baseBoard";
import { InitStateType as MemberInfoInitStateType } from "../actions/memberInfo";
import { InitStateType as WithdrawInitStateType } from "../actions/withdraw";

window["process"] = {
  env: { NODE_ENV: "production" }, on: () => "",
  memoryUsage: () => ({
    rss: 4935680,
    heapTotal: 1826816,
    heapUsed: 650472,
    external: 49879,
    arrayBuffers: 44556
  })
}


export type StateType = {
  counter: CounterInitStateType,
  baseBoard: BaseBoardInitStateType,
  memberInfo: MemberInfoInitStateType,
  withdraw: WithdrawInitStateType
}

export const rootReducer = redux.combineReducers<StateType>({
  counter: counterReducer,
  baseBoard: baseBoardReducer,
  memberInfo: memberInfoReducer,
  withdraw: withdrawReducer
})