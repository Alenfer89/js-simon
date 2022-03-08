
// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.

//* genero i numeri col randomint
//*           -pusho i numeri in un array A per il controllo dopo
//*setto un timer (o due) che fa sparire il div coi numeri random e che al contempo fa partire i prompt
//*           -ad ogni prompt se il numero è come quello generato lo pusho in un array B
//*           -se array A e array B sono lunghi uguali esce un messaggio di vottoria


let activeGameNumbers=[];
for (i = 0; i < 5; i++){
  activeGameNumbers.push(generateUniqueRandomNumber(activeGameNumbers, 1, 100));
  elementCreator (activeGameNumbers[i], 'game-numbers')
}
console.log(activeGameNumbers)



function theGame(){
  document.getElementById('game-numbers').innerHTML='TENTA LA FORTUNA';
  let userGuessNumbers=[];
  let userWrongNumbers=[];
  for (i = 0; i < 5; i++){
    let userGuess = parseInt(prompt('inserisci uno dei numeri appena visti'));
    elementCreator(userGuess, "user-numbers");
    if(activeGameNumbers.includes(userGuess)){
      userGuessNumbers.push(userGuess);
      console.log(userGuessNumbers);
    } else{
      userWrongNumbers.push(userGuess);
      console.log('not ok')
    }
  }
  let result = document.getElementById('result');
  if (userGuessNumbers.length == activeGameNumbers.length){
    result.innerHTML =`HAI VINTO! Hai indovinato ${userGuessNumbers.length} numeri, ovvero: ${userGuessNumbers.slice(0, userGuessNumbers.length)}`;
  } else{
    result.innerHTML =`HAI PERSO! Hai indovinato ${userGuessNumbers.length} numeri, ovvero: ${userGuessNumbers.slice(0, userGuessNumbers.length)}, e hai sbagliato ${userWrongNumbers}`;
  }
}
setTimeout(theGame, 5000);

/**
 * Function that generates a random number between two included values, which is not already present in the given blacklist.
 *
 * @param {*} numsBlacklist The blacklist to check.
 * @param {*} min The minimum value of the random generated integer.
 * @param {*} max The maximum value of the random generated integer.
 * @returns A random generated integer which is not present in the blacklist.
 */
function generateUniqueRandomNumber(numsBlacklist, min, max){
  let check = false;
  let randomInt;
  while ( !check ){
      randomInt  = Math.floor(Math.random() * ((max + 1) - min) + min);
      if ( !numsBlacklist.includes(randomInt)  ){
          check = true;
      }
  }
  return randomInt;
}

function elementCreator (number, container){
  let element;
  element = document.createElement('div');
  element.classList.add('ax-numbers')
  element.innerHTML= number;
  document.getElementById(container).appendChild(element);
  return element;
}