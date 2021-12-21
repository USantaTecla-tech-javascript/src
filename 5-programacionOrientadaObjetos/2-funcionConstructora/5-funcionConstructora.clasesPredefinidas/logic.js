/* Clases predefinidas */
console.log(true);
console.log(true.toString()==="true");
console.log(666);
console.log(Number.isNaN(666));
console.log(7.666.toFixed(2));
console.log("hola");
console.log("hola".toUpperCase());
console.log(Math.PI);
console.log(Math.sqrt(7));
let regExp = /[ABC][0-9]:([a-zA-Z0-9]+.)+/i;
console.log(regExp.test("a4:IB234.AE755"));
console.log(regExp.test("a4:a."));
console.log(/[ABC][0-9]:([a-zA-Z0-9]+.)+/i.test("a4:a.b."));
console.log(new Date().getHours());
try {
    7.7.toPrecision(666);
}
catch(exception) {
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception);
    console.log(typeof exception);
    console.log(exception instanceof Error);
}
