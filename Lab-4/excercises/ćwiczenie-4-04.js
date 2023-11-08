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

  let array = new Array();
  for(let book of arr)
  {
    
    for(let name of book.authors){
      console.log(name);
      if(array.find(name)){
        
      }
    }
    
    
  }
}


let arr = [
  { title: "ABC", price: 112, authors: ["adam", "ewa", "karol"] },
  { title: "CBA", price: 14, authors: ["adam"] },
  { title: "OND", price: 16, authors: ["ewa", "karol"] },
];

fun(arr);
