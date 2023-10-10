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