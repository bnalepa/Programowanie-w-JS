/**
 * Operatory arytmetyczne
 */
let hexVar = 0xAA;
let octVar = 011;
let binVar = 0b11111;
console.log("Dodawanie i odejmowanie")
console.log(hexVar + binVar - octVar)
console.log("Mnożenie")
console.log(1000 * 60 * 60 * 24)
console.log("Dzielenie")
console.log(24 / 5)                             //dzielenie rzeczywiste
console.log("Reszta")
console.log(24 % 5)                             //reszta z dzielenia całkowitego
console.log("Inkrementacja i dekrementacja")
console.log(hexVar++)                           //inkrementacja postfiksowa, zmiana po odczycie wartości zmiennej
console.log(++hexVar)                           //inkrementacja prefiksowa, zmiana przed odczytem zmiennej
console.log("Przypisanie z operatorem")
console.log(hexVar += 2)                        //zwiększenie zmiennej o wartość, równoważnik hexVar = hexVar operator 2 np. hexVar *= 2, hexVar /= 2 itd.
console.log("Dzielenie całkowite")
console.log(Math.trunc(24 / 5))                 //dzielenie całkowite 
console.log(~~(-24 / 5))                        //dzielenie całkowite
console.log("Potęgowanie")
console.log(2 ** 4)                             //potęgowanie
console.log("Przesunięcia bitowe")
console.log((0b0001 << 2).toString(2))          //przesunięcie bitowe w lewo o dwie pozycje
console.log((0b1000 >> 2).toString(2))          //przesunięcie bitowe w prawo o dwie pozycje
console.log("Iloczyn bitowy")
console.log((0b0110 & 0b1111).toString(2))      //iloczyn bitowy
console.log("Alternatywa bitowa")
console.log((0b0110 | 0b1111).toString(2))      //alternatywa bitowa
console.log("Negacja bitowa")
console.log((~0b1001).toString(2))              //negacja bitowa
console.log("XOR")
console.log((0b1010 ^ 0b1100).toString(2))      //XOR   
console.log("Porównania")
/**
 * Operatory porównania
 */
let isEqual = false;
isEqual = 1 == "1";
console.log(1 == "1")                           //równość wartości
console.log(1 === "1")                          //równość wartości i typów
console.log(1 != "1")                           //czy różne wartości
console.log(1 !== "1");                         //czy różne wartości lub różne typy
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
/** 
 * Operator trójwartościowy
*/
let degree = 4
console.log(degree > 2 ? "zaliczone" : "niezaliczone");
/**
 * Typy prymitywne (wbudowane)
 */
let age = 10;                                    //number
let big = 10000n;                                //BigInt    
let what;                                        //undefined
let nameVar = "name";                            //string
nameVar = null;                                  //null  
let v = Symbol('a')                              //Symbol, unikanla wartość w skrypcie                    
let active = true;                               //boolean
/**
 * Operator typeof- zwraca typ zmiennej lub stałej
 */
console.log(typeof 1);                           //number
console.log(typeof "abc");                       //string
console.log(typeof ("" == ""));                  //boolean
console.log(typeof Symbol(4));                   //Symbol
console.log(typeof what);                        //undefined
console.log(typeof nameVar);                     //null
/**
 * Wartości specjalne typów numerycznych, zmiennoprzecinkowych
 */
console.log(2 / 0);                              //Infinity
console.log(0 / 0);                              //NaN
/**
 * Nieintuicyjne porównania
 */
let undef1;
let undef2;
console.log("null == null");
console.log(null === null);                     //true
console.log("(2 / 0) === (2 / 0)");
console.log((2 / 0) === (2 / 0));               //true
console.log("(0 / 0) === (0 / 0)");
console.log((0 / 0) === (0 / 0));               //false
console.log("undef1 === undef2");
console.log(undef1 === undef2);                 //true`
/**
 * Wartości konwertowane do false
 */
console.log("Wartości konwertowane na false");
console.log(`!""`);
console.log(!"");                               //łańcuch pusty jest równoważy false, stąd negacja to true
console.log(`!undefined`);
console.log(!undefined);
console.log(`!null`);
console.log(!null);
console.log(`!0`);
console.log(!0);
/**
 * Pozostałe wartości można też zamienić na true
 */
console.log(`!!"a" && !!"b"`);                      
console.log(!!"a" && !!"b");                    //negacja łańcucha niepustego to false, ponowna negacja false daje true, stąd wynik całości to true  
console.log(!!1 || !!0);
/**
 * Obiekt Math - co prawda to nie operator, ale dostarcza podstawowych stałych i funkcji matematycznych
 */
console.log(Math.PI);                           //stała PI
console.log(Math.E);                            //stała E
console.log(Math.sqrt(4));                      //pierwiastek z liczby
console.log(Math.pow(2,4));                     //2 do potęgi 4
console.log(Math.floor(3.9));                   //największa liczb całkowita równa lub nie większa od 3.9
console.log(Math.round(3.9));                   //zaokrąglenie do najbliższej wartości całkowitej
console.log(Math.round(3.4));                 
console.log(Math.round(3.5));
console.log(Math.round(-3.5));
console.log(Math.random());                     //pseudolosowa wartości od 0 do <1
console.log(Math.max(1, 2, 4,5,));              //nakwiększa wartość
console.log(Math.min(1,2,-3,4,5));              //namniejsza wartość
console.log(Math.sin(Math.PI / 6));             //sinus kąta w radianach    
