/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  S = S.split('-').join('').split('');

  for (let i = S.length - K - 1; i >= 0; i -= K) {
    S[i] += '-';
  }

  return S.join('').toUpperCase();
};

// time:  O(n)
// space: O(n)

// '1', 1
// 'efg-1', 1
// '2-5g-3-J', 2
// '5F3Z-2e-9-w', 4
