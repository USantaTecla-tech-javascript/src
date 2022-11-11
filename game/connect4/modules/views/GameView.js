import { BoardView } from "./BoardView.js";
import { TurnView } from "./TurnView.js";
import { Message } from "./Message.js";
import { YesNoDialog } from './YesNoDialog.js';

export class GameView {

    #game;
    #boardView;
    #turnView;

    constructor(game) {
        this.#game = game;
        this.#boardView = new BoardView(this.#game);
        this.#turnView = new TurnView(this.#game);
    }

    playGames() {
        do {
            this.#playGame();
        } while (this.#isResumed());
    }

    #playGame() {
        this.#turnView.resetPlayers();
        Message.TITLE.writeln();
        this.#boardView.writeln();
        do {
            this.#turnView.dropToken();
            this.#boardView.writeln();
        } while (!this.#game.isFinished());
        this.#turnView.writeResult();
    }

    #isResumed() {
        let yesNoDialog = new YesNoDialog();
        yesNoDialog.read(Message.RESUME.toString());
        if (yesNoDialog.isAffirmative()) {
            this.#game.reset();
        }
        return yesNoDialog.isAffirmative();
    }
}