/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let end = 0;
  let max = 0;

  const map = new Map();

  while (end < s.length) {
    if (map.has(s[end])) {
      start = Math.max(map.get(s[end]), start);
    }

    max = Math.max(max, end - start + 1);
    map.set(s[end], end + 1);
    end++;
  }

  return max;
};

// time:  O(n)
// space: O(min(m,n))

// test cases:
// 'abcabcbb'
// 'bbbbb'
// 'pwweke'
