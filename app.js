/** 
 * ***** STRINGS ******
 *  */ 
console.log('Mark Howell')
console.log('Mark Howell' + 'is an Elder!')
console.log('Mark Howell'[0]) 
console.log('Mark Howell'.length) 
// console.log('Mark Howell'.length - 1)
let str = 'Mark Howell worships God!'
console.log(str)
console.log(str[str.length - 1]) // Can only do 'length - 1' when declaring a variable
/**
 * ****** NUMBERS *******
 */
console.log(10 + 5)
/**
 * ****** LET & CONST *******
 */
let numbValue = 13
console.log(numbValue)
numbValue = numbValue + 2
console.log(numbValue)
const name = 'Mark Howell'
console.log(name)
let celsius = 10
let farenheight = celsius * 1.8 + 32
console.log(celsius)
console.log(farenheight)
/**
 * ****** EQUALITY *******
 */
// Use Console Log
/**
 * ****** IF/ELSE STATEMENTS *******
 */
let subsribed = true
if (subsribed == true) {
    console.log('show the video')
}
else {
    console.log('create an account')
}
let newSubsribed = false 
if (newSubsribed == true) {
    console.log('show the video')
}
else {
    console.log('create an account')
}
let bestSusbcribed = true
let bestLoggedIn = false
if (bestSusbcribed === true) {
    console.log('show the video')
}
else if (bestLoggedIn === true) {
    console.log('tell the user to upgrade account')
}
else {
    console.log('tell the user to log into account')
}
let cash = 50
let price = 40
if (cash > price) {
    console.log('You paid extra, here is ' + (cash-price) + 'dollars')
}
else if (cash < price) {
    console.log('You still owe!')
}
else {
    console.log("Thank you for your service!")
}
cash = 700
price = 600
let storeIsOpen = true
if ("cash >= price && storeIsOpen") { // If statement MUST HAVE "Truthy" Value!!
    console.log('Print Receipt!')
} 
else {
    console.log('false')
}
let val = "8"
if (val) {
    console.log('Truth Value ' + !!val)
}
else {
    console.log('False Value ' + !!val)
}
let hot = true
hot ? console.log('Weather is hot!') : console.log('Weather is cold!')
let newHot = false
newHot ? console.log('Weather is hot!') : console.log('Weather is cold!')
/**
 * ****** LOOPS *******
 */
let count = 1
while (count < 3) {
    console.log('this ran')
    count = count + 1
}
/**
 * REMEMBER: "SCI": 
 * 1. SET: The INITIAL NUMBER("i=0")
 * 2. COUNT: How MANY TIMES is the object looping
 * 2. INCREMENT: BY HOW MANY TIMES is the object looping 
 *    i.e. by 1(i++) by 2(i+=2)
 */
/** 
for (let i = 0; i < 3; i++) { 
    console.log(i)
}
for (let i = 0; i <= 20; i+=2) { 
    console.log(i)
}
*/
// PROBLEM SET:
for(let i = 1; i <=20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " -> FrontEnd Simplified")
    }
    else if (i % 3 === 0) {
        console.log(i + " -> FrontEnd")
    }
    else if (i % 5 === 0) {
        console.log(i + " -> Simplified")
    }
    else {
        console.log(i + " -> " + i)
    }
}
// PROBLEM SET: 2
const newString = "FrontEnd Simplified"
for (let i = 0; i <= newString.length; i++) {
    /**
     * Use "item[i]" when printing out 
     * ITEMS instead of NUMBERS 
     * i.e. the letters in a string
     */
    console.log(newString[i]) 
}
// Start FUNCTIONS
/**
 * ****** FUNCTIONS *******
 */
// FUNCTION DEFINITION
function welcomePersonToFES() {
    console.log('Welcome to FES, Mark')
}
// CALLING FUNCTION
welcomePersonToFES()
function bestWelcome(name) { // item inside parentheses is called PARAMATER
    console.log(name)
}
// When CALLING PARAMATER, you must put what you want INSIDE PARENTHESES 
bestWelcome('Mark') 
function newerWelcome(name) {
    console.log('Welcome to FES, ' + name)
}
newerWelcome('Mark')
function companyWelcome(firstName, lastName) {
    console.log('Welcome to FES ' + firstName + lastName)
}
/**
 * Funtions are best used with RETURN STATEMENTS
 * After Return, NOTHING after function wil work
 */
companyWelcome('Mark','Howell')
function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}
console.log(sumOfTwoNumbers(10,10))
function convertCelsiusToFarenheight(celsius) {
    let farenheight = celsius * 1.8 + 32
    return farenheight 
}
console.log(convertCelsiusToFarenheight(0))
// Can also write on ONE LINE OF CODE
function bestFormula(celsius) {
    return celsius * 1.8 + 32
}
console.log(bestFormula(0))
// Second Way of Defining Function: ARROW FUNCTIONS and CONST
/**
 * With Arrow Functions, ALWAYS USE "CONST"
 */
const bestOperation = (celsius) => {
    return celsius * 1.8 + 32
}
console.log(bestOperation(10))
/**
 * ****** ARRAYS *******
 */
// "[]" are how you DEFINE ARRAYS
let arr = [20, 30, 40] 
console.log(arr) 
// You access items in array SAME WAY as before
console.log(arr[0])
/**
 * Calling LAST ELEMENT
 * // use "___.lenght-1" to signal LAST ELEMENT in array
 */
console.log(arr[arr.length-1]) 
// TIME STAMP: 3:09
console.log(arr.length)
// To ADD to array, use ".PUSH"
arr.push(200)
console.log(arr)
// TIME STAMP: 5:30
/**
 * CALL BACK FUNCTION:
 * (*******  () => {}  ********)
 */
// When FILTERING, declare a NEW ARRAY
let newArr = arr.filter((element) => {
    console.log(element)
    return true // MUST "return true"
  } 
)
console.log(newArr)
let bestArr = arr.filter((element) => {
    if (element < 50) {
        console.log(element)
        return true
    }
}) 
/** SHORT WAY 
 * NO 'RETURN'
 * DO NOT need "()" OR "{}"
 * Just need "=>"
 * If you are returnin ONE LINE OF CODE
*/
let lastArr = arr.filter(element => element > 50)
console.log(lastArr)
// Filtering out grade excercise:
let grades = ["A+", "A", "FAIL"]
let goodGrades = grades.filter((element) => {
   console.log(element)
   if (element !== "FAIL") {
        return true
   }
})
console.log(goodGrades)
// SHORT WAY:
let bestGrades = grades.filter(element => element !== "FAIL")
console.log(bestGrades)
let otherGrades = ["A+", "A", "A-", "B+", "B", "B-", "C", "FAIL"]
console.log(otherGrades.length)
for (let i = 0; i <= otherGrades.length; i++) {
    /**
     * "console.log(i)" WILL LIST numbers
     * i.e. "1, 2, 3, 4"
     * "console.log(otherGrades[i])" WILL LIST **ITEMS**
     * i.e. "A+, A-", etc.
     */
    console.log(otherGrades[i])
}
// Looping Excercise:
let marksGrades = ["A", "A", "A", "FAIL", "FAIL"]
let marksGoodGrades = []
for (let i = 0; i <= marksGrades.length; i++) {
    if (marksGrades[i] !== "FAIL") {
        marksGoodGrades.push(marksGrades[i])
    }
}
console.log(marksGoodGrades)
// TIME STAMP: 22:51