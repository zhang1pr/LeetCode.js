/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = new Map();

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j];
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  let res = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      res += (map.get(-nums1[i] - nums2[j]) || 0);
    }
  }

  return res;
}

// time:  O(n^2)
// space: O(n^2)

// [0], [0], [0], [0]
// [1], [1], [1], [1]
// [1, 1], [1, 1], [-1, 1], [-1, 1]
// [1, 2], [-2, -1], [-1, 2], [0, 2]
