/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const dp = [...new Array(target + 1)].map(() => []);
    
  candidates.sort((a, b) => a - b);
    
  for (const num of candidates) {
    for (let i = num; i <= target; i++) {
      if (dp[i - num].length) {
        dp[i] = dp[i].concat(dp[i - num].map(array => array.concat(num)));
      } else if (i == num) {
        dp[i].push([i]);
      } 
    } 
  }
    
  return dp[target];  
};

// time:  O(n*k^2)
// space: O(k^3)

// test cases:
// [1], 1
// [1], 3
// [2, 4], 12
// [5, 3, 2], 8
// [2, 3, 6, 7], 7
