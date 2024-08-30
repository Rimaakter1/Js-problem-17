// Task - 2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and bangla of a student.

//     Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

//     Output:
// Print the result in 2 decimal places.


// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var PhysicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + PhysicsMarks + banglaMarks;

var marksAverage = totalMarks / 5;
console.log(marksAverage.toFixed(2));

