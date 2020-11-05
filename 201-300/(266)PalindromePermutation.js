/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const map = {};
  let c;

  for (let i = 0; i < s.length; i++) {
    c = s[i];

    map[c] = map[c] || 0;
    map[c]++;
  }

  let oddCount = 0;

  for (const val of Object.values(map)) {
    if (val % 2 === 1) {
      oddCount++;
    }
  }

  return oddCount < 2;
};

// time:  O(n)
// space: O(n)

// ''
// 'a'
// 'aab'
// 'code'
// 'carerac'
