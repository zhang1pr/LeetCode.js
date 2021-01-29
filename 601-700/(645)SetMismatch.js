/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let xor = nums.reduce((a, b) => a ^ b);
  let xor0 = 0;
  let xor1 = 0;

  for (let i = 1; i <= nums.length; i++) {
    xor ^= i;
  }

  let rightmost = xor & ~(xor - 1);
  for (const num of nums) {
    if (num & rightmost) {
      xor0 ^= num;
    } else {
      xor1 ^= num;
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (i & rightmost) {
      xor0 ^= i;
    } else {
      xor1 ^= i;
    }
  }

  for (const num of nums) {
    if (num == xor0) {
      return [xor0, xor1];
    }
  }

  return [xor1, xor0];
};

// time:  O(n)
// space: O(1)

// [1, 1]
// [1, 2, 2, 4]
