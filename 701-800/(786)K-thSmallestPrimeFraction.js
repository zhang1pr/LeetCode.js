/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
  let l = 0;
  let r = 1;
  let m;
  let p = 0;
  let q = 1;
  let cnt;
  let n = arr.length;

  while (true) {
    cnt = 0;
    p = 0;
    m = (l + r) / 2;

    for (let i = 0, j = n - 1; i < n; i++) {
      while (j >= 0 && arr[i] > m * arr[n - 1 - j]) {
        j--;
      }

      cnt = cnt + j + 1;

      if (j >= 0 && p * arr[n - 1 - j] < q * arr[i]) {
        p = arr[i];
        q = arr[n - 1 - j];
      }
    }

    if (cnt < k) {
      l = m;
    } else if (cnt > k) {
      r = m;
    } else {
      return [p, q];
    }
  }
};

// time:  O(nlog(max))
// space: O(1)

// [1, 7], 1
// [1, 2, 3, 5], 3
