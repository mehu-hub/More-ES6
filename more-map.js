const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2);
const third = numbers.map(x => x / 3);
// console.log(half)
// console.log(third)

const friends = ['Mehedi', 'Mufassir', 'Mahi', 'Musa'];
const firstLetters = friends.map(friend => friend[0])
// console.log(firstLetters)


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 3500},
    {id: 4, name: 'tablet', price: 20000}
];

const items = products.map(product => product.name)
const prices = products.map(product => product.price)
console.log(items)
console.log(prices)