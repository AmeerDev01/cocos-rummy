import { Node } from "cc"
import { bandar_Audio, loaderViewModel, mainGameViewModel, startUp } from "./index"
import { removeInstance } from "./socketConnect"
import { global } from "../../hall"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		loaderViewModel && loaderViewModel.unMount();
		mainGameViewModel && mainGameViewModel.unMount()
		bandar_Audio && bandar_Audio.remove()
		removeInstance()
	}
}
