/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const row = dungeon.length;
  const col = dungeon[0].length;
  const dp = new Array(row + 1).fill(0).map(() => new Array(col + 1));

  if (dungeon[row - 1][col - 1] > 0) {
    dp[row - 1][col - 1] = 1;
  } else {
    dp[row - 1][col - 1] = -dungeon[row - 1][col - 1] + 1;
  }

  let i;
  for (i = 0; i <= col; i++) {
    dp[row][i] = Infinity;
  }

  for (i = 0; i <= row; i++) {
    dp[i][col] = Infinity;
  }

  for (i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      if (i == row - 1 && j == col - 1) {
        continue;
      }
      
      dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
      
      if (dp[i][j] <= 0) {
        dp[i][j] = 1;
      }
    }
  }
  return dp[0][0];  
};

// time:  O(log(n))
// space: O(1)

// test cases:
// [[-5]]
// [[0]]
// [[5]]
// [[-2, -3, 3]]
// [[-2], [-5], [10]]
// [[-2, -3], [-5, -10]]
// [[-2, -3, 3], [-5, -10, 1], [10, 30, -5]] 
