import { Node } from "cc"
import { phoenix_Audio, gameBoardViewModel, msgListener, startUp } from "./index"
import { removeInstance, sktInstance } from "./socketConnect"
import { global } from "../../hall"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		if (!gameBoardViewModel) {
			global.closeSubGame({ isPre: true })
		} else {
			gameBoardViewModel.unMount()
			phoenix_Audio.remove()	
		}
		removeInstance()
	}
}