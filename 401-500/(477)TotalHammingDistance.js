/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  let res = 0;
  const n = nums.length;
  for (let j = 0; j < 32; j++) {
    let bit = 0;
    for (let i = 0; i < n; i++) {
      bit += nums[i] >> j & 1;
    }

    res += bit * (n - bit);
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [1, 1]
// [1, 2]
// [4, 14, 2]
