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
/** MAPPING:
 * Very Similar to FILTER: 
 * Callback: "() => {}, "
 * With PARAMATER in parentheses: "(element)"
 */
let markArr = [1, 3, 67, 89]
let secondMarkArr = markArr.map((element) => {
    console.log(element)
})
// Difference is you can CHANGE ELEMENTS:
/**
 * With returns: You MUST do CONSOLE.LOG
 * OUTSIDE of the map:
 */
let thirdMarkArr = markArr.map((element) => {
    console.log(element)
    return undefined
})
console.log(thirdMarkArr)
// ONE LINE of code:
let fourthMarkArr = markArr.map(element => "Daddy")
console.log(fourthMarkArr)
// Turn Array of Dollars into Cents:
let dollars = [1, 3, 5, 8]
let cents = dollars.map((element) => {
    console.log(element)
    return element * 100
})
console.log(cents)
// ONE LINE of code:
let newCents = dollars.map(element => element * 100)
console.log(newCents)
// Using FOR LOOP: 
let bestDollars = [3, 4, 7]
let bestCents = []
for (let i = 0; i < bestDollars.length; i++) {
    bestCents.push(bestDollars[i] * 100)
}
console.log(bestCents)
/**
 * ****** OBJECTS *******
 */
/** Used to store MULTIPLE VARIABLES 
 * in ONE VARIABLE
 */
let userFirstName = "Mark"
let userLastName = "Howell"
let userDiscordID = "Mark Howell 001"
let userSubsriptionStatus = "VIP"
/**Instead of declaring EACH user:
 * i.e. "User FIRST NAME, LAST NAME, etc."
 * we declare ONE USER: and store all info 
 * in the OBJECT:
 */
let user = {
    username: "Mark",
    email: "MHowellJr16@gmail.com",
    subsrcriptionStatus: "VIP",
    discordID: "Mark Howell 001",
    lessonsCompleted: [0, 1]
}
// CALLING the OBJECT:
console.log(user.discordID)
// Can also access SINGLE ITEMS
// Just like STRINGS:
console.log(user.discordID[0])
// TIME STAMP: 2:29
console.log(user.subsrcriptionStatus)
console.log(user.lessonsCompleted)
// Can use FILER and MAP methods:
console.log(user.lessonsCompleted.map(elem => elem * 2))
/**OBJECTS AS ARRAYS:
 * Use "[]" to store EVERYTHING(like array)
 * Then use "{}" to store each OBJECT
 */
let newUser = [{
    username: "Mark",
    email: "MHowellJr16@gmail.com",
    password: "Witness2025",
    subsrcriptionStatus: "VIP",
    discordID: "Mark Howell 001",
    lessonsCompleted: [0, 1]
},
{
    username: "Gloria",
    email: "GSmith16@gmail.com",
    password: "MyKing2025",
    subsrcriptionStatus: "VIP",
    discordID: "Gloria Smith 001",
    lessonsCompleted: [0, 1, 2, 3, 4]
}
]
/**
 *  Call ITEM in Array of Objects,
 * Just like you would a regular array
 * "newUser[0]"
 */
console.log(newUser[0])
// Then you can call ITEM in GIVEN object in array:
console.log(newUser[0].discordID)
console.log(newUser[1].lessonsCompleted.map(elem => elem * 2))
// Log in Function:
function logIn(email, password) {
    for(let i = 0; i < newUser.length; i++) {
    console.log("this ran")
    if (newUser[i].email === email) {
    console.log(email, password)
    if (newUser[i].password === password) {
        console.log("log the user in!")
    }
    else {
        console.log("password is incorrect")
    }
    return
  }
}
    console.log("information is not correct")
}
logIn("MHowellJr16@gmail.com", "Witness2025")
// Register Function:
function register(
     username,
     email, 
     password, 
     subsrcriptionStatus, 
     discordID, 
     lessonsCompleted) {
    let marriageUser = {
        username: username,
        email: email,
        password: password,
        subsrcriptionStatus: subsrcriptionStatus,
        discordID: discordID,
        lessonsCompleted: lessonsCompleted
    }
    newUser.push(marriageUser)
}
register(
    'Gloria Howell', 
    "GHowell@gmail.com", 
    'Together2026',
     "VIP", 
    "Gloria Howell 002"
    [0, 1, 2, 3, 4, 5, 6]
)
console.log(newUser)
// TIME STAMP: 17:10