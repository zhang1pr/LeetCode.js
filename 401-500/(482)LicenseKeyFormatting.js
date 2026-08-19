/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  s = s.split('-').join('').split('');

  for (let i = s.length - k - 1; i >= 0; i -= k) {
    s[i] += '-';
  }

  return s.join('').toUpperCase();
};

// time:  O(n)
// space: O(n)

// '1', 1
// 'efg-1', 1
// '2-5g-3-J', 2
// '5F3Z-2e-9-w', 4
