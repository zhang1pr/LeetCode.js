/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
  const dir = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];
  const dp = [...Array(N)].map(() => [...Array(N)].map(() => Array(K + 1).fill(0)));

  function DFS(N, K, r, c) {
    if (r < 0 || r > N - 1 || c < 0 || c > N - 1) {
      return 0;
    }

    if (K == 0) {
      return 1;
    }

    if (dp[r][c][K] != 0) {
      return dp[r][c][K];
    }

    let res = 0;

    for (const [dr, dc] of dir) {
      res += 0.125 * DFS(N, K - 1, r + dr, c + dc);
    }

    dp[r][c][K] = res;
    return res;
  }

  return DFS(N, K, r, c);
};

// time:  O(n^2*k)
// space: O(n^2+k)

// 1, 1, 0, 0
// 2, 2, 0, 0
// 3, 2, 0, 0
// 3, 3, 0, 0
// 4, 1, 0, 0
