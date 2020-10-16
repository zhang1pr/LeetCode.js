/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
  if (nums == null || nums.length < 4) {
    return false;
  }

  const sum = nums.reduce((a, b) => a + b);
  if (sum % 4 != 0) {
    return false;
  }

  nums.sort((a, b) => b - a);
  const sides = [0, 0, 0, 0];

  function DFS(index, target) {
    if (index == nums.length) {
      return true;
    }

    const set = new Set();

    for (let i = 0; i < 4; i++) {
      if (sides[i] + nums[index] > target || set.has(sides[i])) {
        continue;
      }

      set.add(sides[i]);

      sides[i] += nums[index];

      if (DFS(index + 1, target)) {
        return true;
      }

      sides[i] -= nums[index];
    }

    return false;
  }

  return DFS(0, sum / 4);
};

// time:  O(4^n)
// space: O(n)

// [1, 1, 1]
// [1, 1, 1, 1]
// [1, 1, 2, 2, 2]
// [3, 3, 3, 3, 4]
