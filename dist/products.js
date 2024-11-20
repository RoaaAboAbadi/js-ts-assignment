var products = [
    { name: "pen", price: 10 },
    { name: "notebook", price: 20 },
    { name: "eraser", price: 5 },
];
function totalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var result = totalPrice(products);
console.log(result, "result");
