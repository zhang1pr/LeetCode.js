/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
  const n = nums.length;
  const m = Math.floor(n/2);
  const totalSum = nums.reduce((a, b) => a + b);

  let flag = false;
  for (let i = 1; i <= m && !flag; i++) {
    if (totalSum * i % n == 0) {
      flag = true;
    }
  }

  if (!flag) {
    return false;
  }

  const sums = [...Array(m + 1)].map(() => new Set());
  sums[0].add(0);
  for (const num of A) {
    for (let i = m; i >= 1; i--) {
      for (const t of sums[i - 1]) {
        sums[i].add(t + num);
      }
    }
  }

  for (let i = 1; i <= m; i++) {
    if (totalSum * i % n == 0 && sums[i].has(totalSum * i / n)) {
      return true;
    }
  }

  return false;
};

// time:  O(n^4)
// space: O(n^4)

// [3, 1]
// [1, 2, 3, 4, 5, 6, 7, 8]
