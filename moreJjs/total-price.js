
// const products = [
//     {name: 'laptop', price: 560000},
//     {name: 'watch', price: 3400},
//     {name: 'shirt', price: 600},
//     {name: 'phone', price: 8000}
// ]

// let totalPrice = 0;
// for(const product of products){
//     totalPrice = totalPrice + product.price
// }
// console.log(totalPrice)



const cart = [
    {name: 'laptop', price: 560000, quantity: 1},
    {name: 'watch', price: 3400, quantity: 3},
    {name: 'shirt', price: 600,  quantity: 8},
    {name: 'phone', price: 8000, quantity: 2}
]


let cartTotal = 0;
for(const product of cart){
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal
}

console.log(cartTotal)