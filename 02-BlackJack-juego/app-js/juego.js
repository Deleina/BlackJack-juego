/**
 * 2C = two of clubs
 * 2D = two of Diamons
 * 2H = two of Hearts
 * 2S = two of Spades
 */

//
let deck = [];
const tipos =['C','D','H','S'];
const especiales = ['A', 'J', 'Q', 'K'];


function shuffle(arrayShuffle) {
    for (let i = arrayShuffle.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arrayShuffle[i];
        arrayShuffle[i] = arrayShuffle[j];
        arrayShuffle[j] = temp;
    }
    return arrayShuffle;
}


const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos){
            deck.push(i + tipo);
        }    
    } 
    
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp+ tipo)
        }
    }    
    console.log(deck);
    deck=shuffle(deck)
    console.log(deck);
    return deck;
}

crearDeck();