import { Game } from './models/Game.js';
import { GameView } from './views/GameView.js';

class Connect4 {

    #game;
    #gameView;

    constructor() {
        this.#game = new Game();
        this.#gameView = new GameView(this.#game);
    }

    playGames() {
        this.#gameView.playGames();
    }

}

new Connect4().playGames();
