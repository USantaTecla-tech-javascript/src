const { Console } = require("./console");

const console = new Console();
function funcion() {
    console.writeln(`mensaje`);
}
console.writeln(funcion); // function ...
console.writeln(typeof funcion); // function
console.writeln(funcion()); // mensaje
//
console.writeln(typeof funcion()); // undefined

let nivel0 = 100;
external();

function external() {
    nivel0++;
    console.writeln(`external nivel0: ${nivel0}`); // 1. external nivel0: 101
    middle();
    sibbling();
    nivel0++;
    console.writeln(`external nivel0: ${nivel0}`); // 10. external nivel0: 106

    function middle() {
        let nivel1 = 200;
        nivel1++;
        console.writeln(`middle nivel1: ${nivel1}`); // 2. middle nivel1: 201
        nivel0++;
        console.writeln(`middle nivel0: ${nivel0}`); // 3. middle nivel0: 102
        internal();        
        nivel1++;
        console.writeln(`middle nivel1: ${nivel1}`); // 7. middle nivel1: 203
        nivel0++;
        console.writeln(`middle nivel0: ${nivel0}`); // 8. middle nivel0: 104

        function internal() {
            let nivel2 = 300;
            nivel2++;
            console.writeln(`internal nivel2: ${nivel2}`); // 4. internal nivel2: 301
            nivel1++;
            console.writeln(`internal nivel1: ${nivel1}`); // 5. internal nivel1: 202
            nivel0++;
            console.writeln(`internal nivel0: ${nivel0}`); // 6. internal nivel0: 103
        }
    }

    function sibbling() {
        nivel0++;
        console.writeln(`sibblings: ${nivel0}`); // 9. sibblings: 105  
    }
}

auxiliar(); // segunda
principal(); // segunda

function auxiliar() {
    console.writeln("primera");
}

function principal() {
    auxiliar();
}

function auxiliar() {
    console.writeln("segunda");
}