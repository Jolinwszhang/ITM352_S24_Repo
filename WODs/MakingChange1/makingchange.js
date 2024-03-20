function makeChange(amount){
// quarters
let quarters = Math.floor(amount/25);
amount %= 25;
// dimes
let dimes = Math.floor(amount/10);
amount %= 10;
//nickles 
let nickles = Math.floor(amount/5);
amount %= 5;
//pennies
let pennies = amount;
// object remaning
return {quarters,dimes,nickles,pennies};
}

// usage and implementation 
let amount = 5.64
let change = makeChange(amount);
console.log(change);