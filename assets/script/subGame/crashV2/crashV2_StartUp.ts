
import { Node } from "cc"
import {startUp, stopGame } from "./index"
import { removeInstance } from "./socketConnect"

export default (boardNode: Node) => {
	startUp(boardNode)
	return () => {
		stopGame()
	}
}