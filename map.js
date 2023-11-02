function getDoubled(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = number * 2;
        output.push(doubled);

    }
    return output;
}
const numbers = [2, 5, 6, 9, 12];
const result = getDoubled(numbers)
// console.log(result)
//--------------------------


const fiveTimes = [1, 2, 4, 5].map(x => x * 5);
console.log(fiveTimes)