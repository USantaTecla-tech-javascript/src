const { Console } = require("./console");

const console = new Console();
function global(){
    return local();

    function local(){
        return -1;
    }
}
console.writeln(global()); // -1

function ambitoAnonima(){
    let a = function(){
        return 0;
    }
    return a();
    a = function(){
        return 1;
    }
}
console.writeln(ambitoAnonima()); // 0

function ambitoNominal(){
    function nominal(){
        return 0;
    }
    return nominal();
    function nominal(){
        return 1;
    }
}
console.writeln(ambitoNominal()); // 1


