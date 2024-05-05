// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let emptyArray = [[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// let multidimensionalArray = [
//     [0, 1, 2, 3], 
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//     ];

// 3. Write a program to print numeric counting from 1 to 10.
// for ( let i =1; i <= 10; i++){
// console.log(`counting = ${i}`)
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


// let tableNumber = +prompt(" Enter a number to show its multiplication ")
// let tableLength = +prompt(" Enter length of multiplication table ")

// for (let i= 1 ; i <= tableLength ; i++)
//     {
//         console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
//         document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br/>`);
//     }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for ( let i = 0 ; i<= fruits.length-1 ; i++)
//     {
//         console.log( ` element at index ${i} ${fruits[i]}`)
//         document.write( ` element at index ${i} is ${fruits[i]} <br/>`)   
//     }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write(`<h2> Counting:</h2>`)
// for ( let i =1 ; i<= 15; i++)

//     {

//         document.write( `  ${i}, ` )
//     }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write(`<h2> Reverse Counting:</h2>`)
// for ( let i = 10 ; i>=1 ; i--)
//         {
//             console.log( `  ${i}, ` )
//             document.write( `  ${i}, ` )
//         }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write(`<h2>Even</h2>`)
// for ( let i =1 ; i <=20 ; i++)
//     {
//         if ( i % 2 === 0)
//             document.write(` ${i}, `)
//     }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write(`<h2>odd</h2>`)
// for ( let i =1 ; i <=20 ; i++)
//     {
//         if ( i % 2 === 1)
//             document.write(` ${i}, `)
//     }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k.
// document.write(`<h2>series</h2>`)
// for ( let i =2 ; i <=10 ; i++)
//     {

//             document.write(` ${2*i}k, `)
//     }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let A = [ 'cake', 'apple pie', 'cookie', 'chips', 'patties']
// let userInput = prompt("welcome to my bakery.What do u want?")
// for ( let i =0 ; i<=A; i++)
// if ( userInput == A)
//     console.log( `userinput is found at index ${[i]}`)

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user for input
// let userInput = prompt("Enter an item to search in the list:");

// // Check if the item is found in the array
// if (A.includes(userInput)) {
//     console.log(userInput + " is found in the list.");
// } else {
//     console.log(userInput + " is not found in the list.");
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// let arrItems = [ 24, 53, 91, 12, 78];
// let largestNum =0;

// for (let i = 0; i < arrItems.length; i++) {
//     if (arrItems[i] > largestNum) {
//         largestNum = arrItems[i];
//     }

// }
// document.write("Array Items: ", arrItems ,'<br/>')
// document.write(`The largest Number is ${largestNum}`);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// let arrItems = [24, 53, 78, 91, 12];
// let smallestNum = arrItems[0];
// for (let i = 1; i < arrItems.length; i++) {
//     if (arrItems[i] < smallestNum) {
//         smallestNum = arrItems[i];
//     }
// }
//  document.write("Array Items: ", arrItems ,'<br/>')
// document.write(`The smallest Number is ${smallestNum}`);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (  let i =1; i<=100 ; i++)
//     // document.write( 5 * i, ' ')
// {
//     if ( i % 5=== 0)
//         {
//             document.write( i, ' ')
//         }

// }
