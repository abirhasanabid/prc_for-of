/**
 * Task: Given a string, use a for...of loop to count the number of vowels (a, e, i, o, u) in the string and print the result.
 */

const sentence = "Hello World";
const vowels = "aeiouAEIOU";
let count = 0;

for (const char of sentence) {
    if (vowels.includes(char)) {
        count++;
    }
}
console.log(count);