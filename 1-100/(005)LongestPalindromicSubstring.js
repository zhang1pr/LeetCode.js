/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let n = s.length;
  if (n == 0) {
    return '';
  }

  let newS = '^'

  for (const char of s) {
    newS += '#' + char;
  }

  newS += '#$';

  n = newS.length;
  const arr = Array(n);

  let C = 0
  let R = 0;
  for (let i = 1; i < n - 1; i++) {
    let i_mirror = 2 * C - i;

    if (R > i) {
      arr[i] = Math.min(R - i, arr[i_mirror]);
    } else {
      arr[i] = 0;
    }

    while (newS[i + 1 + arr[i]] == newS[i - 1 - arr[i]]) {
      arr[i]++;
    }

    if (i + arr[i] > R) {
      C = i;
      R = i + arr[i];
    }
  }

  let maxLen = 0;
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] > maxLen) {
      maxLen = arr[i];
      c = i;
    }
  }

  const start = Math.floor((c - maxLen) / 2);
  return s.substring(start, start + maxLen);
};

// time:  O(n)
// space: O(n)

// ''
// 'a'
// 'ac'
// 'ababc'
// 'bbbbbb'
