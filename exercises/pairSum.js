/* 
  Consider the following lists of numbers (both with length 7):

    List A: [3, 9, 7, 11, 2, 0, 17]
    List B: [0, 12, -2, 10, 4, 8, 6]
      => made 49 comparisons

    List A: [3, 9]
    List B: [0, 12]
      => made 4 comparisons (and there is one 9)
    
    O(n^2)


  How many ways are there to add one number in list A to one number in list B
  so that the sum is 9?

  Or, if you prefer more mathematical terms:
    - let x = any number from list A;
    - let y = any number from list B;
    - find the number of possible (x, y) pairs such that x + y = 9.
  

  We won't try to code or solve this computationally off the bat. Instead, think
  about how you -- as a human! -- would solve this question systematically. The
  answer is important, but the process of getting that answer is crucial too.
  (We *will* attempt a computational solution after a bit of discussion, as you
  might guess from the skeleton code below.)
  
  As a bonus, you can also ponder how many "comparisons" it would take for you
  to be absolutely 100% sure of your answer. This is the ultimate question
  that will end up bleeding into everything else we talk about today!
*/

// const listA = [3, 9, 7, 11, 2, 0, 17];
// const listB = [0, 12, -2, 10, 4, 8, 6];
// const targetSum = 9;

const countPairSum = (listA, listB, targetSum) => {
  let count = 0;
  for (numA of listA) { // linear (n)
    for (numB of listB) { // linear (n)
      if (numA + numB === targetSum) { count++; } // constant (1)
    }
  }

  // overall runtime: n * n = O(n^2)

  return count;
}

// console.log(countPairSum(listA, listB, targetSum));

module.exports = countPairSum;