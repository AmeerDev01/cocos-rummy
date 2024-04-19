import { _decorator, Button, Label, Node, Prefab, find, Sprite, SpriteFrame, tween, UIOpacity, sp, Vec3, AudioSource, instantiate, Animation, log } from 'cc';
import BaseComponent from './BaseComponent';
import { AutoLaunchType } from '../Repositories/BgRepository';
import { global } from '../../../../hall';
import { AudioManager, SoundList, SceneBgMusic } from '../Managr/AudioManager';
import { NumberRoller } from "../utils/NumberRoller";
import { MW_Shake } from "../utils/MW_Shake";
import { getBgProxy, getSocketProxy } from '../utils';
import { BuyType } from '../../../../hall/components/Hall_ShopPanel';
const { ccclass, property } = _decorator;

@ccclass('Egypt_SlotBg')
export class Egypt_SlotBg extends BaseComponent {
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

    spr_nomoney: Node = null

    @property(Node)
    subtractShift: Node = null

    @property(Node)
    autoLaunch: Node = null

    @property(Node)
    ruleButton: Node = null

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
    JackPotContent: Node = null
    @property(Node)
    JackPotItem: Node = null
    @property(Node)
    propsToggleFast: Node = null
    private GoldNumberRoller: NumberRoller = new NumberRoller();
    private timeAccumulator: number = 0
    private jackTotalNumberRoller: NumberRoller = new NumberRoller();
    private listState = true
    autoLaunchState=false
    start() {
        setTimeout(() => {
            this._nodes['Up_Feature'].setSiblingIndex(9999)
            this._nodes['bg1'].setSiblingIndex(0)
            this._nodes['spr_egyptSg_bg'].setSiblingIndex(0)
        }, 100)
        this._nodes['btn_jackPot'].on(Node.EventType.TOUCH_END, () => {
            this.listState = !this.listState
            this.set_JACKPOT_list()
        })
        // this._nodes['ScrollView'].on(Button.EventType.CLICK, () => {
        //     this.listState = !this.listState
        //     this.set_JACKPOT_list()
        // })
    }
    set_JACKPOT_list() {
        this._nodes['btn_scrollView'].setScale(1, this.listState ? -1 : 1)
        // tween(this._nodes['ScrollView']).to(tweenDuration, {  position: new Vec3(this.listState?-588:-1000, 162, 0)}, { easing: "linear",}).start();
        tween(this._nodes['ScrollView']).to(0.2, { height: this.listState ? 345 : 0, }, { easing: "sineIn", }).start();
        tween(this._nodes['view']).to(0.1, { height: this.listState ? 310 : 0, }, { easing: "sineIn", }).start();
    }
    /**更新下注金额 */
    public updateBetAmount(baseBetAmount: number, lineCount: number): void {
        const betAmount = baseBetAmount * lineCount
        let numberStr: string = betAmount.formatAmountWithCommas()
        // if (betAmount > 1000 * 100) {
        // 	//显示K
        // } else if (betAmount > 10000 * 100) {
        // 	//显示M
        // } else {
        // 	//转为科学计数法
        // 	numberStr = betAmount.formatAmountWithCommas()
        // }
        this.lineCount.getComponent(Label).string = `${lineCount} × ${baseBetAmount}`;
        this.betAmount.getComponent(Label).string = betAmount + ''//numberStr
    }
    public setBtnLabel(str) {
        this._nodes['START'].getComponent(Label).string = str + ""
        this.listState = false
        // this.set_JACKPOT_list()
    }
    // 更新金币数量
    public setGold(str) {
        let label = this._nodes['Moeny_Label'].getComponent(Label)
        let startNumberMini = parseInt(label.string.replace(/,/g, ""));
        if (startNumberMini - Number(str) == 0) {
            return false
        } else {
            // 漂浮效果
            this._nodes['number2'].active = true
            let labelStr = ''
            if (startNumberMini - Number(str) < 0) {
                labelStr = '+' + Math.abs(startNumberMini - Number(str))
            } else {
                labelStr = '-' + (startNumberMini - Number(str))
            }
            this._nodes['number2'].getComponent(Label).string = String(Number(labelStr).toFixed(0))
            let animation: Animation = this._nodes['number2'].getComponent(Animation)
            animation.play();
            // 动画播放
            this.GoldNumberRoller.startRolling(startNumberMini, str.toFixed(0), 500, label)
        }

    }
    /**更新积分 */
    public updateScore(score: number): void {
        if (score == 0) {
            this._nodes['goodluck'].active = true
            this._nodes['bottom_score'].active = false
        } else {
            this._nodes['goodluck'].active = false
            this._nodes['bottom_score'].active = true
            this.score.getComponent(Label).string = score + ""
        }
    }
    /**更新按钮状态 */
    public setBtnState(state, type = 0, num?) {
        if (type == 0) { // 主游戏按钮
            this._nodes['STARTBG'].active = state
            this._nodes['scrollingThePicture'].active = !state
            this._nodes['START'].active = false
            this._nodes['AUTO'].active = false
        } else if (type == 1) { // 小游戏按钮
            this._nodes['STARTBG'].active = false
            this._nodes['scrollingThePicture'].active = false
            this._nodes['START'].active = true
            this._nodes['AUTO'].active = false
        } else { // 自动按钮
            this._nodes['scrollingThePicture'].active = false
            this._nodes['START'].active = false
            this._nodes['STARTBG'].active = false
            this._nodes['AUTO'].active = true
            this._nodes['AUTO'].getComponent(Label).string = num
        }
    }
    /**set jackPOT */
    public setJACKPOT(jackPotData) {
        let sprList = getBgProxy().getSpriteFrames()
        this.JackPotContent.destroyAllChildren()
        jackPotData.forEach(item => {
            let headImgUrl = `head_circle_${item.avatarIndex}`
            let spr = sprList.find(item => {
                return item.name == headImgUrl
            })
            let node = instantiate(this.JackPotItem)
            node.getChildByName('One_Right').getComponent(Label).string = item.nickName + ''
            find('One_Left/One_Label', node).getComponent(Label).string = item.winningAmount.formatAmountWithCommas()
            find('One_Left/One_head', node).getComponent(Sprite).spriteFrame = spr
            node.active = true
            this.JackPotContent.addChild(node)
        })
    }
    public Balance_tips(bl) {
        this.spr_nomoney.active = bl
    }
    /**设置背景图片 */
    public setBg(bgName: 'bg_1' | 'bg_2') {
        this.node.getComponent(Sprite).spriteFrame = this[bgName]
    }
    /**展示自动启动按钮组面板 */
    public triggeAutoLaunch(state?) {
        if(state===false){
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
    public set_jack_total(num) {
        let label: Label = this._nodes['Label_jackpot'].getComponent(Label)
        let startNumberMajor = parseInt(label.string.replace(/,/g, ""));
        this.jackTotalNumberRoller.startRolling(startNumberMajor, num, 500, label)
    }
    // 初始化插槽
    public initSlot() {
        let type = getSocketProxy().getTransferGameInfo().gameType()
        if (type == 0) {
            this.slotSwitching(true)
            this._nodes['spr_egyptSg_bg'].active = false
        } else {
            this.slotSwitching(false)
            this._nodes['spr_egyptSg_bg'].active = true
        }
    }
    private animationType: number;
    public switchAnimations(type, done) {
        this.animationType = type;
        // console.log('++++++++++++++++++++++switchAnimations +++++++++++++++++ ', type);
        this._nodes['aiji_kaiguanmen'].active = true
        if (type === 0) {
            this.reverseAnimation(done, type)
        }
        else if (type === 1) {
            this.animationMethods(done, type)
        }
        else if (type === 2) {
            this.animationMethods(done, type)
        }
    }
    // 游戏播放倒序
    reverseAnimation(done, type) {
        let kaiguanmen = this._nodes['aiji_kaiguanmen'].getComponent(sp.Skeleton)
        kaiguanmen.setAnimation(0, 'shimen_kaimen', false)
        let count = 0
        tween(this._nodes['aiji_kaiguanmen'])
            .to(3, { scale: new Vec3(1, 1, 1) }).start()
        this.monitorAnimations(kaiguanmen, type, (entry) => {
            count++
            if (count === 1) {
                kaiguanmen.setAnimation(0, 'shimen_guangmen', false)
                this.node.getComponent(MW_Shake).shake(this.node, 0.2, 0, 20)
            }
            else {
                this.slotSwitching(true)
                kaiguanmen.setAnimation(0, 'shimen_guanmenhuocheng', false)
                this._nodes['aiji_kaiguanmen'].active = false
                this._nodes['spr_egyptSg_bg'].active = false
                // console.log('reverseAnimation ++++++++++++++++++++++++++++++++++ done');
                done && done();
            }
        })
    }
    animationMethods(done, type) {
        let skeletonLeft = this._nodes['skeletonLeft'].getComponent(sp.Skeleton)
        skeletonLeft.setAnimation(0, 'dynamic', false)
        let skeletonRight = this._nodes['skeletonRight'].getComponent(sp.Skeleton)
        skeletonRight.setAnimation(0, 'dynamic', false)
        this.monitorAnimations(skeletonRight, type, () => {
            this._nodes['aiji_kaiguanmen'].active = true
            this.scheduleOnce(() => {
                tween(this._nodes['aiji_kaiguanmen'])
                    .to(2, { scale: new Vec3(3, 3, 3) }).start()
            }, 4)
            let kaiguanmen = this._nodes['aiji_kaiguanmen'].getComponent(sp.Skeleton)
            kaiguanmen.setAnimation(0, 'shimen_guangmen', false)
            let count = 0
            this.monitorAnimations(kaiguanmen, type, (entry) => {
                count++
                if (count === 1) {
                    kaiguanmen.setAnimation(0, 'shimen_kaimen', false)
                    this._nodes['spr_egyptSg_bg'].active = true
                    this.node.getComponent(MW_Shake).shake(this.node, 0.2, 0, 20)
                } else {
                    this.slotSwitching(false)
                    kaiguanmen.setAnimation(0, 'shimen_guanmenhuocheng', false)
                    this._nodes['aiji_kaiguanmen'].active = false
                    count = 0
                    // console.log('animationMethods ------------------------------------- done');
                    done && done();
                }
            })
        })
    }
    // 动画播放一次
    public monitorAnimations(Skeleton: sp.Skeleton, type: number, onEndCall?: (entry: sp.spine.TrackEntry) => void) {
        Skeleton.setCompleteListener((entry: sp.spine.TrackEntry) => {
            // console.log('monitorAnimations =========================== ', type);
            if (this.animationType === type) {
                onEndCall(entry)
            }
        })
    }
    //滚槽切换
    slotSwitching(bl) {// true 游戏主游戏 false 其他游戏
        this._nodes['bg1'].active = bl
        this._nodes['skeletonLeft'].active = bl
        this._nodes['skeletonRight'].active = bl
    }
    // 设置小游戏按钮置灰
    setDis_btn(disable: boolean) {
        this._nodes['SZX_-'].getComponent(Sprite).grayscale = disable
        this._nodes['SZX_+'].getComponent(Sprite).grayscale = disable
        this._nodes['maxBet'].getComponent(Sprite).grayscale = disable
    }
    setGreyOut(str,disable){
        this._nodes[str].getComponent(Sprite).grayscale = disable
    }
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
        this.jackTotalNumberRoller.update(deltaTime); // 手动触发滚动逻辑
    }
    protected bindUI(): void {
        // const flyCrane = this.startFlyingCrane()
        // flyCrane.setScale(new Vec3(-1, 1, 1))
        // this.scheduleOnce(() => {
        // 	this.startFlyingCrane()
        // }, 3)
        // 点击首页按钮
        // this.homeButton.on(Node.EventType.TOUCH_END, () => {
        //     AudioManager.getInstance().playSound(SoundList.buttonClick);
        //     AudioManager.getInstance().closeMusic(()=>{
        //         global.closeSubGame()
        //     });
        // })
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
}

