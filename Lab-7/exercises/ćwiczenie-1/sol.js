let nbpRates;
const inputCode = document.getElementById("input-currency-code");
const outputCode = document.getElementById("output-currency-code");
const inputAmount = document.getElementById("input-amount");
const outputAmount = document.getElementById("output-amount");
const inputLabel = document.getElementById("input-amount-label");
const outputLabel = document.getElementById("output-amount-label");
const selectDate = document.getElementById("effective-date");
const errorContainer = document.getElementById("error");
const calculateBtn = document.getElementById("calculateBtn");
const askRadio = document.getElementById("ask");
const bidRadio = document.getElementById("bid");

/**
 * Zaimplementuj kalkulator walutowy, który pobiera dane kursów z API NBP.
 * Adres:
 * https://api.nbp.pl/api/exchangerates/tables/C/<data>,
 * w miejscu <data> należy wstawić datę z elementu HTML o id `effectiveDate`
 * np.
 * https://api.nbp.pl/api/exchangerates/tables/C/2023-01-19
 * Serwer zwróci kursy walut o poniższej strukturze jeśli w żądaniu nagłówek `Accept` ma wartość `application/json`:
 * [
 *   {
 *     "table": "C",
 *     "no": "014/C/NBP/2023",
 *     "tradingDate": "2023-01-19",
 *     "effectiveDate": "2023-01-20",
 *     "rates": [
 *       {
 *         "currency": "dolar amerykański",
 *         "code": "USD",
 *         "bid": 4.3183,
 *         "ask": 4.4055
 *       },
 *       {
 *         "currency": "dolar australijski",
 *         "code": "AUD",
 *         "bid": 2.9852,
 *         "ask": 3.0456
 *       },
 *       ...
 *    }
 *  ]
 *  Wypełnij elementy `inputCode` i `outputCode` listą opcji o wartości kodów walut: USD, EUR itd.
 *  Na podstawie trybu odczytanego z pól typu radio określ tryb: sprzedaż lub kupna
 *  Na podstawie trybu kodów walut wejsciowej (inputCode) i wyjściowej (outputCode) oraz kwoty wejściowej (inputAmount) wylicz jej wartość
 *  w walucie wyjściowej (outputAmount).
 *  Jeśli wystąpi błąd podczas pobierania lub nie istnieje tabela dla wybranej daty wyświetl komunikat błedu w elemencie error
 *  Zmiana trybu (z kupna na sprzedaź lub ze sprzedaży na kupno) powinna:
 *  - zmienić wynik w polu kwoty obliczonej `outputAmount`
 *  - zmienić treść elementów `inputLabel` i `outputLabel`
 *  przykłady wyglądu kalkulatora po pobraniu danych:
 *  - dla trybu `Kurs kupna` - img1.png
 *  - dla trybu 'Kurs sprzedaży - img2.png
 *
 */

const getUrl = (date) =>
    `https://api.nbp.pl/api/exchangerates/tables/C/${date || selectDate.value}`;
const changeLabels = (option) => {
    if (option === "ask") {
        inputLabel.textContent = "Chcę dostać";
        outputLabel.textContent = "Płacę";
    } else if (option === "bid") {
        inputLabel.textContent = "Mam";
        outputLabel.textContent = "Dostanę";
    }
};

async function fetchExchangeRates() {
    const url = getUrl();
    errorContainer.textContent = "";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                if (res.statusText.includes("Brak danych")) {
                    throw new Error(res.statusText.split(" - ")[1]);
                } else if (res.statusText.includes("Invalid date range")) {
                    throw new Error("Nie możesz podać daty z przyszłości");
                } else {
                    console.error(res);
                    throw new Error("Nie znany błąd");
                }
            }
        });
        return response[0].rates;
    } catch (error) {
        errorContainer.textContent = error;
    }
}

async function populateCurrencyCodes() {
    const rates = await fetchExchangeRates();
    if (!rates) {
        return;
    }
    for (const rate of rates) {
        const option = document.createElement("option");
        option.value = rate.code;
        option.textContent = rate.code;
        inputCode.appendChild(option);
        outputCode.appendChild(option.cloneNode(true));
    }
}

async function calculateExchangeRate() {
    const rates = await fetchExchangeRates();
    if (!rates) {
        return;
    }
    const inputCurrency = inputCode.value;
    const outputCurrency = outputCode.value;
    const amount = inputAmount.value;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    changeLabels(mode);

    let inputRate = rates.filter((r) => r.code === inputCurrency)[0][mode];
    let outputRate = rates.filter((r) => r.code === outputCurrency)[0][mode];
    if (!inputRate) {
        errorContainer.textContent = `Error: Brak danych dla ${inputCurrency}`;
        return;
    }
    if (!outputRate) {
        errorContainer.textContent = `Error: Brak danych dla ${outputCurrency}`;
        return;
    }

    const exchangeRate = ((amount * inputRate) / outputRate).toFixed(4);
    outputAmount.textContent = exchangeRate;
    outputAmount.textContent = `${exchangeRate} ${outputCurrency}`;
}

calculateBtn.addEventListener("click", calculateExchangeRate);
askRadio.addEventListener("change", calculateExchangeRate);
bidRadio.addEventListener("change", calculateExchangeRate);
selectDate.addEventListener("change", populateCurrencyCodes);

populateCurrencyCodes();
changeLabels("ask");
