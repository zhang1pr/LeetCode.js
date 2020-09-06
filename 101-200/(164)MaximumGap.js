/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  const length = nums.length;

  if (length <= 1) {
    return 0;
  }

  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < length; i++) {
    min = Math.min(nums[i], min);
    max = Math.max(nums[i], max);
  }

  if (max == min) {
    return 0;
  }

  const interval = Math.ceil((max - min) / (length - 1));

  const bucketMin = new Array(length - 1).fill(Infinity);
  const bucketMax = new Array(length - 1).fill(-1);

  let index;
  for (const num of nums) {
    index = Math.floor((num - min) / interval);

    if (num == min || num == max) {
      continue;
    }

    bucketMin[index] = Math.min(num, bucketMin[index]);
    bucketMax[index] = Math.max(num, bucketMax[index]);
  }

  let maxGap = 0;
  let previousMax = min;
  for (let i = 0; i < length - 1; i++) {
    if (bucketMax[i] == -1) {
      continue;
    }

    maxGap = Math.max(bucketMin[i] - previousMax, maxGap);
    previousMax = bucketMax[i];
  }

  maxGap = Math.max(max - previousMax, maxGap);
  return maxGap;
};

// time:  O(n)
// space: O(n)

// test cases:
// []
// [1]
// [1, 1]
// [1, 3]
// [3, 1]
// [1, 3, 6, 9]
// [3, 6, 9, 1]
// [11, 1, 8, 14]
