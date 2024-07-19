import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;
import { startUp } from "./index";

@ccclass("GowStartup")
export class GowStartup extends Component {
  start() {
    startUp(this.node);
  }
}
