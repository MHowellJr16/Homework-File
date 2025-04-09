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