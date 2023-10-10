/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzymską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie zmieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
let decimalNumber = 1;
let romanNumber = 'IV';
if(decimalNumber == null || decimalNumber == undefined){

} else {
    switch (decimalNumber){
        case 1:
        case 2:
        case 3:
            romanNumber = "I".repeat(decimalNumber);
            break;
        case 4:
            romanNumber = "IV";
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            romanNumber = "V" +"I".repeat(decimalNumber%5);
            break;
        case 9:
            romanNumber = "IX";
            break;
        case 10:
            romanNumber = "X";
            break;
        default:
            romanNumber = "Decimal number is out of range!";
    }
}

/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
console.log(romanNumber);