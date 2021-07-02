const currencyElOne = document.getElementById('currency-one');
const currencyElTwo = document.getElementById('currency-two');
const amountElOne = document.getElementById('amount-one');
const amountElTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');






currencyElOne.addEventListener('change', calculate);
currencyElTwo.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
amountElTwo.addEventListener('input', calculate);







