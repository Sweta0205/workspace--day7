/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* Data types basically specify what kind of data can be stored and manipulated within a program.
  program is something we do to complete the task
  Data types describe the different types or kinds of data that we’re gonna be working with and storing in variables. 
   There are 2 types of data types java script
   1.primitive data types :It stores single data type ,Primitive data types specify the size and type of variable values.
    They are the building blocks of data manipulation and cannot be further divided into simpler data types.
    There are 5 primitive data types
    1 numbers :represents numeric values e.g. 100
    2 strings : represents sequence of characters e.g. "hello"
    3 boolean : represents boolean value either false or true
    4 undefined : represents undefined value
    5 null  :represents null we can simply say no value at all

    2.Non primitive types:These data types are used to store a group of values or several values.
       1 Object: Object in Javascript is an entity having properties and methods.
       Everything is an object in javascript.
       2. Array: With the help of an array, we can store more than one element under a single name.


*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/*Variables can be used to store data in a program, such as strings, numbers, or boolean values.
In JavaScript, a variable stores the data value that can be changed later on.
In JavaScript, there are three different variable types: var , let , and const .
1 var -var declarations are globally scoped var declarations are globally scoped or function scoped while let and const are block scoped.
  var x = 5;
2 let -let declarations are local or block scoped,let variables can be updated but not re-declared
  let x = 5;
3 const - const variables can neither be updated nor re-declared. 
const declarations are local or block scoped  const = 5;
 */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/


/* var num1 = 12;
   var num2 = 20;
   const sum = num1 + num2; // add two numbers
   console.log("sum");


 */

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* let x;
let x = 12;
console.log(x);

 */

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* let name;
   name = 'John Doe';
     console.log(name);


 */

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* 
let x = 12;
let y =12;
let sub =x-y;
console.log(sub);



/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 
 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* 
const name1;
const name2;
const name 1 ="john";
const name2="John";
console.log(s1 === s2); 
console.log(s1 === s2.toLowerCase()); 

or 
console.log(s1.toLowerCase() === s2.toLowerCase()); // we can use this alternative method



*/

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* let x = 1;
let literal = x == 1 ? 'one' : 'five';
console.log(literal);
 */

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* let amount = 50;
let food = amount > 100 ? 'buy cola' : 'buy just a water bottle';
console.log(food) */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
