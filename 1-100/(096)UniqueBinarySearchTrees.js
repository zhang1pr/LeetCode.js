/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const array = new Array(n+1).fill(0);
  array[0] = 1;
  array[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      array[i] += array[j - 1] * array[i - j];
    }
  }

  return array[n];
};

// time:  O(n^2)
// space: O(n)

// test cases:
// 0
// 1
// 2
// 3
