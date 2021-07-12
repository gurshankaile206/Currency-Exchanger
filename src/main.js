// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService  from './Currency';

const call = async() => {
  let c1 = document.getElementById('currency-one').value; 
  let c2 = document.getElementById('currency-two').value;
  let p1 = document.getElementById('amount-one').value;
  let p2 = document.getElementById('amount-two').value;
  let api = await CurrencyService.getCurrency(c1);

  let value = api.conversion_rates[c2]

}