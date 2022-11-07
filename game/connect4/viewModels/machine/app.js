const { Console } = require(`./console`);

const console = new Console();

class ClosedInterval {

    #min;
    #max;

    constructor(min, max) {
        this.#min = min;
        this.#max = max;
    }

    isIncluded(value) {
        return this.#min <= value && value <= this.#max;
    }

}

class Coordinate {

    static ORIGIN = new Coordinate(0, 0);
    static NUMBER_ROWS = 6;
    static #ROWS = new ClosedInterval(0, Coordinate.NUMBER_ROWS - 1);
    static NUMBER_COLUMNS = 7;
    static #COLUMNS = new ClosedInterval(0, Coordinate.NUMBER_COLUMNS - 1);

    #row;
    #column;

    constructor(row, column) {
        this.#row = row;
        this.#column = column;
    }

    shifted(coordinate) {
        return new Coordinate(this.#row + coordinate.#row,
            this.#column + coordinate.#column);
    }

    isValid() {
        return Coordinate.#isRowValid(this.getRow())
            && Coordinate.isColumnValid(this.getColumn());
    }

    static isColumnValid(column) {
        return Coordinate.#COLUMNS.isIncluded(column);
    }

    static #isRowValid(row) {
        return Coordinate.#ROWS.isIncluded(row);
    }

    getRow() {
        return this.#row;
    }

    getColumn() {
        return this.#column;
    }

    equals(coordinate) {
        if (this == coordinate)
            return true;
        if (coordinate == null)
            return false;
        return this.#column === coordinate.#column && this.#row === coordinate.#row;
    }

}

class Direction {
    static NORTH = new Direction(1, 0);
    static NORTH_EAST = new Direction(1, 1);
    static EAST = new Direction(0, 1);
    static SOUTH_EAST = new Direction(-1, 1);
    static SOUTH = new Direction(-1, 0);
    static SOUTH_WEST = new Direction(-1, -1);
    static WEST = new Direction(0, -1);
    static NORTH_WEST = new Direction(1, -1);

    #coordinate;

    constructor(row, column) {
        this.#coordinate = new Coordinate(row, column);
    }

    getOpposite() {
        for (let direction of Direction.values()) {
            if (direction.#coordinate.shifted(this.#coordinate).equals(Coordinate.ORIGIN)) {
                return direction;
            }
        }
        return null;
    }

    static values() {
        return [Direction.NORTH, Direction.NORTH_EAST, Direction.EAST, Direction.SOUTH_EAST,
        Direction.SOUTH, Direction.SOUTH_WEST, Direction.WEST, Direction.NORTH_WEST];
    }

    getCoordinate() {
        return this.#coordinate;
    }

}

class Line {

    static LENGTH = 4;
    #origin;
    #coordinates;
    #oppositeDirection;

    constructor(coordinate) {
        this.#origin = coordinate;
    }

    set(direction) {
        this.#coordinates = [this.#origin];
        for (let i = 1; i < Line.LENGTH; i++) {
            this.#coordinates[i] = this.#coordinates[i - 1].shifted(direction.getCoordinate());
        }
        this.#oppositeDirection = direction.getOpposite();
    }

    shift() {
        for (let i = 0; i < Line.LENGTH; i++) {
            this.#coordinates[i] = this.#coordinates[i].shifted(this.#oppositeDirection.getCoordinate());
        }
    }

    getCoordinates() {
        return this.#coordinates;
    }
}

class Color {

    static RED = new Color(`Red`);
    static YELLOW = new Color(`Yellow`);
    static NULL = new Color(` `);
    #string;

    constructor(string) {
        this.#string = string;
    }

    static values() {
        return [Color.RED, Color.YELLOW];
    }

    static get(ordinal) {
        return Color.values()[ordinal];
    }

    toString() {
        return this.#string;
    }

}

class Board {

    #colors;
    #lastDrop;

    constructor() {
        this.#colors = [];
        for (let i = 0; i < Coordinate.NUMBER_ROWS; i++) {
            this.#colors[i] = [];
        }
        this.reset();
    }

    reset() {
        for (let i = 0; i < Coordinate.NUMBER_ROWS; i++) {
            for (let j = 0; j < Coordinate.NUMBER_COLUMNS; j++) {
                this.#colors[i][j] = Color.NULL;
            }
        }
    }

    dropToken(column, color) {
        this.#lastDrop = new Coordinate(0, column);
        while (!this.isEmpty(this.#lastDrop)) {
            this.#lastDrop = this.#lastDrop.shifted(Direction.NORTH.getCoordinate());
        }
        this.#colors[this.#lastDrop.getRow()][this.#lastDrop.getColumn()] = color;
    }

    isComplete(column) {
        if (column !== undefined) {
            return !this.isEmpty(new Coordinate(Coordinate.NUMBER_ROWS - 1, column));
        }
        for (let i = 0; i < Coordinate.NUMBER_COLUMNS; i++) {
            if (!this.isComplete(i)) {
                return false;
            }
        }
        return true;
    }

    isFinished() {
        return this.isComplete() || this.isWinner();
    }

    isWinner() {
        if (this.#lastDrop === undefined) {
            return false;
        }
        let line = new Line(this.#lastDrop);
        for (let direction of Direction.values().splice(0, 3)) {
            line.set(direction);
            for (let i = 0; i < Line.LENGTH; i++) {
                if (this.isConnect4(line)) {
                    return true;
                }
                line.shift();
            }
        }
        return false;
    }

    isConnect4(line) {
        let coordinates = line.getCoordinates();
        for (let i = 0; i < Line.LENGTH; i++) {
            if (!coordinates[i].isValid()) {
                return false;
            }
            if (i > 0 && this.getColor(coordinates[i - 1]) != this.getColor(coordinates[i])) {
                return false;
            }
        }
        return true;
    }

    isOccupied(coordinate, color) {
        return this.getColor(coordinate) == color;
    }

    isEmpty(coordinate) {
        return this.isOccupied(coordinate, Color.NULL);
    }

    getColor(coordinate) {
        return this.#colors[coordinate.getRow()][coordinate.getColumn()];
    }

}

class Player {
    
    #color;
    #board;

    constructor(color, board) {
        this.#color = color;
        this.#board = board;        
    }

    getColor(){
        return this.#color;
    }

    isComplete(column){
        return this.#board.isComplete(column);
    }

    dropToken(column){
        this.#board.dropToken(column, this.#color);
    }

    accept(visitor){}
}

class UserPlayer extends Player {
    
    constructor(color, board) {
        super(color, board);
    }

    accept(visitor){
        visitor.visitUserPlayer(this);
    }

}

class MachinePlayer extends Player {

    constructor(color, board) {
        super(color, board);
    }

    accept(visitor){}
    getColumn(){}

}

class RandomMachinePlayer extends MachinePlayer {

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

class Turn {

    static #NUMBER_PLAYERS = 2;
    #players;
    #activePlayer;
    #board;

    constructor(board) {
        this.#board = board;
        this.#players = [];
        this.reset();
    }

    reset(userPlayers) {
        for (let i = 0; i < Turn.#NUMBER_PLAYERS; i++) {
            this.#players[i] = i < userPlayers ? 
                new UserPlayer(Color.get(i), this.#board) : 
                new RandomMachinePlayer(Color.get(i), this.#board);
        }
        this.#activePlayer = 0;

    }

    next() {
        if (!this.#board.isFinished()) {
            this.#activePlayer = (this.#activePlayer + 1) % Turn.#NUMBER_PLAYERS;
        }
    }

    getActivePlayer(){
        return this.#players[this.#activePlayer];
    }
    
}

class Game {

    #board;
    #turn;

    constructor() {
        this.#board = new Board();
        this.#turn = new Turn(this.#board);
    }

    reset(userPlayers) {
        this.#board.reset();
        this.#turn.reset(userPlayers);
    }

    getColor(coordinate){
        return this.#board.getColor(coordinate);
    }

    isComplete() {
        return this.#board.isComplete();
    }

    isWinner() {
        return this.#board.isWinner();
    }

    isFinished() {
        return this.#board.isFinished();
    }

    getActivePlayer(){
        return this.#turn.getActivePlayer();
    }

    getActiveColor(){
        return this.getActivePlayer().getColor();
    }

    next(){
        this.#turn.next();
    }

}

class Message {
    static TITLE = new Message(`--- CONNECT 4 ---`);
    static NUM_PLAYERS = new Message(`Enter number of users: `);
    static HORIZONTAL_LINE = new Message(`-`);
    static VERTICAL_LINE = new Message(`|`);
    static TURN = new Message(`Turn: `);
    static ENTER_COLUMN_TO_DROP = new Message(`Enter a column to drop a token: `);
    static INVALID_COLUMN = new Message(`Invalid columnn!!! Values [1-7]`);
    static COMPLETED_COLUMN = new Message(`Invalid column!!! It's completed`);
    static PLAYER_WIN = new Message(`#colorS WIN!!! : -)`);
    static PLAYERS_TIED = new Message(`TIED!!!`);
    static RESUME = new Message(`Do you want to continue`);

    #string;

    constructor(string) {
        this.#string = string;
    }

    write() {
        console.write(this.#string);
    }

    writeln() {
        console.writeln(this.#string);
    }

    toString() {
        return this.#string;
    }

}

class BoardView {

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

class PlayerView {
    
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

class UserPlayerView extends PlayerView {
    
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

class TurnView {

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

class GameView {

    #game;
    #boardView;
    #turnView;

    constructor(game) {
        this.#game = game;
        this.#boardView = new BoardView(this.#game);
        this.#turnView = new TurnView(this.#game);
    }

    playGames() {
        do {
            this.#playGame();
        } while (this.#isResumed());
    }

    #playGame() {
        this.#turnView.resetPlayers();
        Message.TITLE.writeln();
        this.#boardView.writeln();
        do {
            this.#turnView.dropToken();
            this.#boardView.writeln();
        } while (!this.#game.isFinished());
        this.#turnView.writeResult();
    }

    #isResumed() {
        let yesNoDialog = new YesNoDialog();
        yesNoDialog.read(Message.RESUME.toString());
        if (yesNoDialog.isAffirmative()) {
            this.#game.reset();
        }
        return yesNoDialog.isAffirmative();
    }
}

class YesNoDialog {

    static #AFFIRMATIVE = `y`;
    static #NEGATIVE = `n`;
    static #SUFFIX = `? (` +
        YesNoDialog.#AFFIRMATIVE + `/` +
        YesNoDialog.#NEGATIVE + `): `;
    static #MESSAGE = `The value must be ${YesNoDialog.#AFFIRMATIVE} or ${YesNoDialog.#NEGATIVE}`;
    #answer;

    read(message) {
        let ok;
        do {
            console.write(message);
            this.#answer = console.readString(YesNoDialog.#SUFFIX);
            ok = this.isAffirmative() || this.isNegative();
            if (!ok) {
                console.writeln(YesNoDialog.#MESSAGE);
            }
        } while (!ok);
    }

    isAffirmative() {
        return this.getAnswer() === YesNoDialog.#AFFIRMATIVE;
    }

    isNegative() {
        return this.getAnswer() === YesNoDialog.#NEGATIVE;
    }

    getAnswer() {
        return this.#answer.toLowerCase()[0];
    }
}

class Connect4 {

    #game;
    #gameView;

    constructor() {
        this.#game = new Game();
        this.#gameView = new GameView(this.#game);
    }

    playGames() {
        this.#gameView.playGames();
    }

}

new Connect4().playGames();
