/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const length = s.length;
  const dp = Array.from(Array(length).keys());

  let j;
  for (let i = 0; i < length; i++) {
    j = 0;

    while (true) {
      if (i - j < 0 || i + j > length - 1) {
        break;
      }

      if (s[i - j] == s[i + j]) {
        if (i == j) {
          dp[i + j] = 0;
        } else {
          dp[i + j] = Math.min(dp[i + j], dp[i - j - 1] + 1);
        }
      } else {
        break;
      }

      j++;
    }

    j = 1;
    while (true) {
      if (i - j + 1 < 0 || i + j > length - 1) {
        break;
      }

      if (s[i - j + 1] == s[i + j]) {
        if (i - j + 1 == 0) {
          dp[i + j] = 0;
        } else {
          dp[i + j] = Math.min(dp[i + j], dp[i - j + 1 - 1] + 1);
        }
      } else {
        break;
      }
      j++;
    }
  }

  return dp[length - 1];
};

// time:  O(n^2)
// space: O(n)

// ''
// 'a'
// 'aa'
// 'ab'
// 'aab'
// 'aabb'
// 'aabcbbca'
