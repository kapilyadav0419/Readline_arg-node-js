const prompt = require('prompt-sync')({sigint: true});
const name = prompt('Please enter your name:');
console.log(`Hello ${name}`) ;