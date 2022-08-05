/**
 * 2C = two of clubs
 * 2D = two of Diamons
 * 2H = two of Hearts
 * 2S = two of Spades
 */
//referencias HTML
const btnPedir=document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');


//
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador= 0;
let puntosCompu = 0;


//esta funcion crea un aleatorio para deck
function shuffle(arrayShuffle) {
    for (let i = arrayShuffle.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arrayShuffle[i];
        arrayShuffle[i] = arrayShuffle[j];
        arrayShuffle[j] = temp;
    }
    return arrayShuffle;
}

//esta funcion crea un nuevo deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo)
        }
    }
    //console.log(deck);
    deck = shuffle(deck)
    return deck;
}

crearDeck();

//esta funcion me permite tomar un carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'no hay cartas en el deck';
    }

    //.pop elimiena el ultimo elemnto del arreglo y lo regresa
    const carta = deck.pop();
    return carta;
}

pedirCarta();

//valor de cada carta
const valorCarta = (carta) => {
    //substring = extrae caracteres 
    //desde indice A hasta indice B sin incluirlo
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;

    //isNaN= is not a number evalua 
    //si lo que va entre el parentesis es un numero dando 
    //como resultado true o false
}

const valor = valorCarta(pedirCarta());
console.log({ valor });


//eventos
btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    puntosJugador=+valorCarta(carta);
    puntosHTML[0].innerText=puntosJugador; 
});
