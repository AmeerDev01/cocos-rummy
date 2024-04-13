const isTest = false;
let httpUrl = "";
let wsUrl = "";
if(isTest) {
    httpUrl = "http://54.251.66.82:10001/hall/";
    wsUrl = "ws://192.168.110.29:18001/ws";
} else {
    httpUrl = "http://54.251.66.82:10001/hall/";
    wsUrl = "ws://192.168.110.243:18001/ws";
}
export const Crash_GameConfig = {
    isTest:isTest,
    HttpUrl: httpUrl,
    WsUrl: wsUrl,
    Version: '1.0.2',
    AppVersion: 1,
    TimeOut: 25000,
    gameId: 5
};
