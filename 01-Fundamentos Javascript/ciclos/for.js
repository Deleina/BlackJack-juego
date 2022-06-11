//for - sintaxis basica de un for 
//recorre un bloque de código varias veces
const heroes=['bataman', 'superman', 'mujer maravilla', 'aquaman'];

console.warn('for tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
    
}


//for in - recorre las propiedades de un objeto
console.warn('for in');

for(let i in heroes){
    console.log(heroes[i]);
}


//for of -recorre los valores de un objeto iterable
//estrae el valor de el arreglo y lo regresa ala variable 'heroe'
console.warn('for of');

for (let heroe of heroes){
    console.log(heroe);
}
