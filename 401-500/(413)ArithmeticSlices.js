/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let count = 0;
  let sum = 0;

  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
      count++;
    } else {
      sum += (count + 1) * (count) / 2;
      count = 0;
    }
  }

  return sum += count * (count + 1) / 2;
};

// time:  O(n)
// space: O(1)

// [1, 2, 3, 4]
// [7, 7, 7, 7]
// [3, -1, -5, -9]
// [1, 1, 2, 5, 7]
// [1, 3, 5, 7, 9]
