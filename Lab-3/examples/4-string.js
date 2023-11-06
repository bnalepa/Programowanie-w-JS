const str = "👉Zażółć Gęślą Jaźń۞"
console.log("Zamiana na wielkie litery: ", str.toLocaleUpperCase());
console.log("Zamiana na małe litery: ", str.toLocaleLowerCase());
console.log("Znak na 3 pozycji:", str.charAt(3));
console.log("Code point na 1 pozycji", str.codePointAt(1));
console.log("Podział na słowa:","JavaScript is cool language".split(' '));
console.log("Podział na znaki (błędzie dzieli klastry - emotikony):", str.split(''));
console.log("Ucięcie emoticony:", str.slice(1, 8));
console.log("Emoticona zajmuje dwa znaki:", str.slice(2, 8));   
console.log("Odwołanie do emotikony przez indeks (nie działa poprawnie):", str[0]);
console.log("Czy łańcuch zaczyna się znakiem 👉?", str.startsWith("👉"));
console.log("Czy łańcuch kończy się się znakiem ۞?", str.endsWith("۞"));
console.log("Czy łańcuch zawiera słowo 'Gęślą'?", str.includes("Gęślą"));
console.log("Uzupełnianie łańcucha '12.45' o dodatkowe zera z lewej, aby wypełnić pole o szerokości 10 znaków:","12.45".padStart(10, '0'))
console.log("Tworzenie łańcucha na podstawie kodów znaków w UTF-16", (String.fromCharCode(189, 43, 190, 61, 1234)));     
const zipCoderegEx = /\d\d-\d\d\d/g;  
console.log("Czy łańcuch '25-018' jest zgodny z wyrażeniem regularnym?", "25-018".match(zipCoderegEx)?true:false);
console.log("Zamiana wystąpień 'JS' na znaki 'ZY' w łańcuchu 'JS is cool':", 'JS is cool'.replace('JS','ZY'));