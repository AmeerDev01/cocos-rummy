import { Node } from "cc"
import { bandarQiuQiu_Audio, mainGameViewModel, startUp } from "./index"
import { removeInstance, sktInstance } from "./socketConnect"
import { global } from "../../hall"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		mainGameViewModel && mainGameViewModel.unMount()
		bandarQiuQiu_Audio && bandarQiuQiu_Audio.remove()

		removeInstance()

	}
}
