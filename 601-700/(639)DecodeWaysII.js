/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const MOD = 1e9 + 7;
  let first = 1;
  let second = s[0] == '*' ? 9 : s[0] == '0' ? 0 : 1;

  for (let i = 1; i < s.length; i++) {
    let temp = second;

    if (s[i] == '*') {
      second = 9 * second % MOD;

      if (s[i - 1] == '1') {
        second = (second + 9 * first) % MOD;
      } else if (s[i - 1] == '2') {
        second = (second + 6 * first) % MOD;
      } else if (s[i - 1] == '*') {
        second = (second + 15 * first) % MOD;
      }
    } else {
      second = s[i] != '0' ? second : 0;
      if (s[i - 1] == '1') {
        second = (second + first) % MOD;
      } else if (s[i - 1] == '2' && s[i] <= '6') {
        second = (second + first) % MOD;
      } else if (s[i - 1] == '*') {
        second = (second + (s[i] <= '6' ? 2 : 1) * first) % MOD;
      }
    }

    first = temp;
  }

  return second;
};

// time:  O(n)
// space: O(1)

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
// '7*9*3*6*3*0*5*4*9*7*3*7*1*8*3*2*0*0*6*'
