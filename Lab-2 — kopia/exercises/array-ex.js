let arr1 = ["adam", "ewa", "karol"];
let r1 = arr1
    .filter(item => item.endsWith('a'))
    .map(item => item.toUpperCase());
console.log(r1);

let arr2 = [2, 5, 7, 2, 3, 6 ,2];
// z tabicy dla liczb podizelnych przez 3 oblicz kwadrat i zpisz wyniki w tablicy

let r2 = arr2
    .filter(item => item % 3 == 0)
    .map(item => Math.pow(item,2))
console.log(r2); 

let r3 = arr2.reduce((a, i) => a += i, 0);
console.log(r3); 


arr2.forEach((item,index, arr) => {
    console.log(index, item, arr.length);   
})

// z tablicy arr2 wybierz liczby większe od 5, które są w drugiej połówce
let r4 = arr2.filter( (i,index,arr) => index > (arr.length/2) && i > 5);
console.log(r4)