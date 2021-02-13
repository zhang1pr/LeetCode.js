/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
  const arr = Array(n).fill(0);

  let index = 0;
  for (let i = 1; i < n - k; i++) {
    arr[index] = i;
    index++;
  }

  for (let i = 0; i <= k; i++) {
    if (i % 2 == 0) {
      arr[index] = n - k + Math.floor(i / 2);
    } else {
      arr[index] = n - Math.floor(i / 2);
    }

    index++;
  }

  return arr;
};

// time:  O(n)
// space: O(1)

// 2, 1
// 3, 1
// 3, 2
// 4, 1
// 4, 3
