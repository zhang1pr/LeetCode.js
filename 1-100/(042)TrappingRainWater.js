/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  let lmax = 0;
  let rmax = 0;

  while (l <= r) {
    lmax = Math.max(lmax, height[l]);
    rmax = Math.max(rmax, height[r]);

    if (lmax < rmax) {
      max += lmax - height[l];
      l++;
    } else {
      max += rmax - height[r];
      r--;
    }
  }

  return max;
};

// time:  O(n)
// space: O(1)

// test cases:
// [1]
// [0, 1]
// [1, 0]
// [0, 1, 1]
// [1, 0, 1]
// [1, 1, 0]
// [1, 1, 1]
// [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
