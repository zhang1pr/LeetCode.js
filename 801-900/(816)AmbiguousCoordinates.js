/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function(s) {
  const ans = [];

  function make(s, i, j) {
    const res = [];
    for (let d = 1; d <= j - i; d++) {
      const left = s.slice(i, i + d);
      const right = s.substring(i + d, j);

      if ((!left.startsWith('0') || left == '0') && !right.endsWith('0')) {
        res.push(left + (d < j - i ? '.' : '') + right);
      }
    }

    return res;
  }

  for (let i = 2; i < s.length - 1; i++) {
    for (const left of make(s, 1, i)) {
      for (const right of make(s, i, s.length - 1)) {
        ans.push('(' + left + ', ' + right + ')');
      }
    }
  }

  return ans;
};

// time:  O(n^3)
// space: O(n^3)

// '(100)'
// '(123)'
// '(0123)'
// '(00011)'
