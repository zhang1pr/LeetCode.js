/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let cnt = 0;
  let sum = 0;

  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
      cnt++;
    } else {
      sum += (cnt + 1) * (cnt) / 2;
      cnt = 0;
    }
  }

  return sum += cnt * (cnt + 1) / 2;
};

// time:  O(n)
// space: O(1)

// [1, 2, 3, 4]
// [7, 7, 7, 7]
// [3, -1, -5, -9]
// [1, 1, 2, 5, 7]
// [1, 3, 5, 7, 9]
