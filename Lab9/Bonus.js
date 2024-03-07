function calculateTax(monthly_sales, tax_rate) {
    let tax_owing = [];
    for (let i = 0; i < monthly_sales.length; i++) {
        let tax = monthly_sales[i] * tax_rate;
        tax_owing.push(tax);
    }
    return tax_owing;
}

// Example usage:
let monthly_sales = [1000, 1500, 2000];
let tax_rate = 0.1; // 10%
let taxes = calculateTax(monthly_sales, tax_rate);
console.log(taxes); // Output: [100, 150, 200]
