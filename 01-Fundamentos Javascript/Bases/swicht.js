//El swicth evaluar el valor de la variable 'dia' y va a comparar
//ventajas => si no se tiene una condicion especifica para cualquier otro valo,
//se define un valor default, si no se cumplen todas las condiciones anteriores
// es importante el tipo de valor 
const dia =2; // 0:domingo

switch (dia) {
    case 0:
        console.log('domingo');
        break;
    case 1:
        console.log('lunes');
        break;
    case 2 :
        console.log('martes');
        break; 
    default:
        console.log('no es lunes, martes o domingo');
}