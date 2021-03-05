// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma
// così come lo faremmo "a mano"


// capisco come trovare i multipli di 3 (sarebbe la tabellina del 3 * 100 quindi )
// stampo Fizz al posto del multiplo
//

for (var i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 != 0) {
    console.log("Fuzz");
  }
  else if (i % 5 == 0 && i % 3 != 0) {
    console.log("Buzz");
  }
  else if (i % 3 == 0 && i % 5 == 0) {
    console.log("FuzzBuzz");
  }
  console.log(i);
}


//
// for (var j = 0; j < 100; j += 3) {
//  if (j != 0)
//    console.log(j + ' ');
// }
//
// for (var j = 0; j < 100; j += 5) {
//  if (j != 0)
//    console.log(j + ' ');
// }
