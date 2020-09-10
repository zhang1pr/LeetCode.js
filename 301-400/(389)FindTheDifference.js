/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const n = t.length;
  let res = t[n - 1].charCodeAt(0);

  for (let i = 0; i < n - 1; i++) {
    res ^= s[i].charCodeAt(0);
    res ^= t[i].charCodeAt(0);
  }

  return String.fromCharCode(res);
};

// time:  O(n)
// space: O(1)

// '', 'a'
// 'abcd', 'abcde'
