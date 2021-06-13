/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
  if (n > 5000) {
    return 1;
  }

  const memo = [...Array(n + 1)].map(() => Array(n + 1).fill(0));

  function DFS(a, b) {
    if (a <= 0 && b <= 0) {
      return 0.5;
    }

    if (a <= 0) {
      return 1;
    }

    if (b <= 0) {
      return 0;
    }

    if (memo[a][b] != 0) {
      return memo[a][b];
    }

    const serveA = [100, 75, 50, 25];
    const serveB = [0, 25, 50, 75];
    memo[a][b] = 0;

    for (let i = 0; i < 4; i++) {
      memo[a][b] += DFS(a - serveA[i], b - serveB[i]);
    }

    return memo[a][b] *= 0.25;
  }

  return DFS(n, n, memo);
};

// time:  O(1)
// space: O(1)

// 0
// 1
// 10
// 50
// 100
// 1000
