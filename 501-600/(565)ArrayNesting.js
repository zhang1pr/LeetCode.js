/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    let size = 0;

    for (let j = i; nums[j] >= 0; size++) {
      const temp = nums[j];
      nums[j] = -1;
      j = temp;
    }

    res = Math.max(res, size);
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [0]
// [0, 1]
// [1, 0]
// [1, 2, 0]
// [5, 4, 0, 3, 1, 6, 2]
