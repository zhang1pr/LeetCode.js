/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const arr = Array(26).fill(0);

  let max = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    const diff = s[end].charCodeAt(0) - 65;
    arr[diff]++;

    max = Math.max(max, arr[diff]);
    if (max + k <= end - start) {
      arr[s[start].charCodeAt(0) - 65]--;
      start++;
    }
  }

  return s.length - start;
};

// time:  O(n)
// space: O(n)

// 'ABAB', 2
// 'AABABBA', 1
