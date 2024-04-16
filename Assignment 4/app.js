// --------Create a program that determines if a given number is even or odd.---------
// let num = prompt(" please enter a Number");
// if( num % 2 == 0)
// {
//     alert(" given number: " + num + " is Even");
//     // console.log( " given number: " + num + " is Even")
// }
// else{
//     alert(" given number: " + num + " is odd");
//     // console.log( " given number: " + num + " is Odd")
// }


// --------------Assignment 4 chap 6 - 9--------------

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// let a = 10;
// document.write( `the value of ++a is :${++a} </br>
//  Now the value of a is :11 </br>` )

//  document.write("</br>")
// document.write( `the value of a++ is ${a++} </br>
//  Now the value of a is ${a++} </br>`)

//  document.write("</br>")

//  document.write( `the value of --a is ${--a,--a} </br>
//   Now the value of a is ${a--} </br> `)

//   document.write("</br>")

//  document.write( `the value of a-- is ${++a} </br>
//   Now the value of a is ${--a} </br> `)
 
// document.write( `<h2> Result:</h2></br> The value of a is: ${a--} `)


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;
// --2;
// --1 - --1;
// --0 - --0 + ++1;
// -1 - 
// document.write(" result " , result)

// 3. Write a program that takes input a name from user &
// greet the user.

// let userName = prompt( "Enter your name ");
// console.log( ` Assalamualikum ${userName}`);
// alert( `Assalamualikum ${userName}`)

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


    // Prompt the user for input
    // let userInput = prompt("Enter a number:" , 5);
    
    // // If user input is empty or not a number, default to 5
    // let number = userInput ;
    
    // // Validate user input
    // if (number==isNaN) {
    //   swal( "error");
    // } else {
    //   // Generate multiplication table
    //   let table = "<h2>Multiplication Table of " + userInput + "</h2>";
    //   for (let i = 1; i <= 10; i++) {
    //     table += `${number} × ${i} = ${number * i}<br>`;
    //   }
    //   document.write(table);
    // }


//     6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let sub_1 = prompt( " Enter subject 1");
let sub_2 = prompt( " Enter subject 2");
let sub_3 = prompt( " Enter subject 3");
let totalMarks = 300;
let sub1marks = +prompt( "Enter subject 1 marks");
let sub2marks = +prompt( "Enter subject 2 marks");
let sub3marks = +prompt( "Enter subject 3 marks");

let obtainedMarks = (sub1marks+sub2marks+sub3marks);
document.write(` The Obtained marks is ${obtainedMarks} </br>`)

let percentage =  ((obtainedMarks/totalMarks) *100);
document.write(` The percentage marks is ${percentage}`)





 

