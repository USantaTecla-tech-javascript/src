import { console } from '../utils/console.js';
import { PlayerView } from "./PlayerView.js";

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