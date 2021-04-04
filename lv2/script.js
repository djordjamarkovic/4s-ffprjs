/*

Simple Interaktion mit dem Benutzer:

Ausgabe mit alert(), Eingabe mit prompt(), Ja/Nein-Frage mit confirm()

*/

/* start game */
console.log("Start game");

/* define random number and variable */
/* rnd number 1,100 */
const i = Math.floor(Math.random() * 100 + 1 );
console.log("Die zufällige Zahl ist: " + i);
let guess;

/* loop - start guessing number */
 do {
  /* read input and parse int */
  guess = parseInt(prompt("Bitte geben Sie eine Ganzzahl zwischen 1 und 100 ein:"));

  if (isNaN(guess)) {
    alert("Die Zahl ist ungültig oder Abbruch.");
    break;
  }
   
  /* validate random number with promt, output if correct, if not repeat */
  if (guess > i) {
    alert("Die gesuchte Zahl ist kleiner.");
  } else if (guess < i) {
    alert("Die gesuchte Zahl ist größer.");
  } else {
    alert(`Die geratene Zahl ist richtig: ${guess}`);
  }
} while( guess != i )

/* the end */ 
console.log("The End!");





