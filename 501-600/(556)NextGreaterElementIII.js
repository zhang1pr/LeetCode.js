/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  const MAX = 2147483648;

  const s = n.toString();
  let j = s.length - 1;
  let i = j - 1;

  while (s[i + 1] <= s[i]) {
    i--;
  }

  if (i == -1) {
    return -1;
  }

  while (s[j] <= s[i]) {
    j--;
  }

  let right = s.slice(i + 1, j) + s[i] + s.slice(j + 1);
  const res = Number(s.slice(0, i) + s[j] + right.split('').reverse().join(''));
  return res < MAX ? res : -1;
};

// time:  O(log(n))
// space: O(log(n))

// 1
// 2
// 11
// 12
// 21
// 101
// 110
// 123
// 321
// 333
