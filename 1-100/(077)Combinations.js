/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  const arr = Array(k).fill(0);

  let i = 0;
  while (i >= 0) {
    arr[i]++;

    if (arr[i] > n) {
      i--;
    } else if (i == k - 1) {
      res.push(arr.slice());
    } else {
      i++;
      arr[i] = arr[i - 1];
    }
  }

  return res;
};

// time:  O(k*C(n,k))
// space: O(k)

// 1, 1
// 1, 2
// 2, 2
// 3, 2
// 4, 2
// 5, 1
// 5, 3
