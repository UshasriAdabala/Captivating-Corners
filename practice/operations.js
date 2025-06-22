function calculateFactorial() {
  const number = parseInt(document.getElementById('Input').value);
  let factorial = 1;

  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  document.getElementById('result').innerHTML = `Factorial of ${number} is ${factorial}`;
}

function checkArmstrong() {
  const number = parseInt(document.getElementById('Input').value);
  let sum = 0;
  let temp = number;
  const digits = number.toString().length;

  while (temp > 0) {
    let remainder = temp % 10;
    sum += Math.pow(remainder, digits);
    temp = Math.floor(temp / 10);
  }

  if (sum === number) {
    document.getElementById('result').innerHTML = `${number} is an Armstrong Number`;
  } else {
    document.getElementById('result').innerHTML = `${number} is not an Armstrong Number`;
  }
}

function generateFibonacci() {
  const number = parseInt(document.getElementById('numberInput').value);
  let a = 0, b = 1;
  let result = '';

  while (a <= number) {
    result += a + ' ';
    const temp = a + b;
    a = b;
    b = temp;
  }

  document.getElementById('result').innerHTML = `Fibonacci series up to ${number}: ${result}`;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function generatePrimes() {
  const number = parseInt(document.getElementById('numberInput').value);
  let primes = '';

  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primes += i + ' ';
    }
  }

  document.getElementById('result').innerHTML = `Prime numbers up to ${number}: ${primes}`;
}

function checkPalindrome() {
  const input = document.getElementById('numberInput').value.toString();
  const reversedInput = input.split('').reverse().join('');

  if (input === reversedInput) {
    document.getElementById('result').innerHTML = `${input} is a Palindrome`;
  } else {
    document.getElementById('result').innerHTML = `${input} is not a Palindrome`;
  }
}
