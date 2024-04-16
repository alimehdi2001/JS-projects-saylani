// ------------Assignment 5-------------

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let cityName = prompt("Enter your cuty name");
// if(cityName === "karachi");
// console.log(`welcome to city of lights`);
// document.write("welcome to city of lights")

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let gender = prompt("input your Gender");
// if(gender === "male")
// {
//     alert(" Good morning sir")
// }
// else if(gender === "female")
// alert("good mornig ma am");

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now.

// let signalColor = prompt( " Enter any color ");
// if( signalColor === "red")
// {
//     alert( " must stop! ")
// }
// else if ( signalColor === "Yellow")
// {
//     alert( " ready to move! ")
// }
// else if( signalColor === "green")
// {
//     alert( " move on! ")
// }
// else
// alert( " petrol khtm hogaya ha! ");

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”.

// let fuel = prompt( " enter the fuel");
// let currentfuel = 0.25+"litres";
// if ( fuel < currentfuel)
// alert("Please refill the fuel in your car").

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//  if("car" <br "cat"){
// alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// let totalMarks = 300;
// let sub1=80
// let sub2=80
// let sub3=70
// let obtainedMarks = (sub1 + sub2 + sub3  );
// document.write("obtained Marks = " , obtainedMarks ,"</br>")
// let percentage = ((obtainedMarks/totalMarks)*100);
// document.write(`the percentage is = ${percentage} , </br>`)

// if ( percentage >= 80)
// alert( " A Grade")
// else if ( percentage >=70)
// document.write(" B Grade " + " You need to improve")
// else
// alert( "fail")

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// let num = prompt( "enter a number")
// if(num % 3==0)
// console.log(num ,"is divisible by 3")
// else
// console.log("none")

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// let num = prompt(" enter a number");
// if(num % 2 === 0)
// {
// document.write(" even")
// }
// else
// document.write(" odd") ;

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temperature = prompt("enter todays temperature")
// if ( temperature > 40)
// swal ( "It is too hot outside.");
// else if( temperature > 30 )
// swal ("The Weather today is Normal");
// else if( temperature > 20 )
// swal ("Today’s Weather is cool");
// else if( temperature > 10 )
// swal ("OMG! Today’s weather is so Cool");

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let num1 = +prompt("enter 1st number")
// let num2 = +prompt("enter 2nd number")
// let operation = prompt("Enter any operator (+,-,*,/,%) ")
// let result;
// if (operation === "+")
// result = num1 + num2;
// else if (operation === "-")
// result = num1 - num2;
// else if (operation === "*")
// result = num1 * num2;
// else if (operation === "/")
// result = num1 / num2;
// else if (operation=== "%")
// result = num1 % num2;
// swal ("Result", `the result of ${num1} ${operation} ${num2} is ${result}`);
// return 0;
