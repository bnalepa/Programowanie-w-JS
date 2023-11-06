/**
 * Zdefiniuj funkcję zwracającą największą liczbę spośród wszystkich liczb w tablcy tablic.
 * Wykorzystaj funkcje z prototypu Array i nie stosuj instrukcji iteracyjnych: for, while czy do ... while
 * Zastosuj funkcje strzałkowe (flatMap)
 */

function largestNumber(arr){

    if(arr[0] == undefined) return undefined;
    let array = arr.flatMap(item => item);
    return array.reduce((max, item) => item > max ? item : max)
}

let arr1 = [[1, 2, 3, 5], [2, 6, 8], [1, 67], [4, 6, 98]];

//console.log(largestNumber(arr1))

if (largestNumber(arr1) === 98){
    console.log("Test 11 passed.");
}else {
    console.log("Test 11 failed.");
}
let arr2 = []
if (largestNumber(arr2) === undefined) {
    console.log("Test 12 passed.");
} else {
    console.log("Test 12 failed.");
}
