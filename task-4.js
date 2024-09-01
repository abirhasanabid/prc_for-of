/**
Task: Given an array of strings, use a for...of loop to convert each string to uppercase and print the modified array.
 * 
 */

const countries = ["Bangladesh", "Chaina", "Pakisthan"];
let modArry = [];

for (const country of countries) {
    // console.log(country)
    const newCountryName = country.toUpperCase();
    // console.log(newCountryName);
    modArry.push(newCountryName);

}
console.log(modArry);