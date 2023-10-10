/**
 * Zbuduj z użyciem prototypów hierarchę obiektów,
 * Obiekt `email` z lista właściwości:
 * content,
 * to, 
 * from, 
 * subject
 * Obiekt `SMS` z własciwościami:
 * content,
 * phoneTo,
 * phoneFrom
 * Obiekt `message` miał właściwość:
 * content
 * creator
 * Obiekty `email` i `SMS` powinny mieć ten sam prototyp w postaci obiektu `message`
 */
let message = {};           //zmień definicje obiektu 
let email = {};             //zmień definicje obiektu
let SMS = {};               //zmień definicję obiektu

//Testy
if (email.__proto__ === SMS.__proto__ && email.__proto__ !== {}.__proto__){
    console.log("Test 61 passed");
} else {
    console.log("Test 61 failed");
}
if (email.creator) {
    console.log("Test 62 passed");
} else {
    console.log("Test 62 failed");
}