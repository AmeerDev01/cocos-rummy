
import { Node } from "cc"
import { fruit777_Audio, gameBoardViewModel, loaderviweModel, msgListener, startUp } from "./index"
import { removeInstance } from "./socketConnect"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		loaderviweModel && loaderviweModel.unMount();
		msgListener && msgListener.removeAll()
		gameBoardViewModel && gameBoardViewModel.unMount()
		fruit777_Audio && fruit777_Audio.remove()
		removeInstance()
	}
}