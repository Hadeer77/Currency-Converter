let amountInput = document.getElementById("amount");
let fromCurrency =  document.getElementById("fromCurrency");
let toCurrency =  document.getElementById("toCurrency");
let resultDiv = document.querySelector(".result");

const exchangeRates = {
    USD : 1,
    SAR : 3.75,
    EGP : 51.04,
};

function calculateConversion(){
    let amountValue = parseFloat(amountInput.value) || 0;
    let from = fromCurrency.value;
    let to = toCurrency.value;

    let amountInUSD = amountValue / exchangeRates[from];
    let finalResult = amountInUSD * exchangeRates[to];

    resultDiv.innerHTML = `${amountValue} ${from} = ${finalResult.toFixed(2)} ${to}`;
};

amountInput.addEventListener("input" , calculateConversion);
fromCurrency.addEventListener("change", calculateConversion);
toCurrency.addEventListener("change", calculateConversion);

