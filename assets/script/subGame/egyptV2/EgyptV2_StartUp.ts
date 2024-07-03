
import { Node } from "cc"
import { egyptv2_Audio, mainViewModel, msgListener, startUp, stopGame } from "./index"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		stopGame();
	}
}