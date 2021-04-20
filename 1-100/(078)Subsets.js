/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  const bit = 1 << nums.length;

  for (let i = 0; i < bit; i++) {
    const arr = [];
    let cnt = 0;
    let cur = i;

    while (cur != 0) {
      if (cur % 2 == 1) {
        arr.push(nums[cnt]);
      }

      cnt++;
      cur >>= 1;
    }

    res.push(arr);
  }

  return res;
};

// time:  O(n*2^n)
// space: O(n)

// [0]
// [1]
// [-1, 1]
// [1, 2, 3]
