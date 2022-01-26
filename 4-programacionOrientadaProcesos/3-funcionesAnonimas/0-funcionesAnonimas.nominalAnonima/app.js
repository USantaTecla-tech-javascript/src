const { Console } = require("./console");

const console = new Console();
/* con hoisting: funciones nominales */
function ambitoNominal(){
    function nominal(){
        return 0;
    }
    return nominal();
    function nominal(){
        return 1;
    }
}
console.writeln(ambitoNominal());

/* sin hoisting: con funciones anónimas */
function ambitoAnonima(){
    let a = function(){
        return 0;
    }
    return a();
    a = function(){
        return 1;
    }
}
console.writeln(ambitoAnonima());

/* formato */
function global(){
    return local();

    function local(){
        return -1;
    }
}
console.writeln(global());
