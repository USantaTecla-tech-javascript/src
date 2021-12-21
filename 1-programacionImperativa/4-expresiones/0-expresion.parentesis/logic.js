/* orden de evaluación */
console.log(5*(4 + 4)*2);  
console.log(5*(4/4*2));
    
/* rompe precedencia */
console.log(100/(2-1));
console.log(5>6 && (7<=4 || 2==4));
    
/* rompe asociatividad */
console.log(100/(2/2));
console.log(1-(1-1));
