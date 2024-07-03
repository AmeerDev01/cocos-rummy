import { Node } from 'cc';
import { startUp, stopGame } from './index';

export default (boardNode: Node) => {
    stopGame();
    startUp(boardNode)
    return () => {
        stopGame();
    }
}
