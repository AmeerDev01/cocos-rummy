import { Node } from "cc"
import { dragonTiger_Audio, loaderviweModel, mainGameViewModel, startUp } from "./index"
import { removeInstance } from "./socketConnect"
import { global } from "../../hall"
import { onlineViewModel, titleViewModel, usersViewModel } from "./ViewModel/DragonTigerMainViewModel"
import WebSocketStarter from "../../common/WebSocketStarter"
import { bundlePkgName } from "./sourceDefine"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		// debugger
		WebSocketStarter.Instance().eventListener.removeById(bundlePkgName)
		usersViewModel && usersViewModel.unMount()
		titleViewModel && titleViewModel.unMount()
		onlineViewModel && onlineViewModel.unMount()
		loaderviweModel && loaderviweModel.unMount();
		mainGameViewModel && mainGameViewModel.unMount()
		dragonTiger_Audio && dragonTiger_Audio.pause()
		dragonTiger_Audio && dragonTiger_Audio.remove()

		removeInstance()

	}
}
