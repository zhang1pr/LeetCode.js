/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const MOD = 1e9 + 7;
  const memo = Array(s.length).fill(null);

  function DFS(s, i) {
    if (i < 0) {
      return 1;
    }

    if (memo[i] != null) {
      return memo[i];
    }

    let res;
    if (s[i] == '*') {
      res = 9 * DFS(s, i - 1);
      if (i > 0 && s[i - 1] == '1') {
        res = (res + 9 * DFS(s, i - 2)) % MOD;
      } else if (i > 0 && s[i - 1] == '2') {
        res = (res + 6 * DFS(s, i - 2)) % MOD;
      } else if (i > 0 && s[i - 1] == '*') {
        res = (res + 15 * DFS(s, i - 2)) % MOD;
      }
    } else {
      res = s[i] != '0' ? DFS(s, i - 1) : 0;
      if (i > 0 && s[i - 1] == '1') {
        res = (res + DFS(s, i - 2)) % MOD;
      } else if (i > 0 && s[i - 1] == '2' && s[i] <= '6') {
        res = (res + DFS(s, i - 2)) % MOD;
      } else if (i > 0 && s[i - 1] == '*') {
        res = (res + (s[i] <= '6' ? 2 : 1) * DFS(s, i - 2)) % MOD;
      }
    }

    memo[i] = res;
    return res;
  }

  return DFS(s, s.length - 1);
};

// time:  O(n)
// space: O(n)

// '*'
// '0'
// '1'
// '9'
// '1'
// '1*'
// '10'
// '11'
// '2*'
// '21'
// '226'
// '227'
// '1101'
// '1111'
// '192919'


