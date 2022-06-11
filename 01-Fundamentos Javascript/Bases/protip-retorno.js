
//
//function crearPersn(nombre, apellido) {
//    return{nombre,apellido};
//}

// función flecha constante hay que quitar la palabra 
//reservada function.

//los paréntesis lo que hacen es indicarle a JavaScript que lo que se quieren regresar  es todo
//lo que está dentro de esos paréntesis como
// un objeto y no el cuerpo de mi función.

const crearPersona = (nombre,apellido)=> ({nombre, apellido})

const persona=crearPersona('deleina', 'llamocca');
console.log(persona);


function imprimeArgumentos() {
    console.log(arguments);
}

//una funcion flecha no recibe argumentos
//pero si se necesita la palabra clave es 'args'(pero solo nos devolvera el primer argumento)
//pero  si se necesita todos los argumentos usar ...args( que es un metodo rest()),(esto los convertira en un array)
//despues del metodo rest(...) no se puede agrgar otro argumento, pero si delante de el,
//nota: el metodo rest(...) cuando esta dentro de una funcion une los elementos pero si esta fuera esto significa 
//que es un Spread Operator(operador de extensión)

const imprimeArgumentos2=(edad, ...args)=>{
    //console.log({edad,args});
    return args;
}

//imprimeArgumentos(10, true, false,'deleina','hola')

//[]sirve para darle el  nombre a cada una de las posiciones del arreglo
const [casado , vivo, nombre,saludo] = argumentos = imprimeArgumentos2(10, true, false, 'deleina', 'hola')
console.log({casado, vivo, nombre, saludo});


//para cambiar el nombre de la variable
const {apellido:nuevoApellido}=crearPersona('deleina','llamocca')
console.log({nuevoApellido});

//



const tony = {
    nombre: 'tony stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: ['mark I', 'mark V', 'Hulman'],
};

//funcion fecha sin pro-tip

//const imprimePropiedades= (personaje)=>{
//    console.log('nombre',personaje.nombre);
//    console.log('codeName',personaje.codeName);
//    console.log('vivo',personaje.vivo);
//    console.log('edad',personaje.edad);
//    console.log('trajes',personaje.trajes);
//}


//funcion flecha con pro-tip(desostructuracion de argumentos)
//{} si se coloca llaaves dentro de los agumentos se puede extraer las propiedades
//definir valor por defecto con el signo =
const imprimePropiedades = ({nombre, codeName, vivo, edad=15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}


imprimePropiedades(tony)