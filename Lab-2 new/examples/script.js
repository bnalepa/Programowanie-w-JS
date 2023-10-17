'use strict'
function sum(a, b) {
    return a + b
}
console.log(sum(1,2));

let operation = function(a, b) {
    return a * b;
}
console.log(operation(1,2));
operation = sum;
console.log(operation(1,2));
console.log(operation);
console.log(typeof operation);

let filter = val => val === 3

console.log(filter(4))

let arr = [2, 4, 5, 7, 1, 8]

function select(array, filter){
    let result = []
    for(let item of array){
        if(filter(item)){
            result.push(item);
        }
    }
    return result;
}
console.log(select(arr, i => i > 3))

function Car(prodYear, model, brand){
    this.prodYear = prodYear;
    this.model = model;
    this.brand = brand;
    this.format = function(){
        return `rok produkcji: ${this.prodYear}, model: ${this.model}`}
}

let car = new Car(2020, 'Audi4', 'Audi');
console.log(car);
let obj = {
    name: 'Adam',
    birth: 2000,
    age: function(){
        return 2023 - this.birth;
    }
}
obj.id = 10;
console.log(obj);
console.log(obj.age());

//dowolna liczba argumentów
//function varargs(a, b, ...args){
//
//}

function varargs(){
    let sum = 0;
    for(let item of arguments)
    {
        sum += item;
    }
    return sum;
}
console.log(varargs(1,2));
console.log(varargs(6,4));
console.log(varargs(5,2));

