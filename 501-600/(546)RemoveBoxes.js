/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
  const n = boxes.length;
  const dp = [...Array(n)].map(() => [...Array(n)].map(() => Array(n).fill(0)));

  for (let i = 0; i < n; i++) {
    for (let k = 0; k <= i; k++) {
      dp[i][i][k] = (k + 1) * (k + 1);
    }
  }

  for (let l = 1; l < n; l++) {
    for (let j = l; j < n; j++) {
      const i = j - l;

      for (let k = 0; k <= i; k++) {
        let res = (k + 1) * (k + 1) + dp[i + 1][j][0];

        for (let m = i + 1; m <= j; m++) {
          if (boxes[m] == boxes[i]) {
            res = Math.max(res, dp[i + 1][m - 1][0] + dp[m][j][k + 1]);
          }
        }

        dp[i][j][k] = res;
      }
    }
  }

  return n == 0 ? 0 : dp[0][n - 1][0];
}

// time:  O(n^4)
// space: O(n^3)

// [1]
// [1, 2]
// [2, 1]
// [2, 2]
// [3, 4, 5]
// [3, 1, 5, 8]
// [3, 3, 4, 3, 3]
// [1, 3, 2, 2, 2, 3, 4, 3, 1]
