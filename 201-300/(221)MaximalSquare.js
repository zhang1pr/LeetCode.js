/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix.length) {
    return 0;
  }  
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = new Array(cols + 1).fill(0);
  let max = 0;
  let prev = 0;
  let temp;
    
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      temp = dp[j];
    
      if (matrix[i - 1][j - 1] == '1') {
        dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1;
        max = Math.max(max, dp[j]);
      } else {
        dp[j] = 0;
      }
      prev = temp;
    }
  } 
  
  return max * max;
};

// time:  O(mn)
// space: O(m)

// test cases:
// [['0']]
// [['1']]
// [['1', '1']]
// [['1', '1'], ['1', '1']]
// [['1', '1'], ['1', '0']]
// [['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]
