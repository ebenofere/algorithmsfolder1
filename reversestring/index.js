// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ----------------------------------------------------------------------------------------------------------------------------------

// function reverse(str) {
//   // Step 1: Use the split() method to return a new array
//   var splitString = str.split("");

//   // Step 2: Use the reverse() method to reverse the newly created array
//   var reverseArray = splitString.reverse();

//   //   Step 3: Use the join() method to join all elements of the array into a string
//   var joinArray = reverseArray.join("");

//   //   Step 4: Return the reversed string
//   return joinArray;
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// function reverse(str) {
//   return (finalArray = str.split("").reverse().join(""));
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// function reverse(str) {
//   let reversed = "";

//   for (let item of str) {
//     reversed = item + reversed;
//   }

//   return reversed;
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// function reverse(str) {
//   const splitString = str.split("");

//   const reversedString = splitString.reduce((reversed, character) => {
//     const updatedString = character + reversed;
//     return updatedString;
//   });

//   return reversedString;
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// function reverse(str) {
//   return str
//     .split("")
//     .reduce((reversed, character) => character + reversed, "");
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }

// ---------------------------------LEARNING TO USE THE DEBBUGER STATEMENT--------------------------------------------------

// function reverse(str) {
//   debugger;
//   return str.split("").reduce((rev, char) => char + rev, "");
// }

// reverse("Hello");

// ---------------------------------LEARNING TO USE THE DEBBUGER STATEMENT--------------------------------------------------

function reverse(str) {
  let reversed = "";

  for (let item of str) {
    reversed = item + reversed;
    debugger;
  }

  return reversed;
}

module.exports = reverse;
