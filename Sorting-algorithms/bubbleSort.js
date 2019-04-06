'use strict';

const bubbleSort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > arr[j + 1]) { // swap the elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
  }
};

module.exports = bubbleSort;