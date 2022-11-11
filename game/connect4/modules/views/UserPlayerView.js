import { console } from '../utils/console.js';
import { PlayerView } from './PlayerView.js';
import { Message } from './Message.js';
import { Coordinate } from '../types/Coordinate.js';

export class UserPlayerView extends PlayerView {
    
    constructor(player) {
        super(player);
    }

    getColumn() {
        let column;
        let valid;
        do {
            Message.TURN.write();
            console.writeln(this.getActivePlayer().getColor().toString());
            column = console.readNumber(Message.ENTER_COLUMN_TO_DROP.toString()) - 1;
            valid = Coordinate.isColumnValid(column);
            if (!valid) {
                Message.INVALID_COLUMN.writeln();
            } else {
                valid = !this.getActivePlayer().isComplete(column);
                if (!valid) {
                    Message.COMPLETED_COLUMN.writeln();
                }
            }
        } while (!valid);
        return column;
    }
     
}