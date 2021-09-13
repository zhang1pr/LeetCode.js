/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
 var superEggDrop = function(k, n) {
  function check(x, k, n) {
    let ans = 0;
    let r = 1;

    for (let i = 1; i <= k; ++i) {
      r = r * (x - i + 1);
      r = Math.floor(r / i);
      ans += r;

      if (ans >= n) {
        break;
      }
    }

    return ans;
  }

  let lo = 1;
  let hi = n;
  while (lo < hi) {
    const mi = lo + Math.floor((hi - lo) / 2);

    if (check(mi, k, n) < n) {
      lo = mi + 1;
    } else {
      hi = mi;
    }
  }

  return lo;
};

// time:  O(klogn)
// space: O(1)

// 1, 2
// 2, 6
// 3, 14
