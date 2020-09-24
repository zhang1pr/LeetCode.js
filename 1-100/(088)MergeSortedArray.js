/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] < nums2[p2]) {
      nums1[p] = nums2[p2];
      p2--;
    } else {
      nums1[p] = nums1[p1];
      p1--;
    }

    p--;
  }

  for (let i = 0; i < p2 + 1; i++) {
    nums1[i] = nums2[i];
  }
};

// time:  O(n)
// space: O(1)

// [0], 0, [0], 0
// [0], 0, [1], 1
// [0, 0], 1, [1], 1
// [2, 0], 1, [1], 1
// [1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3
