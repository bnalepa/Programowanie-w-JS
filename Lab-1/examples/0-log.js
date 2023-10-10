'use strict';
console.log(111, "Hello", true);
console.log("Obiekt: %o, count: %.2f", {pole1: 1, pole2: "abcd"}, 45.5678);
console.debug("Debug");
console.warn("Uwaga!");
console.info("Informacja");
console.error("Błąd");
console.dir({pole1: [1, 2], pole2: {pro1: 1, prop2: "abc"}});
console.info("komunikat", 45, "hello");
console.table([1,2,3,4]);
counter = 5;
hoisting = "Hoisting"
console.log(hoisting, counter);
var counter;
var hoisting;
