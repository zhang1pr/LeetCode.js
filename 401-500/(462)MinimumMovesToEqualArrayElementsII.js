/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;
  let res = 0;

  while (i < j) {
    res += nums[j] - nums[i];
    i++;
    j--;
  }

  return res;
};

// time:  O(nlog(n))
// space: O(n)

// [1]
// [1, 1]
// [1, 2]
// [1, 2, 3]
// [1, 3, 5, 7]
