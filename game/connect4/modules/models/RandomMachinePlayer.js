import { MachinePlayer } from "./MachinePlayer.js";
import { Coordinate } from "../types/Coordinate.js";

export class RandomMachinePlayer extends MachinePlayer {

    constructor(color, board) {
        super(color, board);
    }

    accept(visitor){
        visitor.visitMachinePlayer(this);
    }

    getColumn(){
        let column;
        do {
            column = Math.floor(Math.random() * Coordinate.NUMBER_COLUMNS);
        } while (this.isComplete(column));
        return column;
    }

}