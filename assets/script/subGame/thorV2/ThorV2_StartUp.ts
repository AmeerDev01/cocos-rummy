
import { Node } from "cc"
import { startUp, stopGame } from "./index"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		stopGame();
	}
}