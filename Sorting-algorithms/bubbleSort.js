'use strict';

/*
    worst-case performance
  = average-case performance: O(n^2) comparisons, O(n^2) swaps
    
    best-case performance:  O(n) comparisons, O(1) swaps

    worst-case space complexity: O(1)
*/

const bubbleSort = array => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) // swap the elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }
  return array;
};

module.exports = bubbleSort;

