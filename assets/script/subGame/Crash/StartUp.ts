import { _decorator, Color, Component, Node } from 'cc';
import {Crash_Main} from './Crash_Main'
export default (boardNode: Node) => {
    let Main=new Crash_Main()
    Main.init(boardNode)
    return () => {
        Main.stopCrash_WsManage()
    }
}
