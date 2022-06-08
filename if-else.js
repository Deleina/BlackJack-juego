//esctructuras de control
//cuando escribimos codigo javascript, por defecto el navegador lleeera el cript de forma secuencial
// es decir una linea tras otra, por lo tanto una accion que realicemos en la numero 5 ocurrira antes que una liena 3

//condicionales :
//al hacer un programa necesitarems establecer condicionales o decisiones,
//donde buscamos que el navegador reaclece una caccion A si se cumple una accion B  si no se cumple.

//if else if else

//los argumentos que se mandan en un if son de valor booelano
//en otros casos hay exepciones ejem: undifined, null, una asignacion.

let a = 5;

if(a >=10){
    console.log('a es mayor o igual a 10');
}else{
    console.log('a es menor a 10');
}


console.log('fin del programa');

//new: permite crar una nueva instancia de un objeto 
const hoy= new Date();
let dia1 =hoy.getDate(); //0:domingo 1:lunes 2:martes 3:miercoles ect..

console.log(dia1);

//== operador igualdad regular es que si los operandos donde de distinto tipo
// de valor, el operador intenta convertir los valores al mismo tipo antes de compararlos
//=== operador de estricta igualdad, revisa si dos operandos son iguales y da un resultado booleano
//if(dia1 ===0){
    //console.log('domingo');
//}else if (dia1 ===1){
//console.log('lunes');
//}else if (dia1===2) {
    //console.log('martes');
//}else{
    //console.log('no es lunes, martes o domingo');
//}
    
// sin usar if ,else if o swicth, unicamente objetos 
const dia=5
const diaLetras ={
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',
}

console.log(diaLetras[dia] || 'dia no definido');


//ARRAY
const diaLetras2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado',];
console.log(diaLetras2[dia]);

