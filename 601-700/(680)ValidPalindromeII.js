/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  for (let i = 0; Math.floor(i < s.length / 2); i++) {
    if (s[i] != s[s.length - 1 - i]) {
      let j = s.length - 1 - i;

      return isPalindromeRange(s, i + 1, j) || isPalindromeRange(s, i, j - 1);
    }
  }

  return true;
};

var isPalindromeRange = function(s, i, j) {
  for (let k = i; k <= (i + j) >>> 1; k++) {
    if (s[k] != s[j - k + i]) {
      return false;
    }
  }

  return true;
}

// time:  O(n)
// space: O(1)

// 'a'
// 'aa'
// 'ab'
// 'aaa'
// 'aba'
// 'abaa'
// 'abba
// 'abca'
