/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let res = '';
  let flag = true;
  for (let i = 0; i < s.length; i += k) {
    const end = Math.min(i + k - 1, s.length - 1);

    if (flag) {
      for (let j = end; j >= i; j--) {
        res += s[j];
      }
    } else {
      for (let j = i; j <= end; j++) {
        res += s[j];
      }
    }

    flag = !flag;
  }

  return res;
};

// time:  O(n)
// space: O(1)

// 'a', 1
// 'abc', 1
// 'abcdef', 2
// 'abcdefg', 2
// 'abcdefghi', 3
