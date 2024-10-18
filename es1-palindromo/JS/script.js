/* ESERCIZIO 1: PAROLA PALINDROMA

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//funzioni

//funzione di verifica parola
function reversedComparison() {
  //dichiarazione in una variabile della lunghezza della parola inserita dall'utente
  const userWordLength = userWord.length;
  //PER i che parte da 0 fino ad arrivare alla metà della lunghezza della parola incrementa i
  for (let i = 0; i < userWordLength / 2; i++) {
    //SE il carattere attuale della parola inserita dall'utente NON è uguale al carattere attuale nella posizione opposta della parola inserita dall'utente
    if (userWord[i] !== userWord[userWordLength - 1 - i]) {
      //la parola non è palindroma
      return false;
    }
  }
  //ALTRIMENTI

  //la parola è palindroma
  return true;
}

//funzione di output messaggio all'utente (se palindroma o no)

function isWordPalindrome(userWord) {
  const isPalindrome = reversedComparison(userWord);
  if (isPalindrome) {
    alert("La parola che hai inserito è palindroma.");
  } else {
    alert("La parola che hai inserito non è palindroma.");
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// chiedere una parola all'utente
const userWord = prompt("Inserisci una parola.");
//chiamare la funzione sulla parola dell'utente
isWordPalindrome(userWord);
