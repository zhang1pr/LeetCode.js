/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
  const MOD = 1e9 + 7;
  const N = arr.length;
  arr.sort((a, b) => a - b);

  const dp = Array(N).fill(1);

  const index = new Map();
  for (let i = 0; i < N; i++) {
    index.set(arr[i], i);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] == 0) {
        const right = arr[i] / arr[j];

        if (index.has(right)) {
          dp[i] = (dp[i] + dp[j] * dp[index.get(right)]) % MOD;
        }
      }
    }
  }

  return dp.reduce((a, b) => a + b) % MOD;
};

// time:  O(n^2)
// space: O(n)

// [2]
// [2, 4]
// [2, 4, 5, 10]
