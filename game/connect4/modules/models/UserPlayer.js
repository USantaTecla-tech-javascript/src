import Player from './Player.js';

class UserPlayer extends Player {
    
    constructor(color, board) {
        super(color, board);
    }

    accept(visitor){
        visitor.visitUserPlayer(this);
    }

}

export default UserPlayer;