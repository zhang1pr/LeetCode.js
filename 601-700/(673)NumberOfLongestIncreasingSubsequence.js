/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const len = nums.length;

  if (len <= 1) {
    return len;
  }

  const arr = Array(len).fill(0);
  const count = Array(len).fill(1);

  for (let j = 0; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        if (arr[i] >= arr[j]) {
          arr[j] = arr[i] + 1;
          count[j] = count[i];
        } else if (arr[i] + 1 == arr[j]) {
          count[j] += count[i];
        }
      }
    }
  }

  const max = Math.max(...arr);
  let res = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] == max) {
      res += count[i];
    }
  }

  return res;
};

// time:  O(n^2)
// space: O(n)

// [1]
// [1, 0]
// [1, 1]
// [1, 2]
// [1, 3, 5, 4, 7]
// [2, 2, 2, 2, 2]
