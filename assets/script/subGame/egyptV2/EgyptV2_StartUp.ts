
import { Node } from "cc"
import { egyptv2_Audio, mainViewModel, msgListener, startUp, stopGame } from "./index"
import { removeInstance, sktInstance } from "./socketConnect"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		stopGame();
	}
}