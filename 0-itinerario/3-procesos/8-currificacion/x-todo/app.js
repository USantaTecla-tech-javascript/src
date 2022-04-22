const { Console } = require("./console");

const console = new Console();
const curry = (func) => {
    return curried = (...args) => {
        if (func.length !== args.length) {
            return curried.bind(null, ...args);
        }
        return func(...args);
    };
}

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
