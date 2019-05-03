//Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

function game(max) {

  //Creo una funzione che genera numeri casual
  function randomNum() {
    return Math.floor(Math.random() * max) + 1;
  }

  //creo un array vuoto e un variabile che lo riempirà
  var list = [];
  var number;

  //continuo a riempire l'array con numeri casuali finchè non contiene 16 elementi
  while(list.length < 16) {
    number = randomNum(max);
    if (list.includes(number) == false) {
      list.push(number)
    }
  }

  //ordino la lista delle mine in modo crescente
  function sortNumber(a,b) {
    return a - b;
  }
  list.sort(sortNumber);
  console.log("Il campo minato è " + list.join(","));

  //dichiaro trovato
  var trovato = false;

  //dichiaro indice
  var j = 0;

  //dichiaro giocatore
  var playerNum;

  var playerList = [];

  //definisco le regole del gioco
  while (j < delta && trovato == false) {
    playerNum = parseInt(prompt("Inserisci un numero da 1 a " + max));

    if (playerNum > max) {
      alert("Il numero " + playerNum + " non è compreso tra 1 e " + max)
    }

    var insert = false;

    if (playerList.includes(playerNum)) {
      insert = true;
    }


    if (playerNum < max && insert == false) {
      playerList.push(playerNum);
      console.log("I numeri inseriti sono: " + playerList);
    } else if (insert == true){
      alert("Hai già inserito il numero " + playerNum + ". Inserisci un nuovo numero!")

    }

    if (list.includes(playerNum)) {
      trovato = true;
      alert("Hai perso, in numero " + playerNum + " è minato! Il tuo punteggio è " + (j));
      console.log("Hai perso, in numero " + playerNum + " è minato! Il tuo punteggio è " + (j));
    } else if (trovato == false && playerNum < max && insert == false) {
      alert("Grande! Hai totalizzato " + (j + 1) + " punti. Inserisci un nuovo numero!")
      console.log("Punteggio: " + (j + 1))
      ++j;
    } else if (j == 83 && trovato == false) {
      alert("Hai vinto! Il tuo punteggio finale è " + (j + 1));
    }
  }
}


// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100,
// con difficoltà 1 => da 1 a 80
// con difficoltà 2=> da 1 a 50

function gameLevel(){
  return level = parseInt(prompt("Scegli il grado di difficolta da 0 a 2"));
}

gameLevel();

switch (level) {
  case 0:
  var max = 100
  var delta = 84
  game(max, delta);
  break;

  case 1:
  var max = 80
  var delta = 64
  game(max, delta);
  break

  case 2:
  var max = 50
  var delta = 34
  game(max, delta);
  break;

  default:
  alert("Iniziamo male! Digita un numero da 0 a 2!")
  gameLevel();
  break;
}
