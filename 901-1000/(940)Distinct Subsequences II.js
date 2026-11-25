/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
  const MOD = 1e9 + 7;
  const dp = Array(26).fill(0);
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) - 97;
    const add = (res - dp[c] + MOD) % MOD;

    dp[c] = 1 + res;
    res = (dp[c] + add) % MOD;
  }

  return res;  
};

// time:  O(n)
// space: O(1)

// 'aaa'
// 'aba'
// 'abc'