import { Node } from "cc"
import { godWealth_Audio, gameBoardViewModel, msgListener, startUp } from "./index"
import { removeInstance, sktInstance } from "./socketConnect"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		msgListener.removeAll()
		gameBoardViewModel.unMount()
		godWealth_Audio.remove()
		removeInstance()
	}
}