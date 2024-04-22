import { _decorator, Component, Node } from 'cc';
import startUp from "./StartUp";
const { ccclass, property } = _decorator;

@ccclass('localstart')
export class localstart extends Component {
    start() {
        startUp(this.node)
    }

    update(deltaTime: number) {

    }
}


