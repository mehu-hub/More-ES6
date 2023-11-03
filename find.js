const numbers = [12, 5, 14, 16, 20, 25, 28, 41, 11, 3];

const fives = numbers.find(number => number % 5 === 0);
const fivesAll = numbers.filter(number => number % 5 ===0);
console.log(fives);
console.log(fivesAll)
//--------------------------------------//
const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 3500},
    {id: 4, name: 'tablet', price: 20000}
];

const cheap = products.find(product => product.price < 5000)
console.log(cheap)


