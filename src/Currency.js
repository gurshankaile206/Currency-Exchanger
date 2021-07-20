export default class CurrencyService{

  static async getCurrency(currency) {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false; 
        throw new Error("Whoops!")
      }
      return jsonifiedResponse;
    } catch(Error) {
      alert("Not a valid Currency");
    }
  }
}


