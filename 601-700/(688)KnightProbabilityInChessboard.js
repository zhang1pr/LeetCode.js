/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
  const dir = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];
  const dp = [...Array(n)].map(() => [...Array(n)].map(() => Array(k + 1).fill(0)));

  function DFS(n, k, row, column) {
    if (row < 0 || row > n - 1 || column < 0 || column > n - 1) {
      return 0;
    }

    if (k == 0) {
      return 1;
    }

    if (dp[row][column][k] != 0) {
      return dp[row][column][k];
    }

    let res = 0;

    for (const [dr, dc] of dir) {
      res += 0.125 * DFS(n, k - 1, row + dr, column + dc);
    }

    dp[row][column][k] = res;
    return res;
  }

  return DFS(n, k, row, column);
};

// time:  O(n^2*k)
// space: O(n^2+k)

// 1, 1, 0, 0
// 2, 2, 0, 0
// 3, 2, 0, 0
// 3, 3, 0, 0
// 4, 1, 0, 0
