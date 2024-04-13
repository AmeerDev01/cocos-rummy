import {Node} from 'cc';
import {ApplicationGlobal} from './Const/ApplicationGlobal';
import {Phoenix_MainFacade} from './phoenix_MainFacade';
import {ProxyDefine} from './Const/ProxyDefine';
import {sktMsgListener, SocketProxy} from './Proxy/SocketProxy';

export default (boardNode: Node) => {
    ApplicationGlobal.mainPanel = boardNode
    let facade = new Phoenix_MainFacade()
    facade.startup()
    return () => {
        (facade.retrieveProxy(ProxyDefine.WEBSOCKET) as SocketProxy).closeSocket()
        sktMsgListener.removeAllListener()
        facade = null
    }
}
