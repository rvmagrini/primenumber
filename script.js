/* 
analise de requisitos - requirement analysis
entender a logica de negocio - business logic
explicar algoritmo - algorithm
implementar: linguagem programacao - implement 
*/

// Requirement: Print to the ? console all prime numbers between 0 and 100, including 100.
// Prime number: A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number.

// A simple but slow method of checking the primality of a given number n, called trial division, tests whether n is a multiple of any integer between 2 and square root of n.

// sem resto nao é primo

// Algorithm
// 1. create a variable to store all numbers;
// 2. loop through the var until 100;
// 3. create a condition in which the number is divisible only by 1 and by itself
// 4. print the number that met the condition to the console

// 2;
// 3;
// 5;
// 7;
// 11;
// 13;
// 17;
// 19;
// 23;
// 29;
// 31;
// 37;
// 41;
// 43;
// 47;
// 53;
// 59;
// 61;
// 67;
// 71;
// 73;
// 79;
// 83;
// 89;
// 97;

// Implementation

// Function to check if it is prime

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

document.querySelector("#checkbtn").addEventListener("click", function () {
  let txtNum = document.querySelector("#txtnum").value;
  let outcomeCheck = document.querySelector("#outcomecheck");
  let num = Number(txtNum);

  isPrime(num)
    ? (outcomeCheck.innerHTML = `Yes, ${num} is a prime number.`)
    : (outcomeCheck.innerHTML = `No, ${num} is not a prime number.`);
});

const find = () => {
  let txtFirstNum = document.querySelector("#txtfirstnum").value;
  let txtLastNum = document.querySelector("#txtlastnum").value;
  let outcomeFind = document.querySelector("#outcomefind");
};

////

// for (let i = 0; i <= 100; i++) {
//   isPrime(i) && primeArr.push(i);
// }

// console.log(primeArr);
