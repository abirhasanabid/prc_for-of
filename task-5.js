/**
 * Given an array of numbers, use a for...of loop to create a new array that contains only the even numbers from the original array.
 */

const numbers = [23, 1, 7, 76, 90];

let newArray = [];

for (const number of numbers) {
    if (number % 2 === 0) {
        // console.log("even number" ,number);
        const newNumber = ("even number", number);
        newArray.push(newNumber);
    }
}
console.log(newArray);