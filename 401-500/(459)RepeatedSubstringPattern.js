/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return s.repeat(2).slice(1, -1).includes(s);
};

// time:  O(nm)
// space: O(n)

// 'a'
// 'aa'
// 'ab'
// 'aba'
// 'abab'
// 'abcabcabcabc'
