const numbers = [12, 5, 14, 16, 20, 25, 28, 41, 11, 3];

const bigNums = numbers.filter(number => number < 20);
// console.log(bigNums)

const even = numbers.filter(number => number % 2 ===0)
// console.log(even)

//-------------------------------------------------//

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 3500},
    {id: 4, name: 'tablet', price: 20000}
];
 
const expensive = products.filter(p => p.price > 30000);
console.log(expensive)