/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
  const M = grid.length;
  const N = grid[0].length;
  let res = (1 << (N - 1)) * M;

  for (let j = 1; j < N; j++) {
    let cur = 0;

    for (let i = 0; i < M; i++) {
      cur += grid[i][j] == grid[i][0] ? 1 : 0;
    }

    res += Math.max(cur, M - cur) * (1 << (N - j - 1));
  }

  return res;
};

// time:  O(mn)
// space: O(1)

// [[0]]
// [[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]]
