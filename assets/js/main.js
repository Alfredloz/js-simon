//1) Un alert espone 5 numeri casuali diversi.
//2) dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha vito precedentemente.
//3) una volta insriti i 5 numeri, software dice quanti e quali sono i numeri ricordati.
//!documentready
$(function(){
//1)
//benvenuto al gioco
alert('Benvenuto al gioco della memoria: vedrai per 30 secondi un messaggio con 5 numeri diversi. Memorizzali e scrivili nella console. Vediamo se te li ricorderai tutti. RICORDA: i numeri sono da 1 a 5000 e sono separati dalla VIRGOLA! Buona fortuna!🍀🍀🍀🍀🍀🍀🍀')

//creazione numeri casuale
var arrayNumb = [];
for (let i = 0; i < 5; i++) {
   var x  =   Number(arrayNumb.push(Math.floor(Math.random() * 5000) + 1));
}
console.log(arrayNumb);
//2) creazione timer
var seconds = 30;
var timer = setInterval(function(){
    document.getElementById('timer').innerHTML = seconds;
    document.getElementById('random_numbers').innerHTML = arrayNumb;
    if (seconds === 0) {
        alert('stop intervallo');
        clearInterval(timer);
        $('#random_numbers').hide();
        //3) *********richiesta numeri utente************
       setTimeout(function(){
        var userArrayNumbers = [];
        for (let i = 0; i < 5; i++) {
            userArrayNumbers.push(Number(prompt('inserisci i numeri che hai visualizzato!')));         
        }
        alert('i numeri del bot erano '+ ''+arrayNumb + ',' + ' invece i tuoi numeri erano ' +'' + userArrayNumbers )
       }, 1000);
    } else {
        seconds--;
    }
}, 1000);



});