/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: undefined


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: a string, "Tim".


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: a string, "JD". 


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: a string, "Hello, how are you?"


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 40

math = high - "5";
// Q: What is `math` set to?
// A: "math" is set to 40. This will throw an error message because the string "5" cannot be subtracted from high, the number 50. 


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:

var timAge = today - born;

// Store some information following in variables.

var yourName = "Alex";
var instructorName = "JD";

// Update the variables above so the expression reads correctly.
// Answers Below:

var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;