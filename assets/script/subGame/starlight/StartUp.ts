
import { Node } from "cc"
import { starlight_Audio, gameBoardViewModel, msgListener, startUp, stopGame } from "./index"
import { removeInstance } from "./socketConnect"
import { global } from "../../hall"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		stopGame();
	}
}