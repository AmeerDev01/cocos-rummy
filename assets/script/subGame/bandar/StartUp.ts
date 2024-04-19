import { Node } from "cc"
import { bandar_Audio, mainGameViewModel, startUp } from "./index"
import { removeInstance, sktInstance } from "./socketConnect"
import { global } from "../../hall"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		if (!mainGameViewModel) {
			global.closeSubGame({ isPre: true })
		} else {
			mainGameViewModel.unMount()
			bandar_Audio.remove()	
		}
		removeInstance()
	}
}
