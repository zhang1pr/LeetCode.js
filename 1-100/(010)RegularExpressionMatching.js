/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {    
  const sLen = s.length;
  const pLen = p.length;
  const dp = new Array(pLen);

  let pre;
  let temp;
  for (let i = 0; i <= sLen; i++) {
    pre = dp[0];
    dp[0] = i == 0;
      
    for (let j = 1; j <= pLen; j++) {
      temp = dp[j];
      if (p[j - 1] == '*') {
          dp[j] = dp[j - 2] || (i != 0 && dp[j] && (s[i - 1] == p[j - 2] || p[j - 2] == '.'));
      } else {
        dp[j] = i != 0 && pre && (s[i - 1] == p[j - 1] || p[j - 1] == '.');
      }
      
      pre = temp;
    }
  }
    
  return dp[pLen];
};

// time:  O(mn)
// space: O(mn)

// test cases:
// '', ''
// 'a', ''
// '', 'a'
// '', '.*'
// '', 'a*'
// 'a', 'a'
// 'aa', 'a'
// 'ab', 'ba'
// 'aa', 'a*'
// 'ab', '.*'
// 'a', '.*..a*'
// 'aa', '.*..a*'
// 'aab', 'c*a*b'
