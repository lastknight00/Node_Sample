var currency = require('./currency');
var currencyOOP = require('./currency_OOP');
var c = new currencyOOP(0.91);
console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50));

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.USToCanadian(30));

console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(c.canadianToUS(50));

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(c.USToCanadian(30));