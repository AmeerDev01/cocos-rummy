
import { Node } from "cc"
import { fruit777_Audio, gameBoardViewModel, msgListener, startUp } from "./index"
import { removeInstance } from "./socketConnect"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		msgListener && msgListener.removeAll()
		gameBoardViewModel && gameBoardViewModel.unMount()
		fruit777_Audio && fruit777_Audio.remove()
		removeInstance()
	}
}