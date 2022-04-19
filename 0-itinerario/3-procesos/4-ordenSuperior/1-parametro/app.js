const { Console } = require("./console");

const console = new Console();
function normalXA(){
    console.writeln(`A`);
}

function normalXB(){
    console.writeln(`B`);
}

function superiorX(f){
    f();
}

superiorX(normalXA); // A
superiorX(normalXB); // B

function normalYA(){
    return `A`;
}

function normalYB(){
    return `B`;
}

function superiorY(f){
    console.writeln(f());
}

superiorY(normalYA); // A
superiorY(normalYB); // B

function normalZA(value){
    console.writeln(value);
}

function normalZB(value){
    console.writeln(value + value);
}

function superiorZ(value, f){
    f(value);
}

superiorZ(`A`, normalZA); // A
superiorZ(`B`, normalZB); // BB
superiorZ(`B`, normalZA); // B
superiorZ(`A`, normalZB); // AA
