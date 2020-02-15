/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const array = [...new Array(m)].map(() => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      array[i][j] = array[i-1][j] + array[i][j-1];
    }
  }

  return array[m-1][n-1];
};

// time:  O(mn)
// space: O(mn)

// test cases:
// 1, 1
// 1, 3
// 3, 1
// 7, 3
