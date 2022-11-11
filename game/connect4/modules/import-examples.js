import { Console } from 'console-mpds';
import { ClosedInterval } from './types/ClosedInterval.js';
import { Color } from './types/Color.js';
import { Coordinate } from './types/Coordinate.js';
import { Direction } from './types/Direction.js';
import { Line } from './models/Line.js';

const consoleMPDS = new Console();

// // test de ClosedInterval
// const min = consoleMPDS.readString('Dame min');
// const max = consoleMPDS.readString('Dame max');
// const interval = new ClosedInterval(min, max);

// if(interval.isIncluded(1)) {
//     consoleMPDS.writeln('1 está incluido')
// } else {
//     consoleMPDS.writeln('1 NO está incluido')
// }

// // test de Color
// consoleMPDS.writeln(Color.RED);

// test de Coordinate
// const coordinate = new Coordinate(4, 2)
// consoleMPDS.writeln(coordinate.getRow());
// if(coordinate.isValid()) {
//     consoleMPDS.writeln('Es valida');
// } else {
//     consoleMPDS.writeln('No es valida');
// }

// // Test de direction
// const direction = new Direction(0, 1);
// consoleMPDS.writeln('Coordinate: ' + direction.getCoordinate().getRow() + ' / ' + direction.getCoordinate().getColumn());
// const oposite = direction.getOpposite();
// consoleMPDS.writeln('Oposite: ' + oposite.getCoordinate().getRow() + ' / ' + oposite.getCoordinate().getColumn());

// // Test de Line
// const coordinate = new Coordinate(4, 2);
// const line = new Line(coordinate);
// const direction = new Direction(0, 1);
// line.set(direction);
// const coordinates = line.getCoordinates();
// coordinates.forEach(coordinate => {
//     console.log(coordinate.getRow(), coordinate.getColumn());
// });