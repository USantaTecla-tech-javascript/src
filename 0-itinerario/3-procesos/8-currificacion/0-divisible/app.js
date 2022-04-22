const { Console } = require("./console");

const console = new Console();
const isDivisible = function (mod, num) {
    return num % mod === 0;
}
console.writeln(isDivisible(2, 111));
console.writeln(isDivisible(2, 110));
console.writeln(isDivisible(3, 111));
console.writeln(isDivisible(3, 110));

const isDivisibleCurry = function (mod) {
    return function (num) {
        return num % mod == 0;
    }
}
console.writeln(isDivisibleCurry(2)(111));
console.writeln(isDivisibleCurry(2)(110));
console.writeln(isDivisibleCurry(3)(111));
console.writeln(isDivisibleCurry(3)(110));
const isEvenAnonymus = isDivisibleCurry(2);
console.writeln(isEvenAnonymus(111));
console.writeln(isEvenAnonymus(110));
const isTripleAnonymus = isDivisibleCurry(3);
console.writeln(isTripleAnonymus(111));
console.writeln(isTripleAnonymus(110));

const isdivisibleCurryArrow = mod => num => num % mod === 0;
console.writeln(isdivisibleCurryArrow(2)(111));
console.writeln(isdivisibleCurryArrow(2)(110));
console.writeln(isdivisibleCurryArrow(3)(111));
console.writeln(isdivisibleCurryArrow(3)(110));
const isEvenArrow = isdivisibleCurryArrow(2);
console.writeln(isEvenArrow(111));
console.writeln(isEvenArrow(110));
const isTripleArrow = isdivisibleCurryArrow(3);
console.writeln(isTripleArrow(111));
console.writeln(isTripleArrow(110));
