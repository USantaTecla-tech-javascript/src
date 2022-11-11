import { console } from '../utils/console.js';
import { Coordinate } from '../types/Coordinate.js';
import { Message } from './Message.js';

export class BoardView {

    #game;

    constructor(game) {
        this.#game = game;
    }

    writeln() {
        this.#writeHorizontal();
        for (let i = Coordinate.NUMBER_ROWS - 1; i >= 0; i--) {
            Message.VERTICAL_LINE.write();
            for (let j = 0; j < Coordinate.NUMBER_COLUMNS; j++) {
                console.write(` ${this.#game.getColor(new Coordinate(i, j)).toString()[0]} `);
                Message.VERTICAL_LINE.write();
            }
            console.writeln();
        }
        this.#writeHorizontal();
    }

    #writeHorizontal() {
        for (let i = 0; i < 4 * Coordinate.NUMBER_COLUMNS; i++) {
            Message.HORIZONTAL_LINE.write();
        }
        Message.HORIZONTAL_LINE.writeln();
    }

}