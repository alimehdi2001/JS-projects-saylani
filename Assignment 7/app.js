// 1. Declare an empty array using JS literal notation to store
// student names in future.
// let myArray = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
// let studentnames = [];

// 3. Declare and initialize a strings array.
// let strArray =[ 'ali', 'hassan' , 'computer', 'sir']

// 4. Declare and initialize a numbers array.
// let numArray = ['1', '2', '3', '4', '5'] 

// 5. Declare and initialize a boolean array.
// let boolArray = [ "True", "false", "NaN"]

// 6. Declare and initialize a mixed array.
// let mixedArray = ["1", "Ali", "Fuuast", "CS", "True"]

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). 
// let qualifications = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write( `${qualifications} \n `)

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let studentNames = [ " Ali", " Fatima", " Zeeshan"]
// let studentScore = [ " 300", " 450", " 250"]
// let totalMarks = 500;
// let percentage1 = (studentScore[0]/500)*100;
// let percentage2 = (studentScore[1]/500)*100;
// let percentage3 = (studentScore[2]/500)*100;

// document.write( ` Score of ${studentNames[0]} is ${studentScore[0]}. Percentage : ${percentage1}% <br>`)
// document.write( ` Score of ${studentNames[1]} is ${studentScore[1]}. Percentage : ${percentage2}% <br>`)
// document.write( ` Score of ${studentNames[2]} is ${studentScore[2]}. Percentage : ${percentage3}% `)

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// let colorNames = ['red', 'blue', 'green',]
// let addfirst = prompt("Enter the colors")
// colorNames.unshift(addfirst)
// console.log(colorNames);

// let addlast = prompt("Enter a color")
// colorNames.push(addlast)
// console.log(colorNames);

// colorNames.splice(0,0, 'black','white')
// console.log(colorNames);

// console.log(colorNames.shift());
// console.log(colorNames.pop())

// let enterColor = prompt(" enter color name")
// colorNames.splice(1,0,enterColor)
// console.log(colorNames);

// let enterColor = prompt(" enter color name")
// colorNames.splice(1,2,enterColor)
// console.log(colorNames);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let scoresOfstd = [320, 230, 480, 120];
// scoresOfstd.sort();
// console.log(scoresOfstd); 

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let cityNames = ['karachi', 'lahore', 'islamabad','quetta', 'peshawer']
// let selectedCities=(cityNames[0, 1])
// console.log( selectedCities)


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// var arr = ['This ', ' is ', 'my', 'cat'];
// var arr2 = arr.join()
// console.log(arr2)


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// let devices = ['keyboard', 'mouse', 'printer', 'monitor']
// console.log(devices[0])
// console.log(devices[1])
// console.log(devices[2])
// console.log(devices[3])

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)
// let devices = ['keyboard', 'mouse', 'printer', 'monitor']
// console.log(devices[3])
// console.log(devices[2])
// console.log(devices[1])
// console.log(devices[0])

// 15.Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// let phoneManufacturers = ['apple ', 'samsung ', 'Motorola ', 'Nokia ', 'Sony ', 'Haier ']
// document.write ( `This is the menu : ${phoneManufacturers}`)