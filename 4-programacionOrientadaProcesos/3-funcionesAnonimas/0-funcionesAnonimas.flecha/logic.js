let anominaDosOMasParametros = 
	function(x, y) 
		{ x++; y++; console.log(x+y); };
console.log(typeof anominaDosOMasParametros);
console.log(anominaDosOMasParametros);
console.log(anominaDosOMasParametros(1, 2));

let flechaDosOMasParametros = 
	(x, y) => 
		{ x++; y++; console.log(x+y); }; 
console.log(typeof flechaDosOMasParametros);
console.log(flechaDosOMasParametros);
console.log(flechaDosOMasParametros(1, 2));

let anominaUnParametro = 
	function(x) 
		{ x++; console.log(x); };
console.log(typeof anominaUnParametro);
console.log(anominaUnParametro);
console.log(anominaUnParametro(1));

let flechaUnParametro = 
	x => 
		{ x++; console.log(x); };
console.log(typeof flechaUnParametro);
console.log(flechaUnParametro);
console.log(flechaUnParametro(1));

let anominaCeroParametros = 
	function() 
		{ console.log(0); };
console.log(typeof anominaCeroParametros);
console.log(anominaCeroParametros);
console.log(anominaCeroParametros());

let flechaCeroParametros = 
	() => 
		{ console.log(0); };
console.log(typeof flechaCeroParametros);
console.log(flechaCeroParametros);
console.log(flechaCeroParametros());

let anominaSoloRetorno = 
	function(x) 
		{ return x+1; };
console.log(typeof anominaSoloRetorno);
console.log(anominaSoloRetorno);
console.log(anominaSoloRetorno(1));

let flechaSoloRetorno = 
	x => x+1;
console.log(typeof flechaSoloRetorno);
console.log(flechaSoloRetorno);
console.log(flechaSoloRetorno(1));

function sumatorio(ini, fin, serie) {
	let sum = 0;
	for(let i=ini; i<=fin; i++){
			sum += serie(i);
	}
	return sum;
}
console.log(sumatorio(1, 10, (x) => { return 2*x; }));
console.log(sumatorio(1, 10, x => { return 2*x; }));
console.log(sumatorio(1, 10, x => 2*x));
let h = function(x) { 
	return 2*x; 
}
console.log(sumatorio(1, 10, h));
