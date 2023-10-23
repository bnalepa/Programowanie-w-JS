/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area.
 * Wynik zapisz do zmiennej łańuchowej radius z sześcioma miejscami po przecinku.
 * Załóż, że w area jest zawsze liczba nieujemna. Zmienna PI jest w bibliotece Math
 */
//let area = 3.14159;
let area = 3.14159;
let radius = '';
radius = (Math.sqrt(area/Math.PI)).toFixed(6)
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
console.log(radius)
if (radius === '1.000000'){
    console.log("Test passed");
} else {
    console.log("Test failed");
}

/**
 * Napisz skrypt, który w łańcuchu triangle generuje ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości 
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierszy powinna odpowiadać
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * #####
 * Uruchom skrypt dla różnych wartości height np:
 * height = 1
 * height = 0
 * height = 10
 */
let height = 7;
let triangle = '';
for(let i = 1; i<=height; i++)
{
    triangle += "#".repeat(i) + "\n";
}
/*
    Wpisz kod zadania w miejscu tego komentarza.
*/
console.log(triangle);

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

/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      5%                    100%
 */
let n = 5;
let m = 100;
while(n<m)
{
    let progressBar = "";
    let progression = Math.round(n/m*100);
    progressBar += "|" + ("#".repeat(progression/2)).padEnd(50," ") + "|\n" // dodanie paska
    progressBar += "0%".padEnd(24," ") + (progression + "%").padEnd(24," ") + "100%"   // dodanie procentów pod paskiem
    /*
        Wpisz kod zadania w miejscu tego komentarza.
    */
    console.log(progressBar);
    n += 10
}

/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######  
 */
let rectWidth = 3;
let rectHeight = 10;
let rectBorderSymbol = '#';
let rectString = '';

let regex = /\S/g;
let check = rectBorderSymbol.match(regex);

if(rectWidth >-1 && rectWidth < 81 && rectHeight >-1 && rectHeight < 81 && check != null && rectBorderSymbol.length == 1 )
{
   rectString += rectBorderSymbol.repeat(rectWidth) +"\n";
    for(let i = 2; i < rectHeight; i++)
    {
        rectString += rectBorderSymbol + " ".repeat(rectWidth-2) + rectBorderSymbol +"\n"; 
    }
    rectString += rectBorderSymbol.repeat(rectWidth);
} else {
    rectString = "Błędne dane wejściowe"
}
console.log(rectString);