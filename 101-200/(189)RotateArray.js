/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;

  let count = 0;
  let current;
  let prev;
  let next;
  let temp;
  for (let start = 0; count < nums.length; start++) {
    current = start;
    prev = nums[start];

    do {
      next = (current + k) % nums.length;
      temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
      count++;
    } while (start != current);
  }
};

// time:  O(n)
// space: O(1)

// [0], 1
// [0], 2
// [1, 2, 3], 1
// [1, 2, 3], 3
// [-1, -100, 3, 99], 2
// [1, 2, 3, 4, 5, 6, 7], 3
