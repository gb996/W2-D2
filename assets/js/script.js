/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const persona = {
   nome: 'Mario',
   cognome: 'Rossi',
   eta: 25,
   citta: 'Roma',
}

console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni , vive a ${persona.citta}`)



/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/
persona['email'] = 'email';
delete persona.eta;

console.log(persona)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utente = {
   indirizzo: {
      via: 'manzoni',
      citta: 'Roma',
      cap: '12345',
   }
}
console.log(utente.indirizzo.cap)



/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete persona.eta;
console.log(persona)
let nome1 = 'nome';
console.log(persona[nome1]);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 6;
let b = 9;
let c = 16;


if (a === b && b === c) {
   console.log('Pareggio')
} else if (a > b && a > c) {
   console.log('a')
} else if (b > a && b > c) {
   console.log('b')
} else if (c > a && c > b) {
   console.log('c')
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totale;

const prezzo = 20;
const spedizione = 9.99;

if (prezzo >= 50) {
   console.log(' spedizione gratuita')
} else if (prezzo < 50) {
   console.log(`Totale carrello: ${prezzo}€ - Spedizione:${spedizione}€  — Totale finale: ${prezzo + spedizione}€`)
}


totale = prezzo >= '50' ? "spedizione gratuita" : (`Totale carrello: ${prezzo}€ - Spedizione:${spedizione}€  — Totale finale: ${prezzo + spedizione}€`)
console.log(totale)



/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [42, 'ciao', true];
if (typeof array[0] === 23){
   console.log(`${array[0] } e un numero`)
}else{
   console.log(`${array[0] } non e un numero`)
}


/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let vuoto = []
vuoto.push(1, 2, 3, 4, 5)

console.log(vuoto)
console.log(vuoto.length)
vuoto.unshift(0)
console.log(vuoto)
console.log(vuoto.length)

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let oggetti = ['Penna', 'Quaderno', 'Zaino', 'Astuccio']

oggetti.splice(1, 1, 'Diario')

console.log(oggetti)
/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let prodotti = ['Penna1', 'Quaderno1', 'Zaino1']

if (prodotti.includes('Zaino1')) {
   console.log(`${prodotti[2]} è in carrello: true`)
}

if (prodotti.includes('Zaino1')){
   console.log(prodotti.indexOf('Zaino1'))
}else {
   console.log('Non in carrello')
}
console.log(prodotti)
/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
