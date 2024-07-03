import { _decorator, Component, Node, RichText, sys } from "cc";

const { ccclass, property } = _decorator;

@ccclass("Hall_MailItemComponent")
export class Hall_MailItemComponent extends Component {
    cd: Function = null;
    showTxt(str: string, cd: Function) {
        this.node.getComponent(RichText).string = str;
        this.cd = cd;
    }
  

    update(deltaTime: number) { }
    
    onLinkClick(e, d) {
        if (this.cd) {
            this.cd(d);
        }
    }
}
