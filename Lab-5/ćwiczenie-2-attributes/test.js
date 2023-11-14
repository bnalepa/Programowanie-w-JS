/**
 * Testy
 */
/**
 * Ćwiczenie 2
 * 1. Dodaj klasę `border` do elementu li z innerText 'Karolina'
 * 2. Odblokuj input o name 'title'
 * 3. Dodaj atrybut max elementu input o name 'year'
 * 4. Nadaj wartość atrybutu type pierwszemu przyciskowi na 'submit'
 * 5. Nadaj wartość atrybutu type drugiemu przyciskowi na 'clear'
 */

let message = "TESTS\n";
let item = Array.from(document.querySelectorAll('li')).filter(i => i.innerText === "Karolina");
if (item && item.classList.contains('border')) {
    message += 'Test21 passed\n';
} else {
    message += 'Test21 failed\n';
}
item = Array.from(document.querySelectorAll('input[name="year"]')).find(item => item.name === 'title');
if (item && item.getAttribute('disabled')) {
    message += 'Test22 passed\n';
} else {
    message += 'Test22 failed\n';
}
alert(message);
