/*
  Assume that arr is an array and x is a number.

    1. What does this function do?
        - counts how many of the value x there are in the array
  
  For the purposes of this exercise, let's define one "comparison" to be one
  single time the program checks whether n is equal to x (regardless of what
  the result is). If the program checks this three times, for instance, we'll
  say that the program performed three comparisons.

    2. Suppose that we ran this function with an array of length 10. How many
       comparisons would the program make?
        - 10 comparisons

    3. What about an array of length 100? Length 1000? Length 5238?
        - however many things in the array there are, we'll have to make the
          comparison once

    4. What is the big-O runtime of this function?
        - O(n), because the number of comparisons is directly proportional
          to the size of the array
*/

const count = (arr, x) => {
  let count = 0;
  arr.forEach(n => {
    if (n === x) { count++; }
  });

  return count;
}

module.exports = count;