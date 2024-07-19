import { listenerFactoy } from "../../common/listenerFactoy";
import { initConfig, subGameList } from "../../config/config";
import config from "./config";
import { ToastType, addToastAction } from "../../hall/store/actions/baseBoard";
import { global, lang } from "../../hall";
import WebSocketStarter, {
  WebSocketDriver
} from "../../common/WebSocketStarter";
import { SKT_OPERATION } from "../../common/allEnums";
import { SKT_MAG_TYPE } from "../../common/allEnums";

export default () => {
  return new Promise((resolve, reject) => {
    initConfig()
      .then(() => {
        const { gameId, gameHost } = subGameList.find(
          (i) => i.gameId === config.gameId
        );
        WebSocketStarter.Instance()
          .initSocket()
          .then(() => {
            godWealthWebSocketDriver = new WebSocketDriver<SKT_MAG_TYPE>(
              gameId,
              gameHost
            );
            godWealthWebSocketDriver.filterData = (data, source) => {
              if (source.operation === SKT_OPERATION.RECOVER) {
                godWealthGameLogin();
                return;
              }
              if (data.success) {
                return {
                  data: data.data,
                  error: undefined
                };
              } else {
                let error = "";
                if (data.success === undefined) {
                  error = "data format error";
                  console.error("data format error", data);
                } else {
                  error = data.reason || "error";
                  console.error(data.reason);
                }
                global.hallDispatch(
                  addToastAction({
                    content: lang.write(
                      (k) => k.WebSocketModule.SocketDataError,
                      {},
                      { placeStr: "服务数据错误" }
                    ),
                    type: ToastType.ERROR
                  })
                );
                return {
                  data: "",
                  error
                };
              }
            };

            resolve(godWealthWebSocketDriver);
          });
      })
      .catch((e) => {
        reject(new Error(e));
      });
  });
};

export const godWealthGameLogin = () => {
  const msgObj = godWealthWebSocketDriver.loginGame(SKT_MAG_TYPE.LOGIN);
  msgObj.bindReceiveHandler((message) => {
    if (!message.data.success) {
      global.closeSubGame({ confirmContent: message.data.reason });
    }
  });

  msgObj.bindTimeoutHandler(() => {
    global.closeSubGame({
      confirmContent: lang.write(
        (k) => k.WebSocketModule.ConfigGameFaild,
        {},
        { placeStr: "对不起，连接游戏失败" }
      )
    });
    return false;
  });
};

export const removeInstance = () => {
  godWealthWebSocketDriver?.logoutGame(SKT_MAG_TYPE.EXIT);
};

export const sktMsgListener = listenerFactoy<SKT_MAG_TYPE>();

export let godWealthWebSocketDriver: WebSocketDriver<SKT_MAG_TYPE> = null;
