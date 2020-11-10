/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  const map = new Map();
  const arr = nums.slice().sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i + 1);
  }

  for (let j = 0; j < nums.length; j++) {
    const rank = map.get(nums[j]);

    if (rank == 1) {
      nums[j] = 'Gold Medal';
    } else if (rank === 2) {
      nums[j] = 'Silver Medal';
    } else if (rank === 3) {
      nums[j] = 'Bronze Medal';
    } else {
      nums[j] = rank.toString();
    }
  }

  return nums;
};

// time:  O(nlogn)
// space: O(n)

// [0]
// [1]
// [1, 2]
// [2, 1]
// [1, 2, 3]
// [4, 1, 2, 3]
// [5, 4, 3, 2, 1]
