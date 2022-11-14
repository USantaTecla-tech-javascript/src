import { Message } from "./Message.js";
import { console } from '../utils/console.js';
import { UserPlayerView } from './UserPlayerView.js';
import { MachinePlayerView } from './MachinePlayerView.js';

export class TurnView {

    #game;

    constructor(game) {
        this.#game = game;
    }

    resetPlayers(){
        let userPlayers = console.readNumber(Message.NUM_PLAYERS.toString());
        this.#game.reset(userPlayers);
    }

    dropToken(){
        this.#game.getActivePlayer().accept(this);
        this.#game.next();
    }

    visitUserPlayer(userPlayer){
        new UserPlayerView(userPlayer).dropToken();
    }

    visitMachinePlayer(machinePlayer){
        new MachinePlayerView(machinePlayer).dropToken();
    }

    writeResult() {
        if (this.#game.isWinner()) {
            let message = Message.PLAYER_WIN.toString();
            message = message.replace(`#color`, this.#game.getActiveColor().toString());
            console.writeln(message);
        } else {
            Message.PLAYERS_TIED.writeln();
        }
    }

}