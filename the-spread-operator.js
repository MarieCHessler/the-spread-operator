/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3]; // Changes when arr 2 is changed
let arr2 = arr1; // The second array is the same as the first
arr2.push(4); // Adds a 4 to the array, which means it is also added to the first
console.log("Second array:", arr2);
console.log("First array:", arr1); // First array also gets the extra 4

// Copying an array
let arr3 = [4, 5, 6]; // Stays the same, untouched
let arr4 = [...arr3]; // Spreads values from arr3 into arr4, which creates an entirely new object
arr4.push(7); // Adds a 7 to the fourth array
console.log("Third array:", arr3); // No extra 7 in the third array
console.log("Fourth array:", arr4);

// Copying an object
let obj1 = { a: 1, b: 2, c: 3 }; // Stays the same, untouched
let obj2 = { ...obj1, d: 4 };
let obj3 = { ...obj1, b: 5 } // Change value in existing object to create new object
console.log("First object:", obj1);
console.log("Second object:", obj2);
console.log("Third object:", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, { ...obj1 }, ...arr3, "x", "y", "z"];
console.log("Fifth array:", arr5);