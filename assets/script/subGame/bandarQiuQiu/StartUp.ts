import { Node } from "cc"
import { bandarQiuQiu_Audio, mainGameViewModel, startUp } from "./index"
import { removeInstance, sktInstance } from "./socketConnect"
import { global } from "../../hall"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		if (!mainGameViewModel) {
			global.closeSubGame({ isPre: true })	
		} else {
			mainGameViewModel.unMount()
			bandarQiuQiu_Audio.remove()
		}

		removeInstance()
		
	}
}
