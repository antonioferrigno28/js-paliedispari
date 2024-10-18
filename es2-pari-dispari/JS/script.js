/* ESERCIZIO 2: PARI E DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNZIONI

function userChoiceValidation() {
  let userChoice;
  while (userChoice !== "pari" && userChoice !== "dispari") {
    userChoice = prompt("Inserisci 'pari' o 'dispari'.");
    if (userChoice !== "pari" && userChoice !== "dispari") {
      alert("ERRORE! Inserisci 'pari' o 'dispari'.");
    }
  }
  return userChoice;
}

//Funzione per verificare che il numero inserito dall'utente sia compreso tra 1 e 5
function userNumberValidation() {
  let userNumber;
  while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    userNumber = parseInt(prompt("Inserisci un numero da 1 a 5."));
    if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
      alert("ERRORE! Inserisci un numero da 1 a 5.");
    }
  }
  return userNumber;
}

// Funzione per generare un numero tra 1 e 5
function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

// Funzione per sommare i due numeri
function sumNumbers(userNumber, compNumber) {
  return userNumber + compNumber;
}

// Funzione per determinare se la somma è pari o dispari
function isOddOrEven(sum) {
  return sum % 2 === 0 ? "pari" : "dispari";
}

// Funzione per mostrare il risultato
function showResult(sum, userChoice, randomNum) {
  const result =
    (sum % 2 === 0 && userChoice === "pari") ||
    (sum % 2 === 1 && userChoice === "dispari");
  const resultMessage = result ? "hai vinto!" : "Hai perso!";
  alert(`Il numero dell'utente è: ${userNumber}
Il numero random è: ${randomNum}
La somma dei due numeri è: ${sum}
L'utente ha scelto: ${userChoice}
La somma è: ${isOddOrEven(sum)}
Il risultato è: ${resultMessage}`);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// richiamare la funzione per chiedere all'utente "pari" o "dispari"
let userChoice = userChoiceValidation();

// chiedere un numero da 1 a 5 all'utente
let userNumber = userNumberValidation();

// generare un numero per il computer
let computerNumber = randomNumber();

// calcolare la somma
let totalSum = sumNumbers(userNumber, computerNumber);

// chiamare la funzione per mostrare il risultato
showResult(totalSum, userChoice, computerNumber);
