/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function(A) {
  let max = 0;

  for (let i = 0; i < A.length - 2; i++) {
    max = Math.max(max, A[i]);
    if (max > A[i + 2]) {
      return false;
    }
  }

  return true;
};

// time:  O(n)
// space: O(1)

// [0]
// [0, 1]
// [1, 0]
// [1, 0, 2]
// [1, 2, 0]
