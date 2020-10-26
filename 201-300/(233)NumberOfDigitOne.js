/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  let count = 0;

  for (let k = 1; k <= n; k *= 10) {
    let r = Math.floor(n / k);
    let m = n % k;

    count += Math.floor((r + 8) / 10) * k + (r % 10 == 1 ? m + 1 : 0);
  }

  return count;
};

// time:  O(log(n))
// space: O(1)

// 0
// 1
// 9
// 10
// 11
// 13
