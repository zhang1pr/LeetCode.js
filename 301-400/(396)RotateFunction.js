/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  const len = A.length;
  let sum = 0;
  let F = 0;

  for (let i = 0; i < len; i++) {
    F += i * A[i];
    sum += A[i];
  }

  let max = F;
  for (let i = len - 1; i > 0; i--) {
    F += sum - len * A[i];
    max = Math.max(F, max);
  }

  return max;
};

// time:  O(n)
// space: O(1)

// [1]
// [1, 1]
// [1, 2]
// [1, 2, 3]
// [1, 3, 2]
// [4, 3, 2, 6]
