import { Node } from "cc"
import { blessedWealthy_Audio, gameBoardViewModel, msgListener, startUp } from "./index"
import { removeInstance, sktInstance } from "./socketConnect"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		msgListener.removeAll()
		gameBoardViewModel.unMount()
		blessedWealthy_Audio.remove()
		removeInstance()
	}
}