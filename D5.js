/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

console.log("array inziale:", pets);
for (let i = 0; i < pets.length; i++) {
  let animale = pets[i];
  console.log("animale:", animale);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
let arrayOrd = [];
let petsClone = structuredClone(pets);
arrayOrd = petsClone.sort();
console.log("animali in ordine alfabetico:", arrayOrd);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let petsReverse = [];
let petsClone2 = structuredClone(pets);
petsReverse = petsClone2.reverse();
console.log("array reverse", petsReverse);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let petsClone3 = structuredClone(pets);
let animalRemoved = petsClone3.splice(0, 1)[0]; // [0] per indicare che animalRemoved non sarà ""l`array dei rimossi" ma l`elemento rimosso, cosi da poterlo inserire nel push come singolo elemento
petsClone3.push(animalRemoved);

console.log("l`array con il primo elemento messo in fondo", petsClone3);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "Black", //aggiunto maiuscola per test
    trims: ["life", "style", "r-line"],
  },
];

function randomPlate(n) {
  n = n * 1000; //!!!!se tempo provare a usare max e min!!!
  let RandomN = Math.floor(Math.random() * n);
  return RandomN;
}

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = randomPlate(10);
}
console.log("array cars con licensPlate", cars);
/* ESERCIZIO 6
Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
oggettoinserito = { brand: "Lancia", model: "Musa", color: "orange", trims: ["bim", "bum", "bam"], licensePlate: randomPlate(10) };
cars.push(oggettoinserito);
console.log("array cars con nuovo oggetto Lancia", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  let trimsPrimo = cars[i].trims[0];
  justTrims.push(trimsPrimo);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  primaLettera = cars[i].color.charAt(0).toLowerCase();
  if (primaLettera === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let counter = 0;

while (counter < numericArray.length) {
  console.log("il numero è", numericArray[counter]); //32 compreso
  if (numericArray[counter] === 32) {
    break;
  } else {
    //console.log("il numero è", numericArray[counter]); --->32 non compreso
    counter++;
  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const arrayPosition = [];

for (let i = 0; i < charactersArray.length; i++) {
  /*mi sono accorto troppo tardi che sarebbe stato più comodo creare una variabile
  mettere un unico push i  fondo allo swithc*/

  switch (charactersArray[i].toLowerCase()) {
    case "a":
      arrayPosition.push(1);
      break;
    case "b":
      arrayPosition.push(2);
      break;
    case "c":
      arrayPosition.push(3);
      break;
    case "d":
      arrayPosition.push(4);
      break;
    case "e":
      arrayPosition.push(5);
      break;
    case "f":
      arrayPosition.push(6);
      break;
    case "g":
      arrayPosition.push(7);
      break;
    case "h":
      arrayPosition.push(8);
      break;
    case "i":
      arrayPosition.push(9);
      break;
    case "l":
      arrayPosition.push(10);
      break;
    case "m":
      arrayPosition.push(11);
      break;
    case "n":
      arrayPosition.push(12);
      break;
    case "o":
      arrayPosition.push(13);
      break;
    case "p":
      arrayPosition.push(14);
      break;
    case "q":
      arrayPosition.push(15);
      break;
    case "r":
      arrayPosition.push(16);
      break;
    case "s":
      arrayPosition.push(17);
      break;
    case "t":
      arrayPosition.push(18);
      break;
    case "u":
      arrayPosition.push(19);
      break;
    case "v":
      arrayPosition.push(20);
      break;
    case "z":
      arrayPosition.push(21);
      break;
  }
}
console.log(arrayPosition);
