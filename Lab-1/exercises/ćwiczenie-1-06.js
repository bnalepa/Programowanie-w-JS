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