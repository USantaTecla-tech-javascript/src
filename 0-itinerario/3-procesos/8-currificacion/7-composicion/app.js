const { Console } = require("./console");

const console = new Console();
const compose = (f, g) => (x) => f(g(x));


const average = (xs) => reduce(add, 0, xs) / xs.length;
const incomesAverage = compose(average, map(prop('incomes')));
incomesAverage(USERS) // 8333.333

