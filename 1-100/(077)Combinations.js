/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const output = [];

  function backtrack(start, array) {
    if (array.length == k) {
      output.push(array.slice());
    } else {
      for (let i = start; i <= n; i++) {
        array.push(i);
        backtrack(i + 1, array);
        array.pop();
      }
    }
  }

  backtrack(1, []);
  return output;
};

// time:  O(k*C(n,k))
// space: O(k)

// 1, 1
// 1, 2
// 2, 2
// 3, 2
// 4, 2
// 5, 1
// 5, 3
