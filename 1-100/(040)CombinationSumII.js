/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
    
  let last;
  const dp = [[[]]];
  
  for (let i =0; i < candidates.length; i++) {
    const num = candidates[i];
    let next = [];
    let result;
    
    if (candidates[i - 1] != num) {  
      for (let j = target; j >= num; j--) {
        if (dp[j - num]) {  
          result = dp[j - num].map(array => array.concat(num));
          next.push([j, result]);  
          dp[j] = [...dp[j] || [], ...result];
        } 
      }
    } else {
      for (const [sum, list] of last) {
        const newSum = sum + num;

        if (newSum <= target) {
          result = list.map(array => array.concat(num));
          next.push([newSum, result]);
          dp[newSum] = [...dp[newSum] || [], ...result];
        }
      }
    }
      
    last = next;  
  }  

  return dp[target] || [];
};

// time:  O(n*k^2)
// space: O(k^3)

// test cases:
// [1], 1
// [1], 3
// [2, 5, 2, 1], 5
// [2, 2, 2, 4, 4, 4], 8
// [10, 1, 2, 7, 6, 1, 5], 8
// [4, 4, 2, 1, 4, 2, 2, 1, 3], 6
