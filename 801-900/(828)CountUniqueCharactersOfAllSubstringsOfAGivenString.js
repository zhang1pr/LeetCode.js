/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
  const MOD = 1e9 + 7;

  const index = [...Array(26)].map(() => [-1, -1]);

  let res = 0;
  const N = s.length;

  for (let i = 0; i < N; i++) {
    const c = s[i].charCodeAt(0) - 65;
    res = (res + (i - index[c][1]) * (index[c][1] - index[c][0]) % MOD) % MOD;
    index[c] = [index[c][1], i];
  }

  for (let c = 0; c < 26; c++) {
    res = (res + (N - index[c][1]) * (index[c][1] - index[c][0]) % MOD) % MOD;
  }

  return res;
};

// time:  O(n)
// space: O(n)

// 'ABC'
// 'ABA'
// 'LEETCODE'
