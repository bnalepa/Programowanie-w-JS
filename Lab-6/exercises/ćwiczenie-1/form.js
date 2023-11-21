/**
 * Napisz skrypt wykonaującywalidację formularza z pliku `form.html` wg założeń:
 * - nie ma połączenia między Krakowem a Gdańskiem i między Gdańskiem a Poznaniem
 * - data w polu "start-date" nie może być wcześniejsza od bieżącej daty
 * - data w polu "end-date" musi być późniejsza od daty w "start-date"
 * Rozwiązanie proste polega na zablokowaniu wysłania formularza dla niepoprawnych danych np. gdy wybrano Kraków i Gdańsk lub 1.02.2023 i 1.02.2023,
 * po próbie wysłania z błędami należy użytkownikowi wyświetlić błędy w odpowiednich elementach <span> pod polami formularza.
 * Rozwiązanie zaawansowane polega na dynamicznych zmianach w formularzu (zmian atrybutów pól), aby użytkownik nie mógł wybrać
 * niepoprawnych danych.
 * Uwaga!
 * Nie można zmieniać pliku `form.html`!
 * Wskazówki
 * zdarzenie 'input' wywoływane jest, gdy użytkownik wybierze lub wpisze dane w polu formularza
 * zdarzenie 'change' wywoływane jest, gdy użytkownik tylko zmieni wartość w polu
 * funkcja obiektu zdarzenia anulująca normalny tryb obsługi zdarzenia to preventDefault(), ale nie blokuje propagacji
 * Informacje na temat walidacji fomrularzy w JS: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
 */
const form = document.querySelector('form');
const startLocationSelect = document.getElementById('start-location');
const endLocationSelect = document.getElementById('end-location');
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const errorSpans = document.querySelectorAll('.error');

form.addEventListener('submit', event => {
    let isValid = true;


    if ((startLocationSelect.value === 'S2' && endLocationSelect.value === 'E4') || (startLocationSelect.value === 'S4' && endLocationSelect.value === 'E5')) {
        errorSpans[0].textContent = 'Brak połączenia między tymi miastami';
        isValid = false;
    } else {
        errorSpans[0].textContent = '';
    }


    if (new Date(startDateInput.value) < new Date()) {
        errorSpans[1].textContent = 'Data rozpoczęcia pobytu nie może być wcześniejsza od bieżącej daty';
        isValid = false;
    } else {
        errorSpans[1].textContent = '';
    }


    if (new Date(endDateInput.value) <= new Date(startDateInput.value)) {
        errorSpans[2].textContent = 'Data zakończenia pobytu musi być późniejsza od daty rozpoczęcia';
        isValid = false;
    } else {
        errorSpans[2].textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});
