import { _decorator, Component, Node, assetManager, director, ProgressBar, AssetManager, Prefab, instantiate, SpriteFrame, Texture2D, Label } from 'cc';
import { Crash_GameConfig } from "./config/Crash_GameConfig";
import Crash_WsManager from "./net/Crash_WsManager";
import { Crash_DataManager } from "./manager/Crash_DataManager";
import { UserLoginProtocol } from "./net/protocol/HttpProtocol";
import { ProtocolCode } from "./net/protocol/ProtocolDef";
import Crash_NetMsgDispatcher from './net/Crash_NetMsgDispatcher';
import { AudioManager } from "./manager/AudioManager";
import {global, lang} from "../../hall";
import { initConfig, SubGameRunState } from '../../hall/config';
import {addToastAction, setSubGameRunState} from "../../hall/store/actions/baseBoard";
const { ccclass, property } = _decorator;
//场景类
@ccclass('CrashMain')
export class Crash_Main extends Component {
    // ab包
    private BUNDLE = "Crash";
    //预加载资源
    private PRELOAD_DIR = "res/preload";
    // 入口预制体
    private ENTRY_PREFAB = "loader";
    private BODY_PREFAB = "main";
    private ApplicationGlobal: Node = null
    private lbVersion: Label = null
    private progressBar: ProgressBar = null
    start() {
        this.init()
    }
    public init(node?) {
        if (node) {
            this.ApplicationGlobal = node
        }
        this.createConnect(() => {
            this.scheduleOnce(()=>{
                assetManager.loadBundle(this.BUNDLE, (_error, _bundle) => {
                    if (_bundle) {
                        this.preload(_bundle);
                    } else {
                        console.error(_error.stack);
                    }
                });
            },1)
        })
    }
    private async preload(_bundle: AssetManager.Bundle) {
        try{
            await AudioManager.getInstance().init(_bundle)
        }catch(e) {
            global.hallDispatch(addToastAction({content: String(e)}))
        }
        _bundle.load("res/preload/loader", (progress, total) => {
            global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING))
            global.setSubGameGate(Crash_GameConfig.gameId, (progress / total))
        }, (err, assets) => {
            if (err) {
                console.error(err);
                return;
            }
            if (!global.isAllowOpenSubGame(Crash_GameConfig.gameId)) return
            global.hallDispatch(setSubGameRunState(SubGameRunState.READY))
            let _prefabPath = `${this.PRELOAD_DIR}/${this.ENTRY_PREFAB}`
            let _prefab: Prefab = _bundle.get(_prefabPath, Prefab);
            let _node = instantiate(_prefab);
            this.lbVersion = _node.getChildByName("Version").getComponent(Label)
            this.progressBar = _node.getChildByName("loadProgress").getComponent(ProgressBar)
            _node.getChildByName("props_btn_return").on(Node.EventType.TOUCH_END, () => {
                Crash_WsManager.getInstance().closeConnect()
                global.closeSubGame()
            })
            // this.lbVersion.string =Crash_GameConfig.Version;
            this.progressBar.progress = 1;
            this.ApplicationGlobal.addChild(_node);
            _bundle.loadDir('res/main/head', SpriteFrame, null, (err, SpriteFrames) => {
                if (err) {
                    console.log(`theResourceFailedToLoad ${name}：`, err);
                }
                Crash_DataManager.getInstance().setHeadSpriteFrame(SpriteFrames)
            })
            // 数字弹窗
            _bundle.loadDir("res/main/number", SpriteFrame, (err, assets) => {
                if (err) {
                    console.error(err);
                    return;
                }
                Crash_DataManager.getInstance().setNumberSpriteFrame(assets)
                // let timer=setInterval(()=>{
                //     console.log(Crash_WsManager.getInstance().wsState)
                //      if(Crash_WsManager.getInstance().wsState === 2 ){
                //          this.loadPreload( this.aaa)
                //          clearInterval(timer)
                //      }
                //  },500)
                setTimeout(() => {
                    this.loadPreload(_bundle)
                }, 2000)
            })
        })
    }
    loadPreload(_bundle) {
        _bundle.loadDir(this.PRELOAD_DIR, (_finished: number, _total: number) => {
            this.progressBar.progress = 1 - _finished / _total;
            this.lbVersion.string = (_finished / _total * 100).toFixed(0) + '%'
        }, (error, data) => {
            this.lbVersion.string=lang.write(k => k.WebSocketModule.GameInit, {}, { placeStr: "Game init..." })
            global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
            let _prefabPath = `${this.PRELOAD_DIR}/${this.BODY_PREFAB}`
            let _prefab: Prefab = _bundle.get(_prefabPath, Prefab);
            let _node = instantiate(_prefab);
            if (this.ApplicationGlobal) {
                this.ApplicationGlobal.addChild(_node);
            } else {
                this.node.addChild(_node);
            }
            this.progressBar.node.parent.destroy()
            this.progressBar.node.active = false;
        })
    }
    createConnect(cb) {
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.RES_USER_INFORMATION, this, this.bettingSituation);
        initConfig().then((response) => {
            const item = response.gameConfig.find(item => item.id === 5)
            if (Crash_GameConfig.isTest) {
                Crash_WsManager.getInstance().connect(Crash_GameConfig.WsUrl);
            } else {
                Crash_WsManager.getInstance().connect(item.ws);
            }
            cb()
        })
    }
    bettingSituation(bl,data){
        if(!bl){
            global.hallDispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.socketConnectAuthFaild, {}, { placeStr: "认证失败" }) }))
            AudioManager.getInstance().closeMusic(()=>{
                global.closeSubGame({confirmContent: lang.write(k =>  k.WebSocketModule.ConfigGameFaild)})
            })
        }
    }
    stopCrash_WsManage() {
        Crash_WsManager.getInstance().closeConnect()
    }
}
