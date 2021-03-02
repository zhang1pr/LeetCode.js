/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedstringMatch = function(a, b) {
  let i = 1;

  let s = a;
  for (; s.length < b.length; i++) {
    s += a;
  }

  if (s.includes(b)) {
    return i;
  }

  s += a;

  if (s.includes(b)) {
    return i + 1;
  }

  return -1;
};

// time:  O(n(m+n))
// space: O(m+n)

// 'a', 'a'
// 'a', 'aa'
// 'aa', 'a'
// 'abc', 'wxyz'
// 'abcd', 'cdabcdab'
