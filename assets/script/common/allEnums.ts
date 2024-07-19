import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("allEnums")
export class allEnums extends Component {
  start() {}

  update(deltaTime: number) {}
}

export enum SubGameType {
  All,
  Slot,
  Domino,
  Other
}
