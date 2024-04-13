import { _decorator, Component, Node,SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;
import UserInfo from "../entity/Crash_Userinfo";
import Crash_NetMsgDispatcher from '../net/Crash_NetMsgDispatcher';
import {ProtocolCode} from "../net/protocol/ProtocolDef";
@ccclass('DataManager')
export class Crash_DataManager {
    private static instance: Crash_DataManager = null;
    userInfo:UserInfo=null
    numberSpriteFrame:SpriteFrame[]=null
    crashStageVo:{gameType: number,seconds: string}=null
    lotteryData:{drawPrizeNum: number,seconds: number}=null
    headSpriteFrame:[]
    BettingCondition:boolean=false
    currentParameters:number=0
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new Crash_DataManager();
        }
        return this.instance;
    }
    constructor() {
        console.log("DataManager New!!!!!!!!!!");
        this.init();
    }
    public init() {
        this.userInfo = new UserInfo();
        this.regNetCallBack();
    }
    getCurrentParameters(){
        return this.currentParameters
    }
    setCurrentParameters(val){
        this.currentParameters=val
    }
    setBettingCondition(bl){
        this.BettingCondition=bl
    }
    getBettingCondition(bl){
        this.BettingCondition=bl
    }
    getUserInfo(): UserInfo {
        return this.userInfo;
    }
    getCrashStageVo(){
        return this.crashStageVo
    }
    setHeadSpriteFrame(data){
        this.headSpriteFrame=data
    }
    getHeadSpriteFrame(){
        return  this.headSpriteFrame
    }
    setCrashStageVo(data:any){
        this.crashStageVo=data
    }
    getLotteryData(){
        return this.lotteryData
    }
    setNumberSpriteFrame(data:any){
        this.numberSpriteFrame=data
    }
    getNumberSpriteFrame(){
        return  this.numberSpriteFrame
    }
    regNetCallBack(){
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.RES_ROOM_TOTAL_BETS, this, this.bettingSituation);
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.RES_TIME_SYNCHRONIZATION, this, this.timeSynchronization);
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.RES_LOTTERY_RETURN, this, this.lottery);
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.RES_SETTLEMENT_RETURN, this, this.settlement);
        Crash_NetMsgDispatcher.getInstance().regCallBack(ProtocolCode.REFRESH_COINS, this, this.refreshCoins);
    }
    bettingSituation(bl, data, args){
        console.log(data)
        this.getUserInfo().setRoomInfoVos(data.data)
    }
    timeSynchronization(bl, data, args){
       this.crashStageVo=data.crashStageVo
       this.getUserInfo().setOddsList(data.crashStageVo.list)
    }
    lottery(bl, data, args){
        this.lotteryData=data.data
    }
    settlement(bl, data, args){
        if(data.data!==undefined){
            console.log(data.data[0])
            this.getUserInfo().setUserInfo(data.data[0])
        }
    }
    refreshCoins(bl, data, args){
        this.getUserInfo().setGold(data.data)
    }
    private remNetCallBacks() {
        Crash_NetMsgDispatcher.getInstance().removeAllProtocolByObj(this);
    }
    public destroy() {
        if(this.userInfo) {
            this.userInfo = null;
        }
        this.remNetCallBacks();
    }
}


