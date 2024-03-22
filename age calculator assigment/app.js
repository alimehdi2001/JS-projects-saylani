// Make a Prompt and take input birth year from user
// then calculate the age.
// show on the swal(sweet alert)  popup not into the browser
// use the template literals


let birthYear = +prompt(" Enter your birth year ");
let age = 2024 - birthYear;
Swal.fire ( `The birth year is ${age}`);
// alert( ` your age is ${age}`)