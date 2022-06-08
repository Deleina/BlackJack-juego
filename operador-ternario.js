//ejemplo de horario de tienda

/**
 * dias de semna abrimos a las 11
 * pero los fines de semana abrimos alas 9 
 */

//entra a un sitio web, para consultar si esta 
//abierto o no....

const dia =1; // 0:domingo ... 1:lunes...

const horaActul=11;

let horaApertura;
let mensaje;  //esta abierto, esta cerrado, hoy abrimos a las xxx

if (dia === 0 || dia === 6) {
    console.log('fin de semana');
    horaApertura=9
}else{
    console.log('dia de semana');
    horaApertura=11;
}


if (horaActul >= horaApertura){
    mensaje='esta abierto'
}else{
    mensaje= 'esta cerrado, hoy abrimos a las ' + horaApertura
}


//forma reducida

//icludes() metodo que tiene dos arreglos, que 
//sirve para indicar si algo existe en ese arreglo
//regresa falso si no existe y true si existe
//operacion ternario, conparacion

horaApertura=([0,6].includes(dia)) ? 9 : 11;

//bakstik ${}
mensaje = (horaActul >= horaApertura) ? 'esta abierto' :`esta cerrado, hoy abrimos a las ${horaApertura}`
console.log((horaApertura, mensaje));