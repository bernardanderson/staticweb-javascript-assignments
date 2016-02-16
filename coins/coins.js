/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var moneyInput = prompt("Enter in a money amount (i.e. 0.00)");

function coinCounter(moneyInput) {
  // Initialize a JavaScript object to hold the coins

  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

//Each step calculates the whole number of that coin present, then 
//subtracts that amount from the remaining money.  Until the pennies
//are reached.

  coinPurse.quarters = Math.floor(moneyInput / 25);
  moneyInput = moneyInput - (25 * coinPurse.quarters);

  coinPurse.dimes = Math.floor(moneyInput / 10);
  moneyInput = moneyInput - (10 * coinPurse.dimes);

  coinPurse.nickels = Math.floor(moneyInput / 5);
  coinPurse.pennies = moneyInput - (5 * coinPurse.nickels);

  return coinPurse;
}

// Converts the moneyInput into a whole number
moneyInput = moneyInput * 100;

var coins = coinCounter(moneyInput)
console.log(coins);