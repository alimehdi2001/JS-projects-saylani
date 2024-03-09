// --------------------Assignment#3    chapter #5____________________

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// let num1 = +prompt("Enter 1st Number");
// let num2 = +prompt("Enter 2nd Number")
// let sum = num1+num2;
// document.write( "sum of " , num1 ," and " , num2 ," is " , sum);
// document.write("<br>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// let num1 = +prompt("Enter 1st Number");
// let num2 = +prompt("Enter 2nd Number")
// let sub = num1-num2;
// document.write( "subtraction of " , num1 , " and " , num2 ," is " , sub);
// document.write("<br>");

// let multiplication = num1*num2;
// document.write("Multipication of " , num1 , " and " , num2 , " is " , multiplication);
// document.write("<br>");

// let division = num1/num2;
// document.write("Division of ", num1 , " and " , num2 , " is " , division);
// document.write("<br>");

// let modulus = num1%num2;
// document.write("Modulus of " , num1 , " and " , num2 , " is " , modulus);
// document.write("<br>");
// document.write("<br>");

// 5. Write a script to display multiplication table of any
// number in your browser.
// let table = +prompt("Enter any Number")
// document.write("table of 2 <br> ");
// document.write( table ," x 1 = " , table*1 , "<br>");
// document.write(table ," x 2 = " , table*2 , "<br>");
// document.write(table ," x 3 = " , table*3 , "<br>");
// document.write(table ," x 4 = " , table*4 , "<br>");
// document.write(table ," x 5 = " , table*5, "<br>");
// document.write(table ," x 6 = " , table*6 , "<br>");
// document.write(table ," x 7 = " , table*7 , "<br>");
// document.write(table ," x 8 = " , table*8 , "<br>");
// document.write(table ," x 9 = " , table*9 , "<br>");
// document.write(table ," x 10 = " , table*10 , "<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// let myname;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.write("value after variable declaration is: " , myname);

// c. Initialize the variable with some number.
// let num = 5;
// d. Show the value of variable in your browser like “Initial  value: 5”.
//  document.write(" Intitial value:" , num , "<br>");
// e. Increment the variable.
// ++num;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// document.write("value after increment is: ", num , "<br>")
// g. Add 7 to the variable.
// let addition = num +7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.write(" value after addition is: ",  addition )

// i. Decrement the variable.
// --addition;
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write(" value after decrement is: ", addition , "<br>");
// k. Show the remainder after dividing the variable’s value by 3.
// let remainder = addition%3 ;
// l. Output : “The remainder is : 0”.
// document .write( "The remainder is :" , remainder)

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 
// let oneticket = 600;
// let calculate = oneticket*5;
// document.write( ' The cost to buy 5 movie tickets is ' , calculate + "PKR")

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// let celcius = 50;
// let Fahrenheit = ( celcius*9/5)+32;
// document.write( celcius ,"C is " , Fahrenheit, " F ");
// document.write("<br>" )
// let faren = 70;
// let cel = (faren - 32 )* 5/9  ;
// document.write(faren ,"F is ", cel  )

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

// let year = 2024;
// let bdyear= 2004;
// let age = year-bdyear;
// document.write(" your age is " ,age);

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// MATH EXPRESSIONS | JAVASCRIPT

// Page 5 of 9

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.
// let item1 = 650;
// let item2 = 100;
// let q1 = 3;
// let q2 = 7;
// let shippingcharges = 100;
// let totalcost = item1*q1 + item2*q2 + shippingcharges ;
// document.write( " the total is = " + totalcost);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser.
// let totalmarks = 850;
// let obtainmarks = 690;
// let per = (obtainmarks/totalmarks)*100;
// document.write(" The percentage is =" + Math.round(per) )

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee).

// let pakistanirupees = 10 * 104.80 + 25* 28;
// document.write(" Total currency is = " + pakistanirupees);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.

// let num = 20+5*10/2;
// document.write(" The result is = " + num);


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142).

// let radius = 20;
// let pie = 3.142;
// let circumference;
// circumference = 2*pie*radius;
// document.write(" The circumference of circle is = " + circumference + "<br>");
// let area;
// area = pie * radius*radius ;
// document.write(" The area of circle is = "+ area);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// let snack = "salenty"
// let current_age = 15;
// let max_age = 65;
// let estimated = 3;
// let total = (max_age - current_age) * estimated;
// document.write(" You will need "+ total + " to last until the ripe old age " + max_age).



// ------------------------chapter #4-------------------------

// 1. Declare 3 variables in one statement.
// let a;
// let num;
// let age;
// 2. Declare 5 legal & 5 illegal variable names.
// let $num;
// let _age;
// let myname;
// let my_name;
// let my Age;
// let 123_age;
// let alert;
// let #name;


// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// document.write("1.cant use reserverd keywords, cant start with numbers, cant give space ")
// b) Variable names can only contain ______, ______,
// ______ and ______.
// document.write('$. _ ')
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// document.write("case sensitive")
// e) Variable names should not be JS _________
// document.write("  keywords")