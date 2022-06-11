//objeto, {}
//objtos pares de valores clave:valor
//; indica cuando se termina de incluir 

const personaje={
    nombre:'tony stark',
    codeName:'Iroman',
    vivo:false,
    edad:40,
    coords:{
        lat : 34.034,
        lng:118.70,
    },
    trajes: ['mark I', 'mark V', 'Hulman'],

    direccion:{
        zip:'10880 , 90265',
        ubicacion:'Malibu, Calofornia',
    },
    
    "ultima-Pelicula":'Infinity war'
};

//imprimes objeto personaje
console.log(personaje);

//imprimes nombre 
console.log('Nombre',personaje.nombre);
console.log('Nombre', personaje['nombre']);

//imprimes edad 
console.log('edad', personaje.edad);

//se imprime coords
console.log('coors', personaje.coords);

//se imprime coords y lat
console.log('coords', personaje.coords.lat);

//imprime la cantidad de trajes
console.log('numero trajes',personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[personaje.trajes.length-1]);


//si se quiere nombrar a el valor de el objeto con - se hace con
//doble comilla("") y acceder al valor con [].
console.log("ultima-pelicula",personaje['ultima-Pelicula']);


//mas detalles
//delete antes de la propiedad(clave) que se quiera eliminar
delete personaje.edad
console.log(personaje);


personaje.casado= true;


//en lugar de tener un objeto se tiene pares de valores.
//devuelve un array de pares
const entriesPares=Object.entries(personaje);
console.log(entriesPares);


//El método Object.freeze() congela un objeto, es decir: 
//impide que se le agreguen nuevas propiedades(clave:valor)
//impide que se puedan eliminar propiedades ya existentes
Object.freeze(personaje);

//no se puede cambiar las propiedades 
personaje.dinero=000000000000;
personaje.casado=false;

//pero si se puede acceder al  objecto 
//dentro de otro y cambiar la el valor
personaje.direccion.ubicacion='Costa Rica';
console.log(personaje);


//devuelve el objeto en array 
//getOwnPropertyNames para convertir los name(propiedad) del objeto
const propiedades=Object.getOwnPropertyNames(personaje);

//devuelve el valor del objeto(valor)
const valores = Object.values(personaje);
console.log(valores);



