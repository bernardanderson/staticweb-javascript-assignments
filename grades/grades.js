var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// This will allow a user to enter in scores separated by a comma,
// spilt the string up, map the data to the array 'scores' and convert
// the string "numbers" into real numbers.

// var scores = prompt('Enter some scores separated by a comma!').split(',').map(Number);

// This builds the 'gradeData' object and zeros its properties
var gradeData = {
  rangeA: 0,
  rangeB: 0,
  rangeC: 0,
  rangeD: 0,
  rangeF: 0,
  lowest: 0,
  highest: 0
}

// (source MDN) Arrays can be expanded using the spread operator '...'
// where multiple arguements or array literals are expected.  
// .min and .max both expect (x, y, z) and don't understand an array
// variable.  The ... expands it as if the elements were entered instead
// of the array variable.
gradeData.lowest = Math.min(...scores);
gradeData.highest = Math.max(...scores);


//This loops through the scores and keeps track of the number in
//each category, storing it in the correct gradeData property.
for (var i = 0; i < scores.length; i++) {

  if (scores[i] < 61) {
    gradeData.rangeF++;
  } else if (scores[i] < 71)  {
    gradeData.rangeD++;
  } else if (scores[i] < 81)  {
    gradeData.rangeC++;
  } else if (scores[i] < 91)  {
    gradeData.rangeB++;
  } else {
    gradeData.rangeA++;
  } 

}

// Prints out all the relevant information
// console.log(scores);
console.log("The Number of A's: " + gradeData.rangeA);
console.log("The Number of B's: " + gradeData.rangeB);
console.log("The Number of C's: " + gradeData.rangeC);
console.log("The Number of D's: " + gradeData.rangeD);
console.log("The Number of F's: " + gradeData.rangeF);
console.log("The lowest grade : " + gradeData.lowest);
console.log("The highest grade: " + gradeData.highest);

