/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longestPalindrome = '';

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      longestPalindrome = getPalindrome(s, longestPalindrome, i, i + 1);
    }

    if (s[i - 1] == s[i + 1]) {
      longestPalindrome = getPalindrome(s, longestPalindrome, i, i);
    }
  }

  return longestPalindrome || s[0] || '';
};

var getPalindrome = function(s, longestPalindrome, start, end) {
  const halfLength = Math.floor(longestPalindrome.length / 2);

  if (start - halfLength >= 0 && end + halfLength < s.length && s[start - halfLength] === s[end + halfLength]) {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      start--;
      end++;
    }

    if (end - start - 1 > longestPalindrome.length) {
      longestPalindrome = s.slice(start + 1, end);
    }
  }

  return longestPalindrome;
}

// time:  O(n^2)
// space: O(1)

// test cases:
// ''
// 'a'
// 'ac'
// 'bbbbbb'
// 'ababc'
