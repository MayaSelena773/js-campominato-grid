
// L'utente indica un livello di difficoltà (con un prompt) 
// in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba,
// il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. 
// In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.


//FASE PREPARATORIA
//Chiediamo il livello all'utente tramite prompt
//Livelli: 1- da 1 a 100, 2- da 1 a 81, 3- da 1 a 49
//Genero 16 bombe entro il range del livello
//Numero massimo di tentativi = gameMaxRange - numero bombe

//FASE LOGICA
//Finchè il gioco non è finito: 
     //chiediamo il numero all'utente
     //se è una bomba termina il gioco con alert: hai perso + punteggio
     //Altrimenti mettiamo il numero in un array (vuoto) dei "numeri indovinati" se non è già presente
     //Se l'utente ha raggiunto il numero massimo di tentativi (lunghezza array indovinati=== numero
     //max di tentativi) il gioco termina con alert : hai vinto!!


    
 //Chiediamo il livello all'utente tramite prompt
 const userLevel = prompt ('Scegli il livello tra 1, 2 o 3'); 
 console.log(userLevel);
 const numberOfBombs = 16;

 //Stabilisco i range dei tre livelli
 let gameMaxRange;  

 if (userLevel === '1') {

    gameMaxRange = 100;

 }else if (userLevel === '2') {

    gameMaxRange = 81;

 }else if (userLevel === '3') {

    gameMaxRange = 49;
 }

 //Genero le bombe
 const bombs = generateBombs(numberOfBombs, 1, gameMaxRange);
 console.log(bombs);

 //Numero massimo di tentativi
 const maxAttemptes = gameMaxRange - numberOfBombs;
 console.log(maxAttemptes);

  //Array vuoto per i numeri indovinati
  let guessedNumbers = [];


 //Funzionamento del gioco
 let gameContinue = true;

 while (gameContinue === true) {

   //Si chiede un numero all'utente
   const userNumber = parseInt(prompt('Scrivi un numero'));

   //Se il numero è una bomba gameContinue diventa false
    if (bombs.includes(userNumber)) {

      //Finisce il gioco e hai perso
      //Scrivo anche il numero dei tentativi indovinati
      gameContinue = false;
      alert('Hai perso!');
      alert('Tentativi giusti: ' + guessedNumbers)

    }else {

      //Se non è una bomba
      //e se non è già presente nei numeri indovinati
      //inserisco il numero nell'array dei numeri indovinati
      if (!guessedNumbers.includes(userNumber)) {
         guessedNumbers.push(userNumber);
      }

      //Se l'utente ha indovinato tutti i numeri
      //si ferma il gioco: hai vinto
      if(guessedNumbers.length === maxAttemptes) {

         gameContinue = false;
         alert('Hai vinto!!');

      }

    }

 }
 



 //------------
 //FUNCTIONS
 //------------

 //Generare 16 bombe con numeri random
 function generateBombs(numberOfElements, rangeMin, rangeMax) {

    //Aggiungere i numeri ad un array vuoto senza duplicati
    const randomNumbersArray = [];
    while (randomNumbersArray.lenght < numberOfElements) {

        const randomNumber = getRndInteger(rangeMin, rangeMax);

        //pushamo il numero nell'array solo se non è già presente

        if (!randomNumbersArray.includes(randomNumber)){
            randomNumbersArray.push(randomNumber);
        }

    }
    console.log(randomNumbersArray);

 }

 function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }