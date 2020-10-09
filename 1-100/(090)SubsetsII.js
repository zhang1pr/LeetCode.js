/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);

  const bit = 1 << nums.length;
  const res = [];

  for (let i = 0; i < bit; i++) {
    const arr = [];
    let flag = false;

    let cur = i;
    let last;
    for (let j = 0; j < nums.length; j++) {
      if (cur == 0) {
        break;
      }

      if (j > 0 && nums[j - 1] == nums[j] && last == 0 && cur % 2 == 1) {
        flag = true;
        break;
      }

      if (cur % 2 == 0) {
        last = 0;
      } else {
        last = 1;
        arr.push(nums[j]);
      }

      cur >>= 1;
    }

    if (!flag) {
      res.push(arr);
    }
  }

  return res;
};

// time:  O(2^n)
// space: O(n)

// []
// [0]
// [0, 0]
// [0, 1, 2]
// [1, 1, 2]
// [1, 1, 2, 2]
// [4, 4, 4, 1, 4]
