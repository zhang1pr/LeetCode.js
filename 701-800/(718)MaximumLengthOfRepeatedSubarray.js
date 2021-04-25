/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let res = 0;

  for (let i = 0; i < A.length + B.length - 1; i++) {
    let sA = Math.max(0, A.length - 1 - i);
    let sB = Math.max(0, i - A.length + 1);
    let cnt = 0;

    while (sA < A.length && sB < B.length) {
      if (A[sA] == B[sB]) {
        cnt++;
        res = Math.max(cnt, res);
      } else {
        cnt = 0;
      }

      sA++;
      sB++;
    }
  }

  return res;
};

// time:  O(mn(m+n))
// space: O(1)

// [1], [1]
// [1], [2]
// [1], [1, 1]
// [1], [1, 2]
// [1, 2, 3, 2, 1], [3, 2, 1, 4, 7]
