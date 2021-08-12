/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
  const arr = count(n);

  function count(n) {
    const ans = Array(10).fill(0);
    while (n > 0) {
      ans[n % 10]++;
      n = Math.floor(n / 10);
    }

    return ans;
  }

  for (let i = 0; i < 31; i++) {
    if (arr.join(',') == count(1 << i).join(',')) {
      return true;
    }
  }

  return false;
};

// time:  O(log(n)^2)
// space: O(log(n))

// 1
// 10
// 16
// 24
// 46
