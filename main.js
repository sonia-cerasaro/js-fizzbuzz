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

// altra funzione piu' corta ed efficace

// Ciclo indice(Numeri) da 1 a 101
for (var i = 1; i < 101; i++) {

  // creo una variabile che verra' riempita ogni volta che la divisione
  // per 3 e 5 avra' lo stesso resto
  var output = "";

  // se il resto dei numeri-di-indice-diviso-3, e' uguale a 0
  // inserisci/concatena nella variabile output la stringa "Fizz"
  if (i % 3 == 0) {output += "Fizz";}

  // se il resto dei numeri-di-indice-diviso-5, e' uguale a 0
  // inserisci/concatena nella variabile output la stringa "Buzz"
  if (i % 5 == 0) {output += "Buzz";}

  // se la variabile output e' uguale a ""
  // (stringa vuota-dove all'interno c'e' salvato sia Fizz che Buzz o entrambi)
  // rinomina la variabile output i (indice)
  if(output == "") {output = i;}

  // Grazie alla precedente concatenazione (+=)
  // il valore i della variabile output
  // stampera' in console sia Fizz che Buzz che FIZZBUZZ.
  console.log(output);
}
