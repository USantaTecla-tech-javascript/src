import { Console } from 'console-mpds';
import { PlayerView } from "./PlayerView.js";

const console = new Console();

export class MachinePlayerView extends PlayerView {

    constructor(player) {
        super(player);
    }

    getColumn() {
        let column = this.getActivePlayer().getColumn();
        console.writeln(`Columna escogida aleatoriamente: ` + column);
        return column;
    }

}