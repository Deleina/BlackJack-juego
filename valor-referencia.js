//primitivos
//string
//numbers
//boolean
//null
//undifined
//simbolos > = < === !=


//primitivos por valor
//cuando se trabaja con valores primitivos cualquier tipo de asiganacion
//se esta mandando por valor, es decir no importa si se transforma la variable

// se crea una variable a con un valor 
//luego se le asigna ese valor a la variable b
//(se crea una copia de la variable a en la variable b)

let a = 10;
let b = a;
a=30;
console.log(a,b);


//objetos por referencia
//
let juan={nombre:'juan'}
// Spread Operator...
let ana={...juan};
ana.nombre='ana';
console.log({juan, ana});
//El operador  Spread de JavaScript(...) nos permite copiar 
//rápidamente todo o parte de una matriz u objeto existente en otra matriz u objeto.


//la variable d enombre peter pasa por referencia a la funcion
// cualquier modificacion que se le hagaaal argumento(objeto), va a ser afectado si se le rerona


//otro uso que tiene el operdor spread, para gnerear una copia dentrode una funcion
const cambiaNombre=({...persona})=>{
    persona.nombre='tony';
    return persona
}

let peter={nombre:'peter'};
let tony=cambiaNombre(peter);

console.log(peter,tony)

//arreglos--array
const frutas=['manzana','pera','piña']

console.time('slice')
const otrasFrutas=frutas.slice();
console.timeEnd('slice')

console.time('spread')
const otrasFrutas2 = [...frutas];
console.timeEnd('spread')

otrasFrutas.push('mango');
console.table(frutas);
console.table( otrasFrutas);
