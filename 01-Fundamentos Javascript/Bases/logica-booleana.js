//negacion
const regresaTrue =()=>{
    console.log('regresa true');
    return true;
}


const regresaFalse =()=>{
    console.log('regresa false');
    return false;
}



console.warn('not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());
//And
//regresa true si todos los valores son verdaderos

console.warn('And'); 
console.log(true && true); //true
console.log(true && false); //false


//anbos tendrian que ser verdaderos para que regrese verdadero
//en este caso solo se regreso el que retorna false
//solo se ejecuta la primera funcion ya que retorna false
console.log('=============');
console.log(regresaFalse() && regresaTrue()); //false

//ambos mensajes en consola, pero siempre regresa false
console.log(regresaTrue() && regresaFalse()); //false
console.log('====&&===');
regresaFalse() && regresaTrue();
console.log('4 condiciones', true && true && true && false); //false
//OR || disyuncion logica,es verdadero si y solo si uno o más de sus 
//operandos son verdaderos
//siempre va a regresar true 
//si anbos son falsos regresa falso
console.warn('OR');
console.log( true || false );

console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones', true || true || true || false); //true

//asignaciones
console.warn('asignaciones ');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso= false;

//asigna el ultimo valor 
//si este tiene un valor y este otro valor,el 
//ultimo es el valor que s ele asigna a la variable
const a1 = true && 'hola mundo' && 150;

//en este caso es false por que ya no se ejecutara lo demas 
const a2 = false && 'hola mundo' && 150;
console.log(a1);

//and ejemplo
//todas las condiciones tienen que dar true para que salga verdadero
const a3 = 'hola' && ' mundo' && soyFalso;
console.log(a3);

//or ejemplo
const a4= soyFalso || 'ya no soy falso';
console.log(a4);

//nose se ejecuta el valor true por que ya encontro un valor
// ya no se ejecutara lo demas 
const a5 = soyFalso || soyUndefined || soyNull || 'ya no soy falso de nuevo' || true;
console.log(a5);

const a6 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso de nuevo' || true;
console.log(a6);

if (true || true || true || false) {
    console.log('hacer algo');
}else{
    console.log('hacer otra cosa');
}