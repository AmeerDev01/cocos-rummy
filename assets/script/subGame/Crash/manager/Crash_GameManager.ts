// import WsManager from "../../net/WsManager";
import { Game, game } from "cc";
import Crash_WsManager from "../net/Crash_WsManager";
import { LANG } from "../const/Crash_BaseConst";
import LocalStorageUtils, { LOCAL_DATA_KEY } from "../utils/LocalStorageUtils";
// import AudioManager from "./AudioManager";
// import { sceneMgr } from "./SceneManager";

export default class Crash_GameManager {

    private lang: LANG = LANG.EN;

    private serverTm = null;
    private beginTm = null;

    private isLogout: boolean = false;
    private isLogin: boolean = false;

    public cacert: any = null;

    constructor() {
        console.log("GameManager New!!!!!!!!!!");
        this.lang = LocalStorageUtils.getItem(LOCAL_DATA_KEY.LANG, Number, LANG.EN);
    }

    private static instance: Crash_GameManager = null;
    public static getInstance() {
        if(!this.instance){
            this.instance = new Crash_GameManager();
        }
        return this.instance;
    }

    public init(){
        game.off(Game.EVENT_SHOW, this.onGameShow, this);
        game.off(Game.EVENT_HIDE, this.onGameHide, this);
        game.on(Game.EVENT_SHOW, this.onGameShow, this);
        game.on(Game.EVENT_HIDE, this.onGameHide, this);
    }

    public destroy() {

    }

    private onGameShow() {
       // AudioManager.getInstance().resumeMusic();
    }

    private onGameHide() {
       // AudioManager.getInstance().pauseMusic();
    }

    public setServerTime( serverTime: number ) {
        this.serverTm = serverTime;
        this.beginTm = new Date().getTime();
    }

    public getServerTime(): number {
        if(!this.serverTm) {return null;}
        let tm = new Date().getTime();
        return this.serverTm + (tm - this.beginTm);
    }

    public logout() {
        this.isLogout = true;
        this.isLogin = false;
        // LocalStorageUtils.setItem(LOCAL_DATA_KEY.TOKEN, "");
        Crash_WsManager.getInstance().closeConnect();
    }

    public setIsLogout(bl: boolean) { this.isLogout = bl; }
    public getIsLogout(): boolean { return this.isLogout; }

    public setIsLogin(bl: boolean) { this.isLogin = bl; }
    public getIsLogin() { return this.isLogin; }

    public setLang(lang: LANG) {
        this.lang = lang;
        LocalStorageUtils.setItem(LOCAL_DATA_KEY.LANG, this.lang);
    }

    public getLang(): LANG {
        return this.lang;
    }

    public update(ft) {


    }


}
