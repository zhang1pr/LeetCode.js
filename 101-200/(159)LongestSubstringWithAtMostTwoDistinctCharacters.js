/**
* @param {string} s
* @return {number}
*/
var lengthOfLongestSubstringTwoDistinct = function(s) {
  const map = new Map();
  const length = s.length;
  let start = 0;
  let maxLength = 0;
  let left;

  for (let i = 0; i < length; i++) {
    if (map.size === 2 && !map.has(s[i])) {
      if (i - start > maxLength) {
        maxLength = i - start;
      }

      left = length;
      for (const index of map.values()) {
        left = Math.min(left, index);
      }

      start = left + 1;
      map.delete(s[left]);
    }

    map.set(s[i], i);
  }

  if (length - start > maxLength) {
    maxLength = length - start;
  }

  return maxLength;
};

// time:  O(n)
// space: O(1)

// ''
// 'a'
// 'aa'
// 'ab'
// 'abc'
// 'eceba'
