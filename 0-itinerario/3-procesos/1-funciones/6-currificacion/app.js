const { Console } = require("./console");


const console = new Console();

const isDivisible1 = function (mod, num) {
    return num % mod === 0;
}

const curry = (func) => {
    return curried = (...args) => {
        if (func.length !== args.length) {
            return curried.bind(null, ...args);
        }
        return func(...args);
    };
}

console.writeln("sin curry");
console.writeln(isDivisible1(2, 111));
console.writeln(isDivisible1(2, 110));
console.writeln(isDivisible1(3, 111));
console.writeln(isDivisible1(3, 110));
const isEven1 = curry(isDivisible1)(2);
console.writeln(isEven1(111));
console.writeln(isEven1(110));
const isTriple1 = curry(isDivisible1)(3);
console.writeln(isTriple1(111));
console.writeln(isTriple1(110));

const isDivisible2 = function (mod) {
    return function (num) {
        return num % mod == 0;
    }
}
console.writeln("con curry");
console.writeln(isDivisible2(2)(111));
console.writeln(isDivisible2(2)(110));
console.writeln(isDivisible2(3)(111));
console.writeln(isDivisible2(3)(110));
const isEven2 = isDivisible2(2);
console.writeln(isEven2(111));
console.writeln(isEven2(110));
const isTriple2 = isDivisible2(3);
console.writeln(isTriple2(111));
console.writeln(isTriple2(110));

const isdivisible3 = mod => num => num % mod === 0;
console.writeln("con curry flecha");
console.writeln(isdivisible3(2)(111));
console.writeln(isdivisible3(2)(110));
console.writeln(isdivisible3(3)(111));
console.writeln(isdivisible3(3)(110));
const isEven3 = isdivisible3(2);
console.writeln(isEven3(111));
console.writeln(isEven3(110));
const isTriple3 = isdivisible3(3);
console.writeln(isTriple3(111));
console.writeln(isTriple3(110));

function log(date, importance, message) {
    console.writeln(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log = curry(log);
log = log(new Date());
log = log("DEBUG");
log = log("parámetro no válido");

function getUrl(protocol, domain) {
    return (_path, _resource) => `${protocol}://${domain}/${_path}/${_resource}`;
}

getUrl = curry(getUrl);
getHttpUrl = getUrl(`http`, `www.usantecla.com`);
console.writeln(getHttpUrl(`manager-countries`, `index.php`));
console.writeln(getHttpUrl(`game-ticTacToe`, `NewGame.jsp`));

function curry2(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

function curry3(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

Function.prototype.curry4 = function () {
    if (arguments.length < 1) {
        return this; //nothing to curry with - return function
    }
    var __method = this;
    var args = toArray(arguments);
    return function () {
        return __method.apply(this, args.concat([].slice.apply(null, arguments)));
    }
}

Function.prototype.curry5 = function () {
    var fn = this, args = Array.prototype.slice.call(arguments);
    return function () {
        return fn.apply(this, args.concat(
            Array.prototype.slice.call(arguments)));
    };
};

// https://johnresig.com/blog/partial-functions-in-javascript/#postcomment

function converter(unit, factor, offset, input) {
    return `${((offset + input) * factor).toFixed(2)} ${unit}`;
}
converter = curry(converter);
var milesToKm = converter('km', 1.60936, 0);
var poundsToKg = converter('kg', 0.45460, 0);
var farenheitToCelsius = converter('ºC', 0.5556, -32);

console.writeln(milesToKm(10));            // returns "16.09 km"
console.writeln(poundsToKg(2.5));          // returns "1.14 kg"
console.writeln(farenheitToCelsius(98));   // returns "36.67 ºC"


const list = [
    {
        id: 1,
        name: 'Steve',
        email: 'steve@example.com',
    },
    {
        id: 2,
        name: 'John',
        email: 'john@example.com',
    },
    {
        id: 3,
        name: 'Pamela',
        email: 'pam@example.com',
    },
    {
        id: 4,
        name: 'Liz',
        email: 'liz@example.com',
    },
];
console.writeln(list.filter(item => item.name !== 'John'));

const filterByName = (list, name) => {
    const filtering = (name) => (item) => item.name !== name;
    return list.filter(filtering(name));
}
console.writeln(filterByName(list, 'John'));

function filterByName2(list, name) {
    return list.filter(function (_name) {
        return function (item) {
            return item.name !== _name;
        }
    }(name));
}
console.writeln(filterByName2(list, 'John'));