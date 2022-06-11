//funcion normal
function saludar(nombre) {
    //sirve para enviar todos los argumentos que se mandan
    console.log(arguments);
    console.log('hola'+ nombre);
    return 1;

    //esto nunca se va a ejecutar, ya qu esta depues del return
    console.log('soy un codigo que esta despues del return');
}

//si se tiene un parametro, se tiene que inicializar
//mandandole un argumento

//si a la funcion nose le pasa un argumento no estar inicializada(lo mismo es para las funciones anonimas)
const retornosaludar=saludar('deleina', 40 , true , 'costa rica');
console.log(retornosaludar);

//funcion anonima, por que no tiene nombre, 
//pero al asignarlo a una funcion va a responder
//a ese nombre en este caso seria saluadar2
// si esta asignada con la variable const el nombre 
//no se puede reutlizar
const saludar2 = function(nombre) {
   console.log('hola '+ nombre);
};


//llamado, sirve para ejecutar el cuerpo de la funcion
saludar2('deleinas');


//funciones de flecha
const saludarFlecha=(nombre)=>{
    console.log('hola ' + nombre)
}

saludarFlecha('melisa');

//cada funcion si no tiene la palabra reservada return la funcion no retorna nada

//ejemplos practica
function sumar(a, b) {
    return a+b;
}

//funcion flecha anonima
const sumar2=(a,b)=>{
    return a+b;
}

//funcion flecha anonima  resumida 
const sumar3 = (a, b) =>  a + b;


console.log(sumar3(2, 2));

console.log(sumar2(1, 2));

console.log(sumar(1,2));

//ejemplo 2 funcion tradicional
function getAleatorio() {
    return Math.random();
}

//funcion flecha en una sola linea 
const getAleatorio2=()=> Math.random();


console.log(getAleatorio2());
console.log(getAleatorio());