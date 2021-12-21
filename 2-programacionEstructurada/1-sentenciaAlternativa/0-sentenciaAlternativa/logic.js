let x;

/* if */
if (x>0){
    x++;
}
console.log(x);
            
/* if-else */
if (x>0){
    x++;
} else {
    x--;
}
console.log(x);

/* switch */
x = 2;
switch(x){
    case 3:
        console.log("esperado");
        break;
    case 2:
        console.log("vulgar");
    case 0:
    case 1:
        console.log("mágico");
    default:
        console.log("otro");    
}
