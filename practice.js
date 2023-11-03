// Map JS
const numbers = [1, 3, 5, 7, 9];
const even = numbers.map(num => num + 1);
// console.log(even)



// Filter JS
const numbers2 = [33, 50, 79, 78, 90, 101, 30];
const getResult = numbers2.filter(num => num % 10 === 0);
// console.log(getResult)



// Find JS
const findResult = numbers2.find(num => num % 10 === 0);
// console.log(findResult)



// Reduce JS
const muNumbers = [1, 9, 17, 22];
const getReduce = muNumbers.reduce((prev, current) => {
    return prev + current;
}, 0)
// console.log(getReduce)



// for loop 
let myNumbers = [1, 9, 17, 22];
let prev = 1;
for (let i = 0; i < myNumbers.length; i++) {
    const element = muNumbers[i];
    const result = prev + element;
    // console.log(result)
}





const people = [
    { name: 'Menna', age: 20 },
    { name: 'Tinaa', age: 30 },
    { name: 'Rinaa', age: 15 },
];
// Using Reduce
const totalage = people.reduce((accumulator, current) => {
    return accumulator + current.age
}, 0)
// console.log(totalage)
//---------------------------------------
// Using for loop
let total = 0;
for (let i = 0; i < people.length; i++) {
    const element = people[i];
    const age = element.age;
    total = total + age
}
// console.log(total)







// Object Property Access--------------------------------------------------
let data = {
    location: [
        {
            latitute: '34.5, 45.8',
            longtitue: '95.77, 58.78',
            city: 'Hydrabad',
            country: 'India'
        }
    ]
}
// console.log(data.location[0].city)



const users = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

console.log('User Email:', users.email);
console.log('User Address:', users.address)
console.log('City:', users.address.city)
console.log('Lat:', users.address.geo.lat)
console.log('Company Name:', users.company.name)