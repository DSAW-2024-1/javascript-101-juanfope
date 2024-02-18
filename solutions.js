// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Los datos de entrada no son adecuados";
  }
  return a+b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    return "Los datos de entrada no son adecuados";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let counter = 1;
  for (i = 2; i <= n; i++) { 
    counter = counter * i; 
  }
  return counter;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Los datos de entrada no son adecuados";
  }
  let matrixBiggestNumber = arr[0];
  for (let i = 1; i < arr.length ; i++) {
    if (arr[i] > matrixBiggestNumber) {
      matrixBiggestNumber = arr[i];
    }
  }
  return matrixBiggestNumber;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    return "Los datos de entrada no son adecuados";
  }
  const vowels = 'aeiouAEIOU';
  let counter = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number' ||  !Number.isInteger(n)) {
    return "Los datos de entrada no son adecuados";
  }
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
