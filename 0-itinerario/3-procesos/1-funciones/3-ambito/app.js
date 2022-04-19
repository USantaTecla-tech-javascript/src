const { Console } = require("./console");

const console = new Console();
let level0 = 0;
console.writeln(`global level0: ${level0}`); // global level0: 0
// console.writeln(`global level1: ${level1}`); // Error!!!
// console.writeln(`global level2: ${level2}`); // Error!!!
// console.writeln(`global level3: ${level3}`); // Error!!!
outer();
// middle(); // Error!!!
// internal(); // Error!!!

function outer() {
    level0++;
    let level1 = 1;
    level1++;
    console.writeln(`outer level0: ${level0}`); // external level0: 1
    console.writeln(`outer level1: ${level1}`); // external level1: 2
    // console.writeln(`outer level2: ${level2}`); // Error!!!
    // console.writeln(`outer level3: ${level3}`); // Error!!!
    middle();
    inner();

    function middle() {
        level0++;
        level1++;
        let level2 = 2;
        level2++;
        console.writeln(`middle level0: ${level0}`); // middle level0: 2
        console.writeln(`middle level1: ${level1}`); // middle level1: 3
        console.writeln(`middle level2: ${level2}`); // middle level2: 3 
        // console.writeln(`middle level3: ${level3}`); // Error!!!
        inner();

        function inner() {
            level0++;
            level1++;
            level2++;
            let level3 = 3;
            level3++;
            console.writeln(`inner level0: ${level0}`); // internal level0: 3
            console.writeln(`inner level1: ${level1}`); // internal level1: 4
            console.writeln(`inner level2: ${level2}`); // internal level2: 4 
            console.writeln(`inner level3: ${level3}`); // internal level3: 4 
        }
    }

    function inner() {
        level0++;
        level1++;
        let level2 = 2;
        level2++;
        console.writeln(`inner level0: ${level0}`); // sibbling level0: 4
        console.writeln(`inner level1: ${level1}`); // sibbling level1: 5
        console.writeln(`inner level2: ${level2}`); // sibbling level2: 3  
    }
}
