/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  if (!s.length) {
    return 0;
  }

  const set = new Set();

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set.delete(s[i]);
      res += 2;
    } else {
      set.add(s[i]);
    }
  }

  if (set.size > 0) {
    res++;
  }

  return res;
};

// time:  O(n)
// space: O(n)

// 'a'
// 'bb'
// 'abccccdd'
