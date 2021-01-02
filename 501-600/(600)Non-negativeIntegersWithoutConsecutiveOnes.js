/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function(num) {
  const bits = [];
  while (num > 0) {
    bits.push(num & 1);
    num >>= 1;
  }

  const n = bits.length;

  const one = Array(n).fill(0);
  const zero = Array(n).fill(0);
  one[0] = 1;
  zero[0] = 1;

  for (let i = 1; i < n; i++) {
    one[i] = zero[i - 1];
    zero[i] = zero[i - 1] + one[i - 1];
  }

  let res = zero[n - 1] + one[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (bits[i] == 0 && bits[i + 1] == 0) {
      res -= one[i];
    } else if (bits[i] == 1 && bits[i + 1] == 1) {
      break;
    }
  }

  return res;
}

// time:  O(log(n))
// space: O(log(n))

// 1
// 2
// 3
// 5
// 8
