
import { Node } from "cc"
import { stopGame, startUp } from "./index"

export default (boardNode: Node) => {
	stopGame();
	startUp(boardNode)
	return () => {
		stopGame();
	}
}