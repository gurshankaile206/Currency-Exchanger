//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService  from './Currency';

const call = async() => {
  let c1 = document.getElementById('currency-one').value; 
  let c2 = document.getElementById('currency-two').value; 
  let a1 = document.getElementById('amount-one').value;
  let a2 = document.getElementById('amount-two').value;
  let api = await CurrencyService.getCurrency(c1);

  let value = api.conversion_rates[c2]; 
  
  a1 = parseInt(a1);  
  if(!Number.isNaN(a1)) {
    document.getElementById('amount-two').value = a1 * value.toFixed(2);
  }
  
};
document.getElementById('swap').addEventListener('click', call);
