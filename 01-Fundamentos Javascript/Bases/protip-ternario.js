// si a > b retornar "?" o si no ":" b

//numero mayor
const elMayor = (a, b)=>(a > b) ? a :b;
console.log(elMayor(20, 15));
//menbresia

const tieneMenbresia=(mienbro)=> (mienbro) ? 'dos Dolares' : '10 dolares';
console.log(tieneMenbresia(true));


//los operadores ternarios para funcionar necesitan los 
//dos valores
//
const amigo =false;
const amigosArr=[
    'peter',
    'tony',
    'dr strange',
    amigo ? 'thor':'loki'
];

console.log(amigosArr);

//notas
const nota=70; 
const grado= nota >=95 ? 'A+':
             nota >= 90 ? 'A' :
             nota >= 85 ? 'B+': 
             nota >= 80 ? 'B': 
             nota >= 75 ? 'c+' :
             nota >= 70 ? 'c' : 'F'

console.log(nota , grado);