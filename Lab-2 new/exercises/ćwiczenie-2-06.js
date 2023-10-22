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
let message = {
    content: "message",
    creator: "Mark"
};           //zmień definicje obiektu 
let email = {
    __proto__: message,
    content: "email",
    to: "Phil", 
    from: "John", 
    subject: "Hello"
};             //zmień definicje obiektu
let SMS = {
    __proto__: message,
    content: "SMS",
    phoneTo: 123456789,
    phoneFrom: 987654321
};               //zmień definicję obiektu

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