export default class CurrencyService{
    
constructor(){}

static async getCurrency() {
    try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/ae9d09d8f8c52a211e3b3669/latest/USD`);
        let jsonifiedResponse;
        if (response.ok && response.status == 200) {
            jsonifiedResponse = await response.json();
        } else {
            jsonifiedResponse = false; 
        }
        return jsonifiedResponse;
    } catch(error) {
        return false; 
    }
    }
}


