// ASSESSMENT 3: Coding Practical Questions with Jest

const { COMMENT_KEYS } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//Psuedocode: 
// Input: const fibLength1 = 6
// const fibLength2 = 10
// Output:[1, 1, 2, 3, 5, 8]
// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// write a test that will include expect and to euqal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
// use a for loop to iterate through the array
// console log the test and variables
// test should pass

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6

// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
describe("fibbyTest", () => {
  it ("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibbyTest(fibLength1)).toEqual([1, 1,2, 3, 5, 8]) 
    expect(fibbyTest(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// FAIL  ./code-challenges.test.js
//   fibbyTest
//     ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

//   ● fibbyTest › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

//     ReferenceError: fibbyTest is not defined
// b) Create the function that makes the test pass.
const fibbyTest = (num) => {
  let fibbyArray = [1, 1]
  for (let i = 2; i < num; i++){
    fibbyArray.push(fibbyArray[i - 1] +
      fibbyArray[i - 2])
  }
  return fibbyArray 
}
console.log(fibbyTest(fibLength1))
console.log(fibbyTest(fibLength2))
// PASS  ./code-challenges.test.js
// fibbyTest
//   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

//Psuedocode: 
// Input: const studyMinutesWeek1 , const studyMinutesWeek2
// Output: [15, 15, 20, 30, 30, 60, 90]
//         [10, 15, 20, 45, 60, 65, 100]
// write a test that will include expect and to euqal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function that takes in an object and returns an array of the values sorted from least to greatest
// use the object.values() and .sort() methods to sort the numbers from least to greatest
// console log the test and variables
// test should pass

// a) Create a test with expect statements for each of the variables provided.


const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]
describe("studyTest", () => {
  it ("takes in an object and returns an array of the values sorted from least to greatest.", () => {
    expect(studyTest(studyMinutesWeek1)).toEqual([ 15, 15, 20, 30, 30, 60, 90]) 
    expect(studyTest(studyMinutesWeek2)).toEqual([ 10, 15, 20, 45, 60, 65, 100])
  })
})
// FAIL  ./code-challenges.test.js
// studyTest
//   ✕ takes in an object and returns an array of the values sorted from least to greatest.

// ● studyTest › takes in an object and returns an array of the values sorted from least to greatest.

//   ReferenceError: studyTest is not defined

// b) Create the function that makes the test pass.

const studyTest = (obj) => {
  const minutesArray = Object.values(obj)
    return minutesArray.sort((a,b) => a-b)
}
console.log(studyTest(studyMinutesWeek1))
console.log(studyTest(studyMinutesWeek2))

// PASS  ./code-challenges.test.js
// studyTest
  // ✓ takes in an object and returns an array of the values sorted from least to greatest. (1 ms)
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//Psuedocode: 
// Input: const accountTransactions1 = [100, -17, -23, -9]
//        const accountTransactions2 = [250, -89, 100, -96]
//        const accountTransactions3 = []
// Output: [100, 83, 60, 51]
//         [250, 161, 261, 165]
//         []
// write a test that will include expect and to equal statements for the variables 
// run the test and see it fail it should be a undefined error
// create a function that will take in an array and return an array of the accumulating sum
// use a for loop to iterate through the array
// use the .push() method to push the sum into the new array
// console log the sumArray with each account transaction variable
// this should make the test pass


// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("sumArray", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    expect(sumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sumArray(accountTransactions3)).toEqual([])
  }) 
})
// FAIL  ./code-challenges.test.js
// sumArray
//   ✕ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array (1 ms)

// ● sumArray › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array

//   ReferenceError: sumArray is not defined

// b) Create the function that makes the test pass.
const sumArray = (array) => {
  let newArray = []
  let sum = 0
  for (let i=0; i<array.length; i++){
    sum = sum + array[i]
    newArray.push(sum)
  }
  return newArray
}

console.log(sumArray(accountTransactions1))
console.log(sumArray(accountTransactions2))
console.log(sumArray(accountTransactions3))

// PASS  ./code-challenges.test.js
// sumArray
//   ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array (1 ms)
