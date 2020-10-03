/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const map = new Map();

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      const sum = C[i] + D[j];
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  let res = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      res += (map.get(-A[i] - B[j]) || 0);
    }
  }

  return res;
}

// time:  O(n^2)
// space: O(n^2)

// [0], [0], [0], [0]
// [1], [1], [1], [1]
// [1, 1], [1, 1], [-1, 1], [-1, 1]
// [1, 2], [-2, -1], [-1, 2], [0, 2]
