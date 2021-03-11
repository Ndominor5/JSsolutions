const bill = Number(prompt(`Enter the total amound of your bill:`));
let tip;
//let totalValue;

console.log(`The bill was $${bill}, the tip was $${tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2}, and the total value is $${bill + tip}.`);