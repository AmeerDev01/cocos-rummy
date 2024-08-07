
import { Node } from "cc"
import { GxfcV2_Audio, mainViewModel, msgListener, startUp, stopGame } from "./index"
import { removeInstance } from "./socketConnect"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		stopGame();
	}
}