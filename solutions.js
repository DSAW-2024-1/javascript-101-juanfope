// Sum of Two Numbers
function sum(a, b) {
  const a = 8;
  const b = 5;
  let suma = a+b;
  return suma;
}
console.log(sum(a,b));

// Factorial of a Number
function factorial(n) {
  const n = 4;
  let i, counter = 1;
  for (i = 1; i <= n; i++) { 
    counter = counter * i; 
  }
  return counter;
}
console.log(factorial(n));

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
