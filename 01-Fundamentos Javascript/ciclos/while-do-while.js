//while, se ejecuta el bloque de codigo siempre y cuando 
//la condicion se averdadera
// tip: la condicion tiene que ser verdadera
//considerados falsos : undefined, null , false

const carros= ['ford', 'mazda', 'honda', 'toyota'];
let i = 0;

/*while (i < carros.length) {
    console.log(carros[i]);
    // i = i+1;
    i++;

}*/
console.warn('While');
//codigo con break
while (carros[i]) {
    if (i===1) {
        //break; // se detiene al ser igual a 1
        i++;
        continue; // continua para seguir con el otro bloque de codigo
    }
    console.log(carros[i]);
    // i = i+1;
    i++;

}

//Do While
// a diferendia de While un Do Wihile ejecuta 
//un bloque una vez 
//no importa si la condicion es falsa entra al bloque de codigo
//pero el resultado es undefined

console.warn('Do While');
let j = 0;

do {
    console.log(carros[j]);
    j++;
}while (carros[j]);