import { _decorator, assetManager, color, Color, Component, ImageAsset, instantiate, Label, native, Node, ScrollView, Sprite, SpriteFrame, sys, UITransform } from 'cc';
import { NATIVE } from 'cc/env'
import { BaseComponent } from '../../base/BaseComponent';
import { BridgeCode } from '../../common/bridge';
import copyToClipboard from '../../utils/copyToClipboard';
import { addToastAction, ToastType } from '../store/actions/baseBoard';
import { hallAudio, lang } from '../index';
import { initToggle } from '../../utils/tool';
import { log } from '../../common/fish/CalculteRule';
import TaskScheduler, { Task } from '../../utils/TaskScheduler';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

type ShopHistoryItem = {
    bankIcon: string
    bankName:string
    orderNo: string
	orderTime: string
	orderMoney: number
	status: number
}

export interface IState {

}

export interface IProps {
   shopHistoryList: ShopHistoryItem[]

}
export interface IEvent {
    onClosePanel: () => void
}

@ccclass('Hall_shopHistoryPanel')
export class Hall_shopHistoryPanel extends BaseComponent<IState, IProps, IEvent> {
    private taskScheduler: TaskScheduler = new TaskScheduler()
	start() {

	}

    protected propertyNode = {
        /**关闭面板 */
        props_btn_spr_choose_close: new Node(),
        /** history的template*/
        props_hiatory_template: new Node(),
        props_ScrollView_choose:new Node(),
        props_content: new Node(),
        /**银行图标 */
        props_spr_bankIcon: new Node(),
        /**银行名称 */
        props_label_bankName: new Node(),
        /**银行账号 */
        props_label_number: new Node(),
        /**充值金额 */
        props_label_amount: new Node(),
        /**充值日期 */
        props_label_date: new Node(),
        /**支付状态 */
        props_label_state: new Node(),
        /**复制账号按钮 */
        props_btn_copy: new Node(),
        props_label_nodata:new Node(),
	}

	public props: IProps = {
        shopHistoryList:[]
	}

	public events: IEvent = {
        onClosePanel: () => { }

	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
        this.propertyNode.props_btn_spr_choose_close.on(Node.EventType.TOUCH_END, () => {
            hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
            this.events.onClosePanel()
        })

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if (key === "shopHistoryList") {
            // console.log("shopHistoryList",value.cur);
            value.cur.length && (this.propertyNode.props_label_nodata.active = false)
            this.updateHistoryItem(value.cur)
        }
    }

    // private updateHistoryItem(item: ShopHistoryItem[]) {
    //     this.propertyNode.props_content.removeAllChildren();
    //     const isFirst = this.propertyNode.props_content.children.length ? true : false;

    //     if (!isFirst && item.length > 5) {
    //         item.slice(0, 5).forEach((v, i) => {
    //            this.createItem(v)
    //         })
    //     } else {
    //         item.forEach((v, i) => {
    //             this.createItem(v)
    //         })
    //     }

    //     item.forEach((data, i) => {            
    //         if (i < 5) return
    //         this.taskScheduler.joinQueue(new Task((done) => {
    //             this.createItem(data)
    //             this.scheduleOnce(() => done(), 0.2)
    //         }))
    //     })
    // }

    
    private updateHistoryItem(item: ShopHistoryItem[]) {
        // 清空已有内容
        this.propertyNode.props_content.removeAllChildren();
    
        // 加载初始数据
        item.slice(0, 5).forEach((v, i) => {
            this.createItem(v)
        })
    
        // 监听滚动事件，实现懒加载
        const scrollView = this.propertyNode.props_ScrollView_choose.getComponent(ScrollView);
        scrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, () => {
            this.loadMoreDataIfNeeded(item);
        }, this);
    }
    
    private loadMoreDataIfNeeded(item: ShopHistoryItem[]) {
        const scrollView = this.propertyNode.props_ScrollView_choose.getComponent(ScrollView);
        const scrollOffset = scrollView.getScrollOffset();
        const contentSize = scrollView.content.getComponent(UITransform).contentSize;
        const scrollViewSize = scrollView.node.getComponent(UITransform).contentSize;
        
        if (contentSize.height > scrollViewSize.height) {
            // 当滚动到底部时加载更多数据
            const startIndex = this.propertyNode.props_content.children.length;
            
            const endIndex = Math.min(startIndex + 5, item.length); // 一次加载5个数据，可以根据需要调整
            for (let i = startIndex; i < endIndex; i++) {
                this.createItem(item[i]);
            }
        }
    }

    private createItem(v:ShopHistoryItem) {
        const historyItem = instantiate(this.propertyNode.props_hiatory_template)
        let lastQeqPicUrl = v.bankIcon

        assetManager.loadRemote(v.bankIcon, (err, asset: ImageAsset) => {
            if (this.propertyNode && !err && (asset.nativeUrl === lastQeqPicUrl)) {
                historyItem.getChildByName("props_spr_bankIcon").getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset)
            }
        })
        historyItem.getChildByName("props_label_bankName").getComponent(Label).string = v.bankName;                                             
        historyItem.getChildByName("props_label_number").getComponent(Label).string = v.orderNo;
        historyItem.getChildByName("props_label_amount").getComponent(Label).string = v.orderMoney + "";
        historyItem.getChildByName("props_label_date").getComponent(Label).string = v.orderTime;
        historyItem.getChildByName("props_label_state").getComponent(Label).color = this.changePayStateColor(v.status).color;
        historyItem.getChildByName("props_label_state").getComponent(Label).string = this.changePayStateColor(v.status).state;
        historyItem.active = true;
        historyItem.getChildByName("props_btn_copy").on(Node.EventType.TOUCH_END, () => {
            hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
            if (NATIVE) {
                if (sys.os === sys.OS.ANDROID) {
                    native.bridge.sendToNative(BridgeCode.COPY_CLIPBOARD, v.orderNo);
                }
            } else {
                copyToClipboard(v.orderNo);
                this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.HallCopy, {}, { placeStr: "已复制内容到剪切板" }), type: ToastType.SUCCESS }))
            }
        });
        
        this.propertyNode.props_content.addChild(historyItem);
    }

    /**
     * @param state 
     * 状态 1:处理中  2:成功  3:失败 4:待支付 5:异常
     */
    private changePayStateColor(state: number) {
        let status;
        if (state === 1) {
            status = {
                state:"Processing",
                color :new Color().fromHEX("#00c6ff")
            }
        } else if (state === 2) {
            status = {
                state:"Success",
                color :new Color().fromHEX("#34dc00")
            }
        } else if (state === 3) {
            status = {
                state:"Fail",
                color :new Color().fromHEX("#ff1010")
            }
        
        } else if (state === 4) {
            status = {
                state:"To be paid",
                color :new Color().fromHEX("#ff00fc")
            }
        }else if (state === 5) {
            status = {
                state:"Abnormal",
                color :new Color().fromHEX("#ff1010")
            }
        }
        return status
    }
    
    protected destroyCallBack(): void {
        this.taskScheduler.destoryQueue();
		this.taskScheduler.stopQueue(false)
	}

    protected bindUI(): void {
        
	}

	update(deltaTime: number) {

	}
}

