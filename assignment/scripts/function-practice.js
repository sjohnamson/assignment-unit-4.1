console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Sam'));


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
} // end addNumbers

console.log('In addNumbers, adding: 3 and 5:', addNumbers(3, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(number1, number2, number3) {
  return number1 * number2 * number3;
}
// end multiply
console.log('Multiplying 5, 3, and 8:', multiplyThree(5, 3, 8));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// end isPositive

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

const fruitArray = ['apple', 'orange', 'banana'];
const emptyArray = [];

function getLast(array) {
  return array[array.length - 1];
}
// end getLast

console.log(getLast(fruitArray));
console.log(getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let one of array) {
    if (one === value) {
      return true;
    }
  }
  return false;
}
// end find

console.log('is cantaloupe in fruitArray?', find('cantaloupe', fruitArray));
console.log('is orange in fruitArray?', find('orange', fruitArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  }
  return false;
}
// end isFirstLetter

console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
let numberArray = [-1, 1, 2, 3, -32, 4, 5, 19]
function sumAll(numbers) {
  let sum = 0;
  for (let each of numbers) {
    sum = sum + each;
  } return sum
  // TODO: loop to add items
  // TODO: return the sum
}
// end sumAll

console.log(`This is the sum: ${sumAll(numberArray)}`)

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
const allPositive = numbers => {
  return positiveNumbers = numbers.filter(checkPositive);
  function checkPositive(number) {
    return number > 0;
  }
}
// end allPositive

console.log(allPositive(numberArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Create a function that will take a positive number and add up all the integers from 1 to that number, resulting in one number.

function addUp(num) {
  let result = 0;
  for (i = 1; i <= num; i++) {
    result = result + i;
  }
  return result
}
// end addUp

console.log('Testing addUp with 21:', addUp(21));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}