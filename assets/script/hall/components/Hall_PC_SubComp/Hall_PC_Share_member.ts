import { _decorator, Component, ImageAsset, instantiate, Label, log, native, Node, ScrollView, Sprite, SpriteFrame, sys, Texture2D, tween, UIOpacity, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;
import { fetcher, lang } from '../../index';
import { ApiUrl } from '../../apiUrl';
export interface IState {

}

export interface IProps {
    isShow: boolean,
}
export interface IEvent {

}

@ccclass('Hall_PC_Share_member')
export class Hall_PC_Share_member extends BaseComponent<IState, IProps, IEvent> {
    private memberList = []
    isLoading = false
    pageNum = 1
    pageSize = 20
    total = 0
    start() {

    }

    protected propertyNode = {
        props_btn_help: new Node(),
        props_img_validitas_hlep: new Node(),
        props_content: new Node(),
        props_layout_item: new Node(),
        props_ScrollView: new ScrollView(),
    }

    public props: IProps = {
        isShow: true
    }

    public events: IEvent = {

    }

    protected initState() {
        return {

        }
    }

    protected bindEvent(): void {
        this.propertyNode.props_btn_help.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_img_validitas_hlep.active = true
            this.node.once(Node.EventType.TOUCH_END, () => {
                this.propertyNode.props_img_validitas_hlep.active = false
            })
        })
        this.propertyNode.props_img_validitas_hlep.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_img_validitas_hlep.active = false
        })
        this.renderData()
        this.propertyNode.props_ScrollView.node.on('scrolling', this.onScrolling, this);
    }

    protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if (key === 'isShow') {
            this.node.active = value.cur
        }
    }
    onScrolling() {
        let scrollOffset = this.propertyNode.props_ScrollView.getScrollOffset();
        let maxScrollOffset = this.propertyNode.props_ScrollView.getMaxScrollOffset();
        // 检查是否滚动到底部
        if (scrollOffset.y >= maxScrollOffset.y) {
            if (this.isLoading || (this.total / this.pageSize) <= this.pageNum) {
                return;
            } else {
                this.isLoading = true;
                this.pageNum++;
                this.renderData()
                console.log(this.pageNum);

            }
        }
    }
    private renderData() {
        let obj = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
        }
        fetcher.send(ApiUrl.MYRECOMMENDINFO, obj, "post").then((rsp) => {
            this.total = rsp.total
            for (let i = 0; i <= rsp.list.length; i++) {
                let node = instantiate(this.propertyNode.props_layout_item)
                node.active = true
                if (rsp.list[i]) {
                    node.getChildByName('label_name').getComponent(Label).string = rsp.list[i].nickName
                    node.getChildByName('label_date').getComponent(Label).string = rsp.list[i].registerTime
                    node.getChildByName('label_total').getComponent(Label).string = rsp.list[i].totalBet.formatAmountWithCommas()
                    node.getChildByName('label_validitas').getComponent(Label).string = rsp.list[i].effective ? 'Yes' : 'No'
                    this.propertyNode.props_content.addChild(node)
                }
            }

        })
        this.scheduleOnce(() => {
            this.isLoading = false;
        }, 3)
    }
    protected bindUI(): void {

    }

    update(deltaTime: number) {

    }
}

