/**
 * @param {string} s
 * @return {string}
 */
var encode = function(s) {
  const N = s.length;
  const dp = [...Array(N)].map(() => Array(N));

  for (let len = 1; len <= N; len++) {
    for (let i = 0; i <= N - len; i++) {
      let j = i + len - 1;

      dp[i][j] = s.slice(i, j + 1);

      if (len > 4) {
        for (let m = i; m < j; m++) {
          if (dp[i][j].length > dp[i][m].length + dp[m + 1][j].length) {
            dp[i][j] = dp[i][m] + dp[m + 1][j];
          }
        }

        const str = s.slice(i, j + 1);
        for (let k = 1; k <= Math.floor(len / 2); k++) {
          if (len % k == 0) {
            const first = s.slice(i, i + k);

            if (str.split(first).join('') == '') {
              const newStr = len / k + '[' + dp[i][i + k - 1] + ']';

              if (newStr.length < dp[i][j].length) {
                dp[i][j] = newStr;
              }
            }
          }
        }
      }
    }
  }

  return dp[0][N - 1];
};

// time:  O(n^4)
// space: O(n^2)

// 'aaa'
// 'aaaaa'
// 'aabcaabcd'
// 'aaaaaaaaaa'
// 'abbbabbbcabbbabbbc'
