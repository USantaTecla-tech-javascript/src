const { Console } = require("./console");

const console = new Console();
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

const compose = (f, g) => (x) => f(g(x));


const average = (xs) => reduce(add, 0, xs) / xs.length;
const incomesAverage = compose(average, map(prop('incomes')));
incomesAverage(USERS) // 8333.333

