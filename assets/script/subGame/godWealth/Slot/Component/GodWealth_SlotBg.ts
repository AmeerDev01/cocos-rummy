import { _decorator, Button, Animation , AudioSource, find, instantiate, Label, Layers, Material, Node, Prefab, sp, Sprite, SpriteFrame, SpriteRenderer, tween, UIOpacity, UITransform, Vec3, log } from 'cc';
import GodWealth_BaseComponent from './GodWealth_BaseComponent';
import { CommandDefine } from '../Const/CommandDefine';
import { RollerMediatorConst } from '../Mediator/RollerMediator';
import {bindClickEvent, getBgProxy} from '../GodWealth_utils';
import { AutoLaunchType } from '../Repositories/BgRepository';
import { global } from '../../../../hall';
import {NumberRoller} from "../utils/NumberRoller";
import {AudioManager, SceneBgMusic, SoundList} from "../Managr/AudioManager";
import { BuyType } from '../../../../hall/components/Hall_ShopPanel';
const { ccclass, property } = _decorator;

@ccclass('GodWealth_SlotBg')
export class GodWealth_SlotBg extends GodWealth_BaseComponent {

	//返回首页
	@property(Node)
	homeButton: Node = null

	//充值按钮
	@property(Node)
	topButton: Node = null

	//商城
	@property(Node)
	beliButton: Node = null

	//礼包
	@property(Node)
	speclalButton: Node = null

	//设置
	@property(Node)
	settingButton: Node = null

	@property(Node)
	startButton: Node = null

	@property(Node)
	baseBet: Node = null

	@property(Node)
	betAmount: Node = null

	@property(Node)
	lineCount: Node = null

	@property(Node)
	score: Node = null

	@property(Node)
	addShift: Node = null

	@property(Node)
	subtractShift: Node = null

	@property(Node)
	autoLaunch: Node = null

	@property(Node)
	ruleButton: Node = null

	@property(Node)
	
	spr_nomoney: Node = null

	@property(SpriteFrame)
	bg_1: SpriteFrame = null

	@property(Node)
	gameArea: Node = null

	@property(Node)
	addBet: Node = null

	@property(Node)
	subtractBet: Node = null

	@property(Node)
	maxBet: Node = null
	@property(Prefab)
	toast: Prefab = null
	@property(Node)
	propsToggleFast: Node = null

	@property(sp.SkeletonData)
	flyingCrane: sp.SkeletonData = null

    @property(Node)
    JackPotContent:Node=null

    @property(Node)
    JackPotItem:Node=null
    private GoldNumberRoller: NumberRoller = new NumberRoller();
    private timeAccumulator:number=0
	autoLaunchState=false
	startPos = null; // 初始触摸位置
	start() {
        setTimeout(()=>{
            this._nodes['Up_Feature'].setSiblingIndex(9999)
        },100)
	}
	protected bindUI(): void {
		// this.autoLaunch.children.forEach(child => {
		// 	child.on(Node.EventType.TOUCH_START, ({ target }) => {
		// 		(target as Node).getComponent(UIOpacity).opacity = 0
		// 	})
		// 	child.on(Node.EventType.TOUCH_END, ({ target }) => {
		// 		tween(target.getComponent(UIOpacity)).to(0.2, { opacity: 255 }).start();
		// 	})
		// })
		const flyCrane = this.startFlyingCrane()
		flyCrane.setScale(new Vec3(-1, 1, 1))
		this.scheduleOnce(() => {
			this.startFlyingCrane()
		}, 3)

		// 点击充值按钮
		this.topButton.on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            global.openShop()

		})
		// 点击商城按钮
		this.beliButton.on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            global.openShop()
		})
		// 点击礼包按钮
		this.speclalButton.on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            global.openShop(BuyType.TAS)
		})
		// 点击设置按钮
		this.settingButton.on(Node.EventType.TOUCH_END, () => {
            AudioManager.getInstance().playSound(SoundList.buttonClick);
            global.openPersonCenter(2)
		})
        let audio: any = this.node.addComponent(AudioSource);
        AudioManager.getInstance().setAudioSource(audio);
        AudioManager.getInstance().playMusic(SceneBgMusic.mainBg, true);
	}

	protected bindEvent(): void {
		// bindClickEvent(this.startButton, () => { })
	}

	/**更新下注金额 */
	public updateBetAmount(baseBetAmount: number, lineCount: number): void {
		const betAmount = baseBetAmount * lineCount
		let numberStr: string = betAmount.formatAmountWithCommas()
		this.lineCount.getComponent(Label).string = `${lineCount} × ${baseBetAmount}`;
		this.betAmount.getComponent(Label).string = betAmount + ''//numberStr
	}
    /**更新按钮状态 */
	public setBtnState(state,type=0,num?){
        if(type==0){ // 主游戏按钮
            this._nodes['STARTBG'].active=state
            this._nodes['scrollingThePicture'].active=!state
            this._nodes['START'].active=false
			this._nodes['AUTO'].active=false
        }else if(type==1){ // 小游戏按钮
            this._nodes['STARTBG'].active=false
            this._nodes['scrollingThePicture'].active=false
            this._nodes['START'].active=true
			this._nodes['AUTO'].active=false
        }else{ // 自动按钮
			this._nodes['scrollingThePicture'].active=false
            this._nodes['START'].active=false
			this._nodes['STARTBG'].active=false
			this._nodes['AUTO'].active=true
			console.log(num);
			this._nodes['AUTO'].getComponent(Label).string=num
		}
    }
	/**更新积分 */
	public updateScore(score: number): void {
        if(score==0){
            this._nodes['goodluck'].active=true
            this._nodes['bottom_score'].active=false
        }else {
            this._nodes['goodluck'].active = false
            this._nodes['bottom_score'].active = true
            this.score.getComponent(Label).string = score + ""
        }
	}
    public setBtnLabel(str){
        this._nodes['START'].getComponent(Label).string=str>0?str.toString():'0'
    }
	public Balance_tips(bl){
		this.spr_nomoney.active=bl
	}
	/**设置背景图片 */
	public setBg(bgName: 'bg_1' | 'bg_2') {
		this.node.getComponent(Sprite).spriteFrame = this[bgName]
	}
    // 更新金币数量
    public setGold(str){
        // 漂浮效果
        let label= this._nodes['Moeny_Bg'].getChildByName('number').getComponent(Label)
        let startNumberMini =parseInt(label.string.replace(/,/g, ""));
        if(startNumberMini - Number(str) == 0){
            return false
        }else{
			this._nodes['number2'].active=true
			let labelStr=''
			if(startNumberMini - Number(str)<0){
				labelStr='+'+ Math.abs(startNumberMini - Number(str))
			}else {
				labelStr='-'+ (startNumberMini - Number(str))
			}
			this._nodes['number2'].getComponent(Label).string= String(Number(labelStr).toFixed(0))
			let animation:Animation =this._nodes['number2'].getComponent(Animation)
			animation.play();
			// 动画播放
			this.GoldNumberRoller.startRolling(startNumberMini, str.toFixed(0), 500,label)
		}
        //this._nodes['Moeny_Bg'].getChildByName('number').getComponent(Label).string=Number(str).formatAmountWithCommas()
    }
	/**展示自动启动按钮组面板 */
	public triggeAutoLaunch(state?) {
		if(state!==undefined&&state===false){
			if(this.autoLaunchState){
				this.autoLaunch.getComponent(Animation).play('animation_autoLauncher_down')
				this.autoLaunchState=false
			}
			return
		}else{
			this.autoLaunchState=!this.autoLaunchState
			if(this.autoLaunchState){
				this.autoLaunch.getComponent(Animation).play('animation_autoLauncher_up')
			}else{
				this.autoLaunch.getComponent(Animation).play('animation_autoLauncher_down')
			}
		}
	}
	/**自动按钮设置为激活状态 */
	public setActiveButton(autoLaunchType: AutoLaunchType) {
		this.autoLaunch.children.forEach((child, index) => {
			if (index === autoLaunchType) {
				child.getComponent(UIOpacity).opacity = 60
			} else {
				child.getComponent(UIOpacity).opacity = 255
			}
		})
		if(this.autoLaunchState){
			this.autoLaunch.getComponent(Animation).play('animation_autoLauncher_down')
			this.autoLaunchState=false
		}
	}
    /**set jackPOT */
    public setJACKPOT(jackPotData){
        let sprList=getBgProxy().getSpriteFrames()
        this.JackPotContent.destroyAllChildren()
        jackPotData.forEach(item=>{
          let headImgUrl=`head_circle_${item.avatarIndex}`
           let spr= sprList.find(item=>{
                return item.name==headImgUrl
            })
           let node=instantiate(this.JackPotItem)
            node.getChildByName('One_Right').getComponent(Label).string=item.nickName+''
            find('One_Left/One_Label',node).getComponent(Label).string=item.winningAmount.formatAmountWithCommas()
            find('One_Left/One_head',node).getComponent(Sprite).spriteFrame =spr
            node.active=true
            this.JackPotContent.addChild(node)
        })
    }
    handoffJACKPOT(){
        this._nodes['ScrollView'].active=!this._nodes['ScrollView'].active
    }
	/**启动飞鹤 */
	public startFlyingCrane() {
		const node = new Node("flyingCrane")
		const ske = node.addComponent(sp.Skeleton)
		ske.skeletonData = this.flyingCrane
		ske.animation = 'animation'
		this.node.addChild(node)
		node.setSiblingIndex(1)
		node.setPosition(new Vec3(0, 0))
		node.layer = Layers.Enum.UI_2D
		return node
		// node.setPosition(new Vec3(640, -250))
		// tween(node).to(3, { position: new Vec3(-640, 250) }).call(() => {
		// 	this.startFlyingCrane()
		// }).start()
	}
    // 设置小游戏按钮置灰
    setDis_btn(disable:boolean){
        this._nodes['SZX_-'].getComponent(Sprite).grayscale = disable
        this._nodes['SZX_+'].getComponent(Sprite).grayscale = disable
        this._nodes['maxBet'].getComponent(Sprite).grayscale = disable
    }
	setGreyOut(str,disable){
        this._nodes[str].getComponent(Sprite).grayscale = disable
    }
	// setjian(disable){
	// 	this._nodes['SZX_-'].getComponent(Sprite).grayscale = disable
	// }
	// setjia(disable){
	// 	this._nodes['SZX_+'].getComponent(Sprite).grayscale = disable
    //     this._nodes['maxBet'].getComponent(Sprite).grayscale = disable
	// }
	/**设置面板按钮可用性 */
	setDisable(disable: boolean) {
		// const op = this.startButton.getComponent(UIOpacity)
		// op.opacity = disable ? 100 : 255
		const button = this.startButton.getComponent(Button); // 获取节点的 Sprite 组件
		// button.interactable = disable
		const sprite = this.startButton.getComponent(Sprite);
		sprite.grayscale = disable
		// const material = Material.getBuiltinMaterial(Material.BUILTIN_NAME.GRAY_SPRITE); // 获取置灰材质
		// const material = Material.getInstantiatedBuiltinMaterial(Material.BUILTIN_NAME.GRAY_SPRITE);
		// node.setMaterial(material, 0);

		// const mat = new Material();
		// mat.initialize({
		// 	// 通过 effect 名指定材质使用的着色器资源
		// 	effectAsset: 'pipeline/skybox',
		// 	defines: {
		// 		USE_RGBE_CUBEMAP: true
		// 	}
		// })
		// this.node.getComponent(Sprite).setMaterial(Material.getBuiltinMaterial(Material.BUILTIN_NAME.GRAY_SPRITE + ''), 0);
	}
	update(deltaTime: number) {
        this.timeAccumulator += deltaTime;
        if (this.timeAccumulator >= 3) {
            this.timeAccumulator = 0;
            AudioManager.getInstance().updateTheMusicStatus()
        }
        this.GoldNumberRoller.update(deltaTime); // 手动触发滚动逻辑
	}
}

