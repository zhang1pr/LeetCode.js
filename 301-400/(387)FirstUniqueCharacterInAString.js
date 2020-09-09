/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!map.has(char)) {
      map.set(char, -i);
    } else {
      map.set(char, 1);
    }
  }

  for (const val of map.values()) {
    if (val <= 0) {
      return -val;
    }
  }

  return -1;
};

// time:  O(n)
// space: O(1)

// 'a'
// 'aa'
// 'aba'
// 'aab'
// 'leetcode'
// 'loveleetcode'
