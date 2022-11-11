import { Board } from './Board.js';
import { Turn } from './Turn.js';

export class Game {

    #board;
    #turn;

    constructor() {
        this.#board = new Board();
        this.#turn = new Turn(this.#board);
    }

    reset(userPlayers) {
        this.#board.reset();
        this.#turn.reset(userPlayers);
    }

    getColor(coordinate){
        return this.#board.getColor(coordinate);
    }

    isComplete() {
        return this.#board.isComplete();
    }

    isWinner() {
        return this.#board.isWinner();
    }

    isFinished() {
        return this.#board.isFinished();
    }

    getActivePlayer(){
        return this.#turn.getActivePlayer();
    }

    getActiveColor(){
        return this.getActivePlayer().getColor();
    }

    next(){
        this.#turn.next();
    }

}