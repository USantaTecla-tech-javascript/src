const { Console } = require("./console");

const console = new Console();
function converter(unit, factor, offset, input) {
    return `${((offset + input) * factor).toFixed(2)} ${unit}`;
}

console.writeln(converter('km', 1.60936, 0, 10)); // 16.09 km
console.writeln(converter('km', 1.60936, 0, 100)); // 160.94 km
console.writeln(converter('kg', 0.45460, 0, 2.5)); // 1.14 kg
console.writeln(converter('kg', 0.45460, 0, 5)); // 2.27 kg
console.writeln(converter('ºC', 0.5556, -32, 98)); // 36.67 ºC
console.writeln(converter('ºC', 0.5556, -32, 0)); // -17.78 ºC

const converterCurry4 = unit => factor => offset => input =>
    `${((offset + input) * factor).toFixed(2)} ${unit}`;
const milesToKm4 = converterCurry4('km')(1.60936)(0);
const poundsToKg4 = converterCurry4('kg')(0.45460)(0);
const farenheitToCelsius4 = converterCurry4('ºC')(0.5556)(-32);

console.writeln(milesToKm4(10)); // 16.09 km
console.writeln(milesToKm4(100)); // 160.94 km
console.writeln(poundsToKg4(2.5)); // 1.14 kg
console.writeln(poundsToKg4(5)); // 2.27 kg
console.writeln(farenheitToCelsius4(98)); // 36.67 ºC
console.writeln(farenheitToCelsius4(0)); // -17.78 ºC

const converterCurry2 = (unit, factor, offset) => input =>
    `${((offset + input) * factor).toFixed(2)} ${unit}`;
const milesToKm2 = converterCurry2('km', 1.60936, 0);
const poundsToKg2 = converterCurry2('kg', 0.45460, 0);
const farenheitToCelsius2 = converterCurry2('ºC', 0.5556, -32);

console.writeln(milesToKm2(10)); // 16.09 km
console.writeln(milesToKm2(100)); // 160.94 km
console.writeln(poundsToKg2(2.5)); // 1.14 kg
console.writeln(poundsToKg2(5)); // 2.27 kg
console.writeln(farenheitToCelsius2(98)); // 36.67 ºC
console.writeln(farenheitToCelsius2(0)); // -17.78 ºC
