/** 
 * -----------------------------------------
 * Chapter 1 - Intro and Basic of JS
 * (i) how to add js 
 * (ii) Variables, Constants and Comments
 * (iii) Datatypes
 * (iv) Strings
 * (v) Strings methods
 * (vi) Numbers
 * (vii) Type conversions
 * (viii) Arrays
 * (ix) Boolean values and comparisons
 * -----------------------------------------
 *
 * Chapter 2 - Control Flow
 * (i) For loops 
 * (ii) While Loops
 * (iii) Do-while Loops
 * (iv) If, else, else-if
 * (v) nested if
 * (vi) Break and Continue
 * (vii) Logical Operators
 * (viii) Variables and Block Scope
 * (ix) Ternary operators
 * (x) Switch statement
 */

// chapter-1 -----------------------------------------------------------------------------

// variables in js
//var score=75
//var score=56
//let score=35
//const score=35
//score=30
//console.log("the value of the score is: ",score)
//console.log("java script")
//document.write(score)


// 3 type - var, let, const. This all are keyword which are using to declare variable.


//----------------------------------------------------
// Datatypes
// Numbers = 1, 2, 22, 33, 7.55, 3.4
// String = "I am a string", "34", 'I am also string'
// Bollean = true or false
// Null = if we create a variable which don't have any value store initially


// undefined = if a variable declare but not initialize

//object = complex data structure (array)

//----------------------------------------------------


// Strings

// print a simple string value
// let fname="Kushan";
// let lname="Ghughu";
// console.log("full name:",fname,lname);

// string concatination


    // method 1 using + operator
    // let fullName=fname+ " " +lname;
    // console.log(fullName);

    // method 2 using template literals
    // let fullName= `my first name is ${fname} and my last name is ${lname}`;
    // console.log(fullName);

// Getting string character
// console.log(fname[5]);


// string methods


// commmon string methods

    // let hobbies="cooding is my passion";
    // console.log(hobbies);

    // trim mrthods
    // let result=hobbies.trim();
    // console.log(result);
    // includes methods
    // let result =hobbies.includes(" ");
    // console.log(result);
    // slice methods
    //slice(start index, end index);
    //start index = n
    // end index = n-1

// convert a string into array
// let stringToArrray=hobbies.split(' ');
// console.log(stringToArrray);
// js string are Immutable


//--------------------------------------------


// Numbers

// Mathematical operators-
// * / % **(power)
// let a=50;
// let b=60;
// let c=a+b;
// console.log(c);
// let d=2**3;
// console.log(d);

//opertator precedence and priority
//1. () any type backet
// 2. **
// 3. * / % (left to right)
// 4. + - (left to right)

// let score=50;
// let r= score * 2+(4*3)-8/2%4;
// console.log(r);

// Concatination of numbers
// let r2="my score is "+ r;
// console.log(r2);

// Loose Equality(==) vs strong Equality(===) Operator

//lose eqyality(==)
// let age=22;
// console.log(age=="22"); //focus only value not type

//strong equality(===)
// console.log(age==="22"); //focus only type not value


// ---------------------------------------------


// Type conversion
// let stringType="55";
// console.log(typeof(stringType));

// number method
// let numberMethod= Number(stringType);
// console.log(typeof(numberMethod));



//----------------------------------------------


// Arrays

// let dishes=["biriyani", "fried rice", "pokora"];
// console.log(dishes);
// //modify
// dishes[1]="icecream"
// console.log(dishes);
// //join method
// console.log(dishes.join('  '));
// //indexof
// console.log(dishes.indexOf("pokora"));

// concat method


// Length property


// Push()


// pop()


// chapter-1 --------------------------------------------------------------------------------


// chapter-2 -----------------------------------------------------------------------------

//-------------------------
// For loops
// for(let i=1; i<=10; i++){
//     console.log("run task is: ", i);
// }

// use case of for loops
//let dishes=["biriyani", "fried rice", "pokora"];
// for(let i=0; i<dishes.length; i++){
//     console.log(i+1,dishes[i]);
// }

// while loops
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// do while loops
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

//--------------------------

// if, else, else-if
// let budget=5000;
// if(budget>6000){
//     console.log("5 star hottel");
// }else if(budget>3000){
//     console.log("3 star hottel");
// }


//--------------------------


// Break and Continue

// Break


// Continue


//--------------------------


// Logical Operators


//--------------------------



// Variable and Block scope


//-------------------------


// Ternary Operators


//------------------------


// Switch case statement


//------------------------


// chapter-2 -----------------------------------------------------------------------------