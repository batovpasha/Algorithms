'use strict';

/*
    worst-case performance
  = average-case performance
  = best-case performance : O(n^2) comparisons, O(n) swaps

    worst-case space complexity: O(1)
*/
const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {        // or descending order:
    let indexOfMinElement = i;                    // indexOfMaxElement
                                                  //
    for (let j = i + 1; j < array.length; j++) {  // and
      if (array[j] < array[indexOfMinElement])    // array[j] > array[indexOfMaxElement]
        indexOfMinElement = j;
    }

    let temp = array[indexOfMinElement];
    array[indexOfMinElement] = array[i];
    array[i] = temp;
  }
  return array;
};

module.exports = selectionSort;

