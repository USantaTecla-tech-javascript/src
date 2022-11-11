class MachinePlayerView extends PlayerView {

    constructor(player) {
        super(player);
    }

    getColumn() {
        let column = this.getActivePlayer().getColumn();
        console.writeln(`Columna escogida aleatoriamente: ` + column);
        return column;
    }

}

export default MachinePlayerView;