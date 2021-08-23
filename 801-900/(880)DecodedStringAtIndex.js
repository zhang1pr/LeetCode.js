/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
  let cnt = 0;
  let i = 0;

  for (; i < s.length; i++) {
    const ch = s[i];

    if ('a' <= ch && ch <= 'z') {
      cnt++;
    } else {
      cnt *= Number(ch);
    }

    if (cnt >= k) {
      break;
    }
  }
  for (let j = i; j >= 0; --j) {
    const ch = s[j];

    if ('a' <= ch && ch <= 'z') {
      if (k == cnt) {
        return s[j];
      }

      cnt--;
    } else {
      cnt /= Number(ch);
      k %= cnt;

      if (k == 0) {
        k = cnt;
      }
    }
  }
};

// time:  O(n)
// space: O(1)

// 'ha22', 5
// 'leet2code3', 10
// 'a2345678999999999999999', 1
