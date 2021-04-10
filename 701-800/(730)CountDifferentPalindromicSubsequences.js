/**
 * @param {string} S
 * @return {number}
 */
var countPalindromicSubsequences = function(S) {
  const MOD = 1e9 + 7;
  const len = S.length;
  const dp = [...Array(len)].map(() => Array(len).fill(0));

  for (let i = 0; i < len; i++) {
    dp[i][i] = 1;
  }

  for (let distance = 1; distance < len; distance++) {
    for (let i = 0; i < len - distance; i++) {
      let j = i + distance;

      if (S[i] == S[j]) {
        let low = i + 1;
        let high = j - 1;

        while (low <= high && S[low] != S[j]) {
          low++;
        }

        while (low <= high && S[high] != S[j]) {
          high--;
        }

        if (low > high) {
          dp[i][j] = dp[i + 1][j - 1] * 2 + 2;
        } else if (low == high) {
          dp[i][j] = dp[i + 1][j - 1] * 2 + 1;
        } else {
          dp[i][j] = dp[i + 1][j - 1] * 2 - dp[low + 1][high - 1];
        }
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];
      }

      dp[i][j] = dp[i][j] < 0 ? dp[i][j] + MOD : dp[i][j] % MOD;
    }
  }

  return dp[0][len - 1];
};

// time:  O(n^3)
// space: O(n^2)

// 'a'
// 'aa'
// 'ab'
// 'aaa'
// 'aba'
// 'abab'
// 'bccb'
// 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
