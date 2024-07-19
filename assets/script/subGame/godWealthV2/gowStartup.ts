import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;
import { startUp } from "./index";

@ccclass("gowStartup")
export class gowStartup extends Component {
  start() {
    startUp(this.node);
  }

  update(deltaTime: number) {}
}
