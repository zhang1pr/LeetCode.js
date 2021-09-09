/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const R = M.length;
  const C = M[0].length;
  const res = [...Array(R)].map(() => Array(C).fill(0));

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      let cnt = 0;

      for (let nr = r - 1; nr <= r + 1; nr++) {
        for (let nc = c - 1; nc <= c + 1; nc++) {
          if (0 <= nr && nr < R && 0 <= nc && nc < C) {
            res[r][c] += M[nr][nc];
            cnt++;
          }
        }
      }

      res[r][c] = Math.floor(res[r][c] / cnt);
    }
  }

  return res;
};

// time:  O(mn)
// space: O(1)

// [[1]]
// [[1, 0]]
// [[1], [0]]
// [[1, 1, 1]]
// [[1], [1], [1]]
// [[1, 1], [1, 1]]
// [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
