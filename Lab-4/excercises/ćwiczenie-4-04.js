/*
Dana jest tablica obiektów opisujących książki:

let arr = [
  { title: "ABC", price: 112, authors: ["adam", "ewa", "karol"] },
  { title: "CBA", price: 14, authors: ["adam"] },
  { title: "OND", price: 16, authors: ["ewa", "karol"] },
];

Napisz funkcję, która zwróci tablicę obiektów zawierających: imię autora, listę tytułów jego książek i sumę cen jego książek. 
Przykład obiektu w tablicy zwracanej (dla przykładowej tablicy wejściowej):

{author: "ewa", books: ["ABC", "OND"], prices: 128}

 Zwracana tablica musi być posortowana alfabetycznie wg imion autorów. Załóż, że imiona nie powtarzają się w tablicy wejściowej.
Uwaga

Nie stosuj flatMap, brak wsparcia dla tej funkcji na platformie Moodle!
*/

function fun(arr) {

  let result = new Array();
  let indexTab = new Array();
  for(let book of arr)
  {
    for(let name of book.authors){      
      if(result[name] == undefined)
      {
        result[name] = {"author": name, "books": book.title, "price": book.price}
        indexTab.push(name);
      } else {

        result[name].books += ", " + book.title;
        result[name].price += book.price;
      }
    }
  }
  
  indexTab.sort();

  newArray = [];
  for(item of indexTab)
  {
    newArray.push(result[item]);
  }

  return newArray
}
  /*
  let array = new Array();
  for(let book of arr)
  {
    
    for(let name of book.authors){
      console.log(name);
      if(array.find(item => item == name)){
        console.log(1)
      }
    }
  }*/

// TESTY
	
const c1 = Math.random() * 100;
const c2 = Math.random() * 100;
const c3 = Math.random() * 100;
let arr = [
  { title: "ABC", price: c1, authors: ["adam", "ewa", "żaneta"] },
  { title: "CBA", price: c2, authors: ["adam"] },
  { title: "OND", price: c3, authors: ["ewa", "karol"] },
];
let r = fun(arr);
console.log(r.length);
console.log(r[0].author);
console.log(r[1].author)
console.log(r[2].author);
console.log(r[3].author);
console.log(r[0].price === c1 + c2);
console.log(r[1].price === c1 + c3);
console.log(r[2].price === c3);
console.log(r[3].price === c1);
console.log(r[0].books.includes("CBA") && r[0].books.includes("ABC"));
console.log(r[1].books.includes("ABC") && r[1].books.includes("OND"));
console.log(r[2].books.includes("OND"));
console.log(r[3].books.includes("ABC"));

console.log(r[0]);
console.log(c1 + c2);