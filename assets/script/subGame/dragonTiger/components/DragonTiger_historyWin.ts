import {
  _decorator,
  instantiate,
  Label,
  Layout,
  Node,
  ProgressBar,
  Sprite,
  UITransform,
} from "cc";
import { BaseComponent } from "../../../base/BaseComponent";
import { initToggle } from "../../../utils/tool";
import { sourceManageSeletor } from "../index";
import { SpriteFramePathDefine } from "../sourceDefine/spriteDefine";
import { SKT_MAG_TYPE, sktMsgListener } from "../socketConnect";
import { setHistoryListAction } from "../store/actions/history";
const { ccclass, property } = _decorator;

export type History = {
  data: number[];
  dragonNum: number;
  tigerNum: number;
  dragon: number;
  tiger: number;
  drawNum: number;
};
export interface IState {}

export interface IProps {
  historyList: History;
}
export interface IEvent {
  onClosePanel: () => void;
}

@ccclass("DragonTiger_historyWin")
export class DragonTiger_historyWin extends BaseComponent<
  IState,
  IProps,
  IEvent
> {
  private gameHistoryIcon:Node;
  start() {
 
  }

  protected propertyNode = {
    props_btn_history_close: new Node(),
    props_BarBlue: new Node(),
    props_BarYellow: new Node(),
    props_spr_history_girdBg: new Node(),
    props_label_dragon_p: new Node(),
    props_label_tiger_p: new Node(),
    props_ProgressBar: new ProgressBar(),
    props_label_history_naga: new Label(),
    props_label_history_harimau: new Label(),
    props_label_history_seri: new Label(),
    props_label_history_putaran: new Label(),
    props_spr_icon_1:new Node(),
  };

  public props: IProps = {
    historyList: {
      data: [],
      dragonNum: 0,
      tigerNum: 0,
      dragon: 0,
      tiger: 0,
      drawNum: 0,
    },
  };

  public events: IEvent = {
    onClosePanel: () => {},
  };

  protected initState() {
    return {};
  }

  protected bindEvent(): void {
    this.propertyNode.props_btn_history_close.on(
      Node.EventType.TOUCH_END,
      () => {
        this.events.onClosePanel();
      }
    );
  }

  protected useProps(key: keyof IProps, value: { pre: any; cur: any }) {
    if (key === "historyList") {
      this.propertyNode.props_label_tiger_p.getComponent(Label).string =
        value.cur.tiger + "%";
      this.propertyNode.props_label_dragon_p.getComponent(Label).string =
      value.cur.dragon + "%";
      this.propertyNode.props_BarBlue.getComponent(UITransform).width =
        (this.propertyNode.props_ProgressBar.getComponent(UITransform).width *
        value.cur.dragon) /100;
      this.propertyNode.props_label_history_naga.getComponent(Label).string =
        "naga:" + value.cur.dragonNum;
      this.propertyNode.props_label_history_harimau.getComponent(Label).string =
        "harimau:" + value.cur.tigerNum;
      this.propertyNode.props_label_history_seri.getComponent(Label).string =
        "seri:" + value.cur.drawNum;
      this.propertyNode.props_label_history_putaran.getComponent(Label).string =
        "Putaran:" + value.cur.data.length;
      let gridParent = this.propertyNode.props_spr_history_girdBg;
     
      let numbersArray = value.cur.data
      this.gameHistoryIcon = instantiate(this.propertyNode.props_spr_icon_1);
      gridParent.removeAllChildren()
      // gridParent.getComponent(Layout).destroy()
      let rows = 21;
      let cols = 5;
      let cellWidth = 45;
      let cellHeight = 44;

      // 设置网格布局
      let gridLayout = gridParent.addComponent(Layout);
      gridLayout.type = Layout.Type.GRID;
      gridLayout.paddingLeft=2
      gridLayout.spacingX = 2;
      gridLayout.spacingY = 3;
      gridLayout.startAxis = Layout.AxisDirection.HORIZONTAL; // 从左到右排列

      
     
      // 循环遍历数字数组，创建并添加子节点
      for (let i = 0; i < numbersArray.length; i++) {
      
        let gameWinIcon = instantiate(this.gameHistoryIcon);

        if (numbersArray[i] === 1) {
          gameWinIcon.getComponent(Sprite).spriteFrame =
            sourceManageSeletor().getFile(
              SpriteFramePathDefine.DRAGONTIGER_HISTORY_DRAGON
            ).source;
        } else if (numbersArray[i] === 2) {
          gameWinIcon.getComponent(Sprite).spriteFrame =
            sourceManageSeletor().getFile(
              SpriteFramePathDefine.DRAGONTIGER_HISTORY_TIGER
            ).source;
        } else {
          gameWinIcon.getComponent(Sprite).spriteFrame =
            sourceManageSeletor().getFile(
              SpriteFramePathDefine.DRAGONTIGER_HISTORY_SERI
            ).source;
        }
        gameWinIcon.active=true
        gridParent.addChild(gameWinIcon);

      }

     
    }
  }

  protected init(){

    this.gameHistoryIcon = instantiate(
      this.propertyNode.props_spr_history_girdBg.getChildByName(
        "props_spr_icon_1"
      )
    );
  }

  toggleCallback(event: Event, customEventData: string) {}

  protected changeProgressBar() {
  }

  protected bindUI(): void {}

  update(deltaTime: number) {}
}
