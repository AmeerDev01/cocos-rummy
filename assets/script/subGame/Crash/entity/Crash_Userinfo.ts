import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('CrashUserinfo')
export default class Crash_Userinfo {
    private myInfo:{gold:number,icon:number,memberId:number,memberName:string,total:string}=null
    private oddsList:Array<number>=null
    private roomInfoVos:Array<{}>=null
    private tableId:string=null
    setUserInfo( userInfo: any ) {
       this.myInfo=userInfo
    }
    setGold(num:number){
        this.myInfo.gold=num
    }
    getUserInfo(){
        return this.myInfo
    }
    setOddsList(list:any){
        this.oddsList=list
    }
    getOddsList(){
        return this.oddsList
    }
    setRoomInfoVos(roomInfoVos:any){
        this.roomInfoVos=roomInfoVos
    }
    getRoomInfoVos(){
       return  this.roomInfoVos
    }
    setTableId(tableId:string){
        this.tableId=tableId
    }
    getTableId(){
        return this.tableId
    }
}


