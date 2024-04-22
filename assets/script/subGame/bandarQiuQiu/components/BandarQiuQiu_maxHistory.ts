import { _decorator,Color,Graphics,instantiate,Label,Node, Sprite, SpriteFrame, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodeByNameDeep, getNodePositionInCanvas, initToggle } from '../../../utils/tool';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { playBtnClick, sourceManageSelector } from '../index';
import { GameStatus, History } from "../type"
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	maxHistory: History[],
	gameStatus: GameStatus,
	
	
}
export interface IEvent {
	onClosePanel:()=>void
}


@ccclass('BandarQiuQiu_maxHistory')
export class BandarQiuQiu_maxHistory extends BaseComponent<IState, IProps, IEvent> {
	private line = [];
	
	start() {
    
	 }

    protected propertyNode = {
        props_layout_history_item:new Node(),
		props_history_content: new Node(),
		props_line_content:new Graphics(),
		props_history_bg_off:new Node(),
	}

	public props: IProps = {
		maxHistory: null,
		gameStatus: null,
	}

	public events: IEvent = {
		onClosePanel:()=>{}
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {

		this.propertyNode.props_history_bg_off.on(Node.EventType.TOUCH_END, () => {
			playBtnClick()
			this.clearTheCacheData()
			this.events.onClosePanel();
			
	   })
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "maxHistory") {
			if (value.cur && value.cur.length > 0) {
				this.createHistory(value.cur)
			}
			
		}

		if (key === "gameStatus") {
			if (value.cur === GameStatus.WAIT) {
				// this.line=[]
			}
		}
	}

	/**创建历史记录 */
	private createHistory(maxHistory) {
		this.line = [];
		let startPosition=new Vec3(0,10)
		this.propertyNode.props_layout_history_item.removeAllChildren();
		maxHistory.reverse().forEach((item, i) => {
			if (i === 0) {
				if (item.win === 1) {
					startPosition=new Vec3(-64,10)
				} else if (item.win === 2) {
					startPosition=new Vec3(64,10)
				}else if (item.win === 3) {
					startPosition=new Vec3(0,10)
				}
				this.line.push(startPosition)
			}
			let nextP;
			if (i != maxHistory.length - 1) {
				nextP = maxHistory[i + 1].win;
			}
			
			let historyContent = instantiate(this.propertyNode.props_history_content);
			let blue = 4; let red = 4; let green = 4;// 4代表输 1为蓝方赢  2为红方赢  3为绿方赢
			if (item.win === 1) {
				blue = 1;
			} else if (item.win === 2) {
				red = 2;
			}else if (item.win === 3) {
				green = 3;
			}
			getNodeByNameDeep("props_spr_icon_blue", historyContent).getComponent(Sprite).spriteFrame = this.getSpriteFrame(blue);
			getNodeByNameDeep("label_blue_cardNum", historyContent).getComponent(Label).string = item.blueNum + "";
			getNodeByNameDeep("props_spr_icon_red", historyContent).getComponent(Sprite).spriteFrame = this.getSpriteFrame(red);
			getNodeByNameDeep("label_red_cardNum", historyContent).getComponent(Label).string = item.redNum + "";
			getNodeByNameDeep("props_spr_icon_green", historyContent).active = green === 3;
			getNodeByNameDeep("props_spr_blue_cardType", historyContent).getComponent(Sprite).spriteFrame = item.blueType > 1 ? this.getSpecialCard(item.blueType) : this.getSpecialCard(2);
			getNodeByNameDeep("props_spr_blue_cardType", historyContent).active = item.blueType > 1;
			getNodeByNameDeep("props_spr_red_cardType", historyContent).getComponent(Sprite).spriteFrame = item.redType > 1 ? this.getSpecialCard(item.redType) : this.getSpecialCard(2);
			getNodeByNameDeep("props_spr_red_cardType", historyContent).active = item.redType > 1;

			this.propertyNode.props_layout_history_item.addChild(historyContent);
			if (i != maxHistory.length - 1) {
				let nextPosition=this.compareCoordinates(startPosition,nextP,i+1)
				this.line.push(nextPosition)
			}
            
			
		})
       
		if (this.line && this.line.length > 0) {
			
			window.setTimeout(() => {	
				this.drawLine(this.line);
			},200)
		}
	}

	private compareCoordinates(startPosition, nextP, i) {
		    let nextPosition;
			if (startPosition.x > 0) {
				if (nextP === 1) {
					nextPosition=new Vec3(startPosition.x-128,startPosition.y-(i*60)) 
				} else if (nextP === 2) {
					nextPosition=new Vec3(startPosition.x,startPosition.y-(i*60)) 
				}else if (nextP === 3) {
					nextPosition=new Vec3(startPosition.x-64,startPosition.y-(i*60))
				}
			} else if (startPosition.x < 0) {
				if (nextP === 1) {
					nextPosition=new Vec3(startPosition.x,startPosition.y-(i*60)) 
				} else if (nextP === 2) {
					nextPosition=new Vec3(startPosition.x+128,startPosition.y-(i*60)) 
				}else if (nextP === 3) {
					nextPosition=new Vec3(startPosition.x+64,startPosition.y-(i*60))
				}
			} else {
				if (nextP === 1) {
					nextPosition=new Vec3(startPosition.x-64,startPosition.y-(i*60)) 
				} else if (nextP === 2) {
					nextPosition=new Vec3(startPosition.x+64,startPosition.y-(i*60)) 
				}else if (nextP === 3) {
					nextPosition=new Vec3(startPosition.x,startPosition.y-(i*60))
				}
		    }

		return nextPosition
	}

	/**画线 */
	private drawLine(line) {
		this.propertyNode.props_line_content.clear();
		// 设置线条宽度和颜色
		this.propertyNode.props_line_content.lineWidth = 5;
		this.propertyNode.props_line_content.strokeColor = Color.YELLOW;
		for (let i = 0; i < line.length; i++){
			this.propertyNode.props_line_content.moveTo(line[i].x, line[i].y)
			if (i != line.length - 1) {
				this.propertyNode.props_line_content.lineTo(line[i+1].x, line[i+1].y);
			}
			
		}
		this.propertyNode.props_line_content.stroke()
	}

	/**清除缓存数据 */
	private clearTheCacheData() {
		this.line=[]
	}

	/**获取特殊牌资源 */
	private getSpecialCard(result) {
		let fileName = '';
		if (result === 4) {
			fileName = SpriteFramePathDefine.S;
		}else if (result === 3) {
			fileName = SpriteFramePathDefine.T;
		} else if (result === 2) {
			fileName = SpriteFramePathDefine.Q;
		} 
		return sourceManageSelector().getFile(fileName).source;
	}

    private getSpriteFrame(result:number): SpriteFrame {
        let fileName = '';
        if (result === 1) {
            fileName = SpriteFramePathDefine.BANDARQIUQIU_HISTORY_BLUE_WIN;
        } else if (result === 2) {
            fileName = SpriteFramePathDefine.BANDARQIUQIU_HISTORY_RED_WIN;
        }  else if (result === 3) {
            fileName = SpriteFramePathDefine.BANDARQIUQIU_HISTORY_LV_WIN;
        } else if (result === 4) {
            fileName = SpriteFramePathDefine.BANDARQIUQIU_HISTORY_LOSE;
        } 
        return sourceManageSelector().getFile(fileName).source;
    }

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

