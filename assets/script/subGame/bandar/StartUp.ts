import { Node } from "cc"
import { bandar_Audio, loaderViewModel, mainGameViewModel, startUp } from "./index"
import { removeInstance } from "./socketConnect"
import { global } from "../../hall"
import WebSocketStarter from "../../common/WebSocketStarter"
import { bundlePkgName } from "./sourceDefine"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		WebSocketStarter.Instance().eventListener.removeById(bundlePkgName)
		loaderViewModel && loaderViewModel.unMount();
		mainGameViewModel && mainGameViewModel.unMount()
		bandar_Audio && bandar_Audio.remove()
		removeInstance()
	}
}
