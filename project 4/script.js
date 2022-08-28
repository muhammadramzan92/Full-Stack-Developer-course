const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne =document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencytwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate(){

    const currencyOneCode =currencyOne.value;
    const currencyTwoCode =currencyTwo.value;
    fetch( `https://v6.exchangerate-api.com/v6/a43d02c063c1303f1c06c071/pair/${currencyOneCode}/${currencyTwoCode}`)
    .then(res => res.json())
    .then(data =>
         {
        const conversionrate = data.conversion_rate;
      const  roundOff = (conversionrate).toFixed(2);
        rate.innerText = `1 ${currencyOneCode}=${roundOff} ${currencyTwoCode}`;
        const amount2 = new Intl.NumberFormat('en-US', {style: 'currency', currency: currencyTwoCode}).format((amountCurrencyOne.value * conversionrate).toFixed(2));
        amountCurrencytwo.value=amount2;
        });
};  
 
//envent listeners
 currencyOne.addEventListener('change',calculate);
amountCurrencyOne.addEventListener('input',calculate);
currencyTwo.addEventListener('change',calculate);
amountCurrencytwo.addEventListener('input',calculate);

swap.addEventListener('click',() =>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;

    calculate();


})

calculate(); 