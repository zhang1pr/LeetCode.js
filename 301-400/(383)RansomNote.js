/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();

  for (const char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    if (!map.get(char)) {
      return false;
    }

    map.set(char, map.get(char) - 1);
  }

  return true;
};

// time:  O(m+n)
// space: O(m)

// '', ''
// '', ''
// 'a', ''
// 'a', 'a'
// 'a', 'ab'
// 'abc', 'bca'
// 'abca', 'cba'
