const { Console } = require("./console");

const console = new Console();
Set.prototype.includes = function(set) {
  for (let item of set) {
      if (!this.has(item)) {
          return false;
      }
  }
  return true;
}

Set.prototype.union = function(set) {
  let union = new Set(this);
  for (let item of set) {
      union.add(item);
  }
  return union;
}

Set.prototype.intersection = function(set) {
  let intersection = new Set();
  for (let item of set) {
      if (this.has(item)) {
          intersection.add(item);
      }
  }
  return intersection;
}

Set.prototype.difference = function(set) {
  let difference = new Set(this);
  for (let item of set) {
      difference.delete(item);
  }
  return difference;
}

Set.prototype.toString = function(title) {
  let msg = `${title}: `;
  for (let item of this) {
    msg += `${item}, `;
  } 
  return `${msg.slice(0, msg.length-2)}.`;
}

let setA = new Set([1,2,3,4]);
let setB = new Set([3,2]);
let setC = new Set([6,3,5,4]);
console.writeln(setA.toString(`setA`));
console.writeln(setB.toString(`setB`));
console.writeln(setC.toString(`setC`));
console.writeln(`setA.includes(setB): ${setA.includes(setB)}`);
console.writeln(`setA.includes(setC): ${setA.includes(setC)}`);
console.writeln(setA.union(setB).toString(`setA.union(setB)`));
console.writeln(setA.union(setC).toString(`setA.union(setC)`));
console.writeln(setA.intersection(setB).toString(`setA.intersection(setB)`));
console.writeln(setA.intersection(setC).toString(`setA.intersection(setC)`));
console.writeln(setA.difference(setB).toString(`setA.difference(setB)`));
console.writeln(setA.difference(setC).toString(`setA.difference(setC)`));
