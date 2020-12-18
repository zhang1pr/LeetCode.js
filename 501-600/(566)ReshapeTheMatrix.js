/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  const m = nums.length;
  const n = nums[0].length;

  if (r * c != m * n) {
    return nums;
  }

  const res = [...Array(r)].map(() => Array(c));

  for (let i = 0; i < r * c; i++) {
    res[Math.floor(i / c)][i % c] = nums[Math.floor(i / n)][i % n];
  }

  return res;
};

// time:  O(mn)
// space: O(1)

// [[1, 2], [3, 4]], 1, 4
// [[1, 2], [3, 4]], 2, 4
