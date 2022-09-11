const countPairSumHash = (listA, listB, targetSum) => {
  let count = 0;
  const whatNumbersIAmLookingForInListB = {};

  for (numA of listA) { // linear (n)
    const numINeedInListB = targetSum - numA;
    whatNumbersIAmLookingForInListB[numINeedInListB] = whatNumbersIAmLookingForInListB[numINeedInListB] ?
                                                       whatNumbersIAmLookingForInListB[numINeedInListB] + 1 :
                                                       1;
  }

  for (numB of listB) { // linear (n)
    if (whatNumbersIAmLookingForInListB[numB] !== undefined) {
      count += whatNumbersIAmLookingForInListB[numB];
    }
  }

  // overall runtime: n + n = O(n)

  return count;
}

// const listA = [3, 9, 7, 11, 2, 0, 17];
// const listB = [0, 12, -2, 10, 4, 8, 6];
// const targetSum = 9;
// console.log(countPairSumHash(listA, listB, targetSum));

module.exports = countPairSumHash;