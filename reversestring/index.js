// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

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

function reverse(str) {
  return (finalArray = str.split("").reverse().join(""));
}

module.exports = reverse;
