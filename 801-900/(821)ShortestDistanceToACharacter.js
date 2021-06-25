/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const n = s.length;
  let pos = -n;
  const res = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (s[i] == c) {
      pos = i;
    }

    res[i] = i - pos;
  }

  for (let i = pos - 1; i >= 0; i--) {
    if (s[i] == c)  {
      pos = i;
    }

    res[i] = Math.min(res[i], pos - i);
  }

  return res;
};

// time:  O(n)
// space: O(n)

// 'aaab', 'b'
// 'loveleetcode', 'e'
