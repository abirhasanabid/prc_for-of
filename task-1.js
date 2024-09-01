/**
 * Task: Given an array of numbers, use a for...of loop to calculate the sum of all elements in the array and print the result.
 */

const numbers = [23,56,78,9,5,54];
let sum = 0;

for(const number of numbers){
    sum = sum + number
}
console.log("sum of array element:", sum);