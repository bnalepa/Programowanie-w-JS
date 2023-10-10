/**
 * Zmienne typy number i BigInt
 */
let hexVar = 0xFF;                              //w kodzie szestnastkowym
console.dir(hexVar);
let binVar = 0b011001100 ;                      //w kodzie binarnym
console.log(binVar);
let octVar = 011;                               //w kodzie ósemkowym
console.dir(octVar);
let doubleVar = 1.67;
console.log(doubleVar);                           
let earthMass = 6e24;                            //notacja wykładnicza
console.log(earthMass);   
let bigIntVar = 100000000000000000000000n;      //BigInt
console.log(bigIntVar)
let booleanVar = true
console.log(booleanVar);
console.dir(bigIntVar / 10000n)                 //operacje na BigInt
/**
 * Zmienne tpu String
 */
let stringVar1 = "ABCD"                         //podwójny apostrof
let stringVar2 = 'ABCD'                         //popjedynczy apostrof
let stringVar3 = `ABCD`                         //backtick, interpolacja łańcuchów
/**
 * Zmienne typu boolean
 */
let active = false
/**
 * Zmienne o wartośściach undefined i null
 */
let undefinedVar;
console.log(undefinedVar)
let nullVar = null;
console.log(nullVar)
/**
 * Stałe - nie można pominąć ich inicjacji oraz wykonać ponownego przypisania
 */
const earthMassConstant = 6e24;
//const undefindeConstant;                        //błąd SyntaxError
//earthMassConstant = "5";                        //błąd TypeError

/**
 * Różnice między var a let
 * - let ma zasięg blokowy a var funkcji
 * - var umożliwia wielokrotne deklarowanie tej samej zmiennej, let tylko raz
 * - var podlega pod hoisting (wynoszenie deklaracji na początek skryptu), let nie
 * - var obsługuje wszystkie przeglądarki (ECMAScript1), let wprowadzono w ES6, obsługują wszystkie nowe przeglądarki* 
 */

/**
 * Zasięg (scope) zmiennej let
 */

let letGlobal = 5;              //zmienna globalna, dostępna wszędzie, istniej do końca wykonywania tego skryptu
{
    let local = 3;              //zmienne lokalna, dostępne wewnątrz bloku, znika po zakończeniu wykonywania tego bloku
    {
        let subLocal = 4;       //zmienne lokalna bloku zagnieźdżonego
        local = subLocal;
        console.log(local);     //ta zmienna jest tu widoczna
        console.log(letGlobal); //zmienna globalna jest też widoczna
    }
    //console.log(subLocal);    //błąd ReferenceError, tej zmiennej już nie ma, nie jest zdefiniowana
}
console.log(letGlobal);
/**
 * Zasięg (scope) zmiennej var
 */
var globalVar = "Hoisting";
{
    var varLocal = 5;                   //ta zmienna nie jest lokalna, to zmienna o zasięgu całej funkcji lub skryptu
}
console.log("varLocal", varLocal);      //bez problemu można ją odoczytać poza blokiem, w którym zadeklarowano

/**
 * NIE ZALECA SIĘ STOSOWANIE ZMIENNYCH VAR
 */

/**
 * Formatowanie liczba
 */
let value = 11111.1111111;
console.log(value.toString(2));                     //łańcuch z liczbą w kodzie dwójkowym
console.log(value.toString(16));                    //łańcuch z liczbą w kodzie szesnastkowym
console.log(value.toFixed(2));                      //łańcuch z liczbą dziesiętną z dwoma miejscami po przecinku
console.log(value.toPrecision(3));                  //łańcuch z liczbą zapisaną w 3 cyfrach
console.log(value.toExponential(3));                //łańcuch z liczbą w postaci wykładniczej z trzema cyframi po przecinku
/**
 *      Interpolacja łańcuchów
 */
let price = 5;
const userName = "Adam";
let message = `${userName} your price is ${price}$`;    //wewnątrz {...} można wstawić dowolne wyrażenie, które zostanie zamienione na łańcuch np. {price * 0.22}
console.log(message);