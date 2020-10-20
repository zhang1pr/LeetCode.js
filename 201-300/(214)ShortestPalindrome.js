/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  const len = s.length;
  const rev = s.split('').reduce((a, b) => b + a, '');
  const str = s + '#' + rev;

  const arr = Array(len * 2 + 1).fill(0);

  let k;
  for (let i = 1; i < len * 2 + 1; i++) {
    k = arr[i - 1];
    while (k > 0 && str[k] != str[i]) {
      k = arr[k - 1];
    }

    k += str[k] == str[i] ? 1 : 0;
    arr[i] += k;
  }

  return str.substr(len + 1, len - arr[len * 2]) + s;
};

// time:  O(n)
// space: O(n)

// 'a'
// 'aa'
// 'ab'
// 'aba'
// 'abcd'
// 'aacecaaa'
