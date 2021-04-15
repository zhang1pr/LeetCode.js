/**
 * @param {number} N
 * @return {number}
 */
 var monotoneIncreasingDigits = function(N) {
  const res = [...N.toString()];
  const len = res.length;
  let idx = len;

  for (let i = len - 2; i >= 0; i--) {
    if (res[i] > res[i + 1]) {
      idx = i + 1;

      res[i] = String.fromCharCode(res[i].charCodeAt(0) - 1);
    }
  }

  for (let i = idx; i < len; i++) {
    res[i] = '9';
  }

  return Number(res.join(''));
};

// time:  O(log(n))
// space: O(log(n))

// 10
// 332
// 1234
