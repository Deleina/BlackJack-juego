import { crearCarta } from "./crearCarta";
import { pedirCarta } from "./pedirCarta";
import { valorCarta } from "./valorCarta";

// turno de la computadora

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 *  @param {HTMLElement} puntosComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {


    if (!puntosMinimos ?? true) throw new Error("Minimun points is mandatory");
    if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario')


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

       // crear carta
       const imgCarta = crearCarta(carta)
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora <= puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
