"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
// variables
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = 'Road 41, New York, USA';
// get product
const productName = 'fanny pack';
const product = products_1.default.filter((product) => product.name === productName)[0];
// preorder or not
if (product.preOrder === 'true') {
    console.log('Preorder, gonna be sent later this year.');
}
else {
    console.log('No preorder');
}
// calculate shipping costs
if (Number(product.price) > 25) {
    shipping = 0;
    console.log('Free shipping!');
}
else {
    shipping = 5;
}
// calculate taxes
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
    console.log('This address contains New York and thus a tax percentage of 10% applies.');
}
else {
    taxPercent = 0.05;
}
// calculate total
taxTotal = Number(product.price) * taxPercent;
total = taxTotal + Number(product.price) + shipping;
// print receipt
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
