/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let res = 0;
  const map = new Map();

  for (let i = 0; i < A.length; i++) {
    map.set(i, new Map());

    for (let j = 0; j < i; j++) {
      const diff = A[i] - A[j];

      const c1 = map.get(i).get(diff) || 0;
      const c2 = map.get(j).get(diff) || 0;
      res += c2;
      map.get(i).set(diff, c1 + c2 + 1);
    }
  }

  return res;
};

// time:  O(n^2)
// space: O(n^2)

// [7, 7, 7, 7]
// [3, -1, -5, -9]
// [1, 3, 5, 7, 9]
// [1, 1, 2, 5, 7]
// [2, 4, 6, 8, 10]
