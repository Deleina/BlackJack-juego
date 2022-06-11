//creamos array

let juegos= ['zelda', 'mario','metroid','sela'];
console.log('largo:', juegos.length);

let primero=juegos[2-2];

let ultimo=juegos[juegos.length-1];

console.log(primero,ultimo);

//forEach va ejecutar una funcion por cada uno de los elementos
//que se encuentren en el arreglo
juegos.forEach((element,indice, arr) => {
    console.log(element,indice,arr);
});

//agrega al array 
let nuevaLongitud=juegos.push('f-zero');
console.log(nuevaLongitud,juegos);

//inserta un nuevo elemento al inicio del arreglo
nuevaLongitud=juegos.unshift('fire embbles');
console.log(nuevaLongitud, juegos);

//remueve el ultimo elemento y lo regresa
let juegosBorrado=juegos.pop();
console.log({juegosBorrado, juegos});
console.log(juegosBorrado,juegos);


 //.splice es un metodo que recibe un punto inicial 
 //y cuantos se quieren borrar y regresa un nuevo arreglo
//guaradamos la posicion un que servira como inicativo para cortar
 let pos=1;
console.log(juegos);

let juegosBorrados=juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

//método devuelve la posición de la primera 
//aparición de un valor en una cadena.
//case sensitive distingue entre mayusculas y minusculas
//método devuelve -1 si no se encuentra el valor.
let metroidIndex = juegos.indexOf('metroid');
console.log({metroidIndex});
console.log(juegos)
