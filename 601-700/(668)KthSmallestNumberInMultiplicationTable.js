/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
  function enough(x) {
    let cnt = 0;

    for (let i = 1; i <= m; i++) {
      cnt += Math.min(Math.floor(x / i), n);
    }

    return cnt >= k;
  }


  let low = 1;
  let high = m * n;
  let mid;

  while (low <= high) {
    mid = (low + high) >>> 1;

    if (enough(mid)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

// time:  O(mlog(mn))
// space: O(1)

// 1, 1, 1
// 1, 2, 1
// 2, 1, 2
// 2, 2, 1
// 2, 2, 2
// 2, 3, 6
// 3, 3, 5
// 3, 3, 9
