/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let cur = 1;
  let pre = 0;
  let res = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      cur++;
    } else {
      res += Math.min(cur, pre);
      pre = cur;
      cur = 1;
    }
  }

  return res + Math.min(cur, pre);
};

// time:  O(n)
// space: O(1)

// '0'
// '1'
// '01'
// '10'
// '010'
// '10101'
// '00110011'
