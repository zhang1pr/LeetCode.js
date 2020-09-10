/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  const array = new Array(k).fill(0);

  let i = 0;
  while (i >= 0) {
    array[i]++;

    if (array[i] > n) {
      i--;
    } else if (i == k - 1) {
      res.push(array.slice());
    } else {
      i++;
      array[i] = array[i - 1];
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
