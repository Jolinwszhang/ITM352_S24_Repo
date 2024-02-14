require("./products_data");
const num_products = 5;
let product_number = 1;
//if you use while (product_number !==num_products/2){}( causes instant loop)
while(product_number < num_products/2) {
    console.log(`${product_number}. ${ eval('name' + product_number)}`);
    product_number++;
} 

console.log(`That's all we have!`)