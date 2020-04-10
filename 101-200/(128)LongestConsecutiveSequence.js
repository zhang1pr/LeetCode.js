/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const map = new Map();
  let max = 0;
  let left;
  let right;
  let sum;

  for (const num of nums) {
    if (map.has(num)) {
      continue;
    }

    left = map.get(num - 1) || 0;
    right = map.get(num + 1) || 0;
    sum = left + 1 + right;
    max = Math.max(max, sum);

    map.set(num, -1).set(num - left, sum).set(num + right, sum);
  }

  return max;
};

// time:  O(n)
// space: O(n)

// test cases:
// []
// [0]
// [1, 2, 3]
// [3, 2, 1]
// [3, 1, 2]
// [6, 2, 5, 8, 4, 6, 9]
// [100, 4, 200, 1, 3, 2]
