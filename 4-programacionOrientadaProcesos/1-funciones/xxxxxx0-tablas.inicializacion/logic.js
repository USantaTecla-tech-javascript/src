function sumDesestructurado ([head, ...rest]){
    if (rest.length==0) {
        return head;
    }
    return head + sumDesestructurado(rest);
}

console.log(sumDesestructurado([1,2,3,4,5]));
