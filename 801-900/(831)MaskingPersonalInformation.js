/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
  const country = ['', '+*-', '+**-', '+***-'];

  const at = s.indexOf('@');
  if (at > 0) {
    s = s.toLowerCase();
    return (s[0] + '*****' + s.slice(at - 1)).toLowerCase();
  }

  s = s.replaceAll(/[^0-9]/g, '');
  return country[s.length - 10] + '***-***-' + s.slice(s.length - 4);
};

// time:  O(n)
// space: O(1)

// 'AB@qq.com'
// '1(234)567-890'
// '86-(10)12345678'
// 'LeetCode@LeetCode.com'
