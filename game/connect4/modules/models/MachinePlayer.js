import Player from './Player.js';

class MachinePlayer extends Player {

    constructor(color, board) {
        super(color, board);
    }

    accept(visitor){}
    getColumn(){}

}

export default MachinePlayer;