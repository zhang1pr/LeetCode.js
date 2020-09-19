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
    const next = [];
    let res;

    if (candidates[i - 1] != num) {
      for (let j = target; j >= num; j--) {
        if (dp[j - num]) {
          res = dp[j - num].map(arr => arr.concat(num));
          next.push([j, res]);
          dp[j] = [...dp[j] || [], ...res];
        }
      }
    } else {
      for (const [sum, list] of last) {
        const newSum = sum + num;

        if (newSum <= target) {
          res = list.map(arr => arr.concat(num));
          next.push([newSum, res]);
          dp[newSum] = [...dp[newSum] || [], ...res];
        }
      }
    }

    last = next;
  }

  return dp[target] || [];
};

// time:  O(n*k^2)
// space: O(k^3)

// [1], 1
// [1], 3
// [2, 5, 2, 1], 5
// [2, 2, 2, 4, 4, 4], 8
// [10, 1, 2, 7, 6, 1, 5], 8
// [4, 4, 2, 1, 4, 2, 2, 1, 3], 6
