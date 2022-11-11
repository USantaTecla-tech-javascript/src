export class PlayerView {
    
    #player;

    constructor(player) {
        this.#player = player;
    }

    dropToken() {
        this.#player.dropToken(this.getColumn());
    }

    getColumn() {}

    getActivePlayer() {
        return this.#player;
    }

    
}