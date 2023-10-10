/**
 * Napisz skrypt, który generuje losowy łańcuch o długości w zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString  
 */

let length = 5;
let randomString = '';
let possibleChar = "abcdefghijklmnopqrstuvwxyz0123456789";

for(let i = 0; i < length; i++)
{
    randomString += possibleChar[Math.round(Math.random(0)*36)];
}

/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
console.log(randomString);