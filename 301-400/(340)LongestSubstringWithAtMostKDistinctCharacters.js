/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const map = new Map();
  let left = 0;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }

    while (map.size > k) {
      const char = s[left];
      map.set(char, map.get(char) - 1);

      if (map.get(char) == 0) {
        map.delete(char);
      }

      left++;
    }

    res = Math.max(res, i - left + 1);
  }

  return res;
};

// time:  O(n)
// space: O(n)

// 'a'
// 'aa', 1
// 'eceba', 2
