const { Console } = require("./console");

const console = new Console();
let count1 = 0;
const fibonacci1 = function (position) {
  count1++;
  if (position <= 1){
    return 1;
  }
  return fibonacci1(position - 1) + fibonacci1(position - 2);
};

for (let i = 0; i < 10; i++) {
  console.writeln(i + ': ' + fibonacci1(i));
}
console.writeln(count1);

let count2 = 0;
const fibonacci2 = function () {
  const memo = [1, 1];
  function fibonacci(position) {
    count2++;
    if (memo[position] === undefined) {
      memo[position] = fibonacci(position - 1) + fibonacci(position - 2);
    }
    return memo[position];
  };
  return fibonacci;
}();

for (let i = 0; i < 10; i++) {
  console.writeln(i + ': ' + fibonacci2(i));
}
console.writeln(count2);

let count3 = 0;
const fibonacci3 = function (position) {
  count3++;
  if (fibonacci3.memo[position] !== undefined){
    return fibonacci3.memo[position];
  }
  fibonacci3.memo[position] = fibonacci3(position - 1) + fibonacci3(position - 2);
  return fibonacci3.memo[position];
};
fibonacci3.memo = [1, 1];

for (let i = 0; i < 10; i++) {
  console.writeln(i + ': ' + fibonacci3(i));
}
console.writeln(count3);