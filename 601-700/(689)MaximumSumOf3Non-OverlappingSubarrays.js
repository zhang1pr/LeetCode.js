/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSumOfThreeSubarrays = function(nums, k) {
  const arr = Array(nums.length - k + 1).fill(0);
  const left = arr.slice();
  const right = arr.slice();

  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];

    if (i >= k) {
      curSum -= nums[i - k];
    }

    if (i >= k - 1) {
      arr[i - k + 1] = curSum;
    }
  }

  let best = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[best]) {
      best = i;
    }

    left[i] = best;
  }

  best = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= arr[best]) {
      best = i;
    }

    right[i] = best;
  }

  const res = [-1, -1, -1];
  for (let j = k; j < arr.length - k; j++) {
    let i = left[j - k];
    let l = right[j + k];

    if (res[0] == -1 || arr[i] + arr[j] + arr[l] > arr[res[0]] + arr[res[1]] + arr[res[2]]) {
      res[0] = i;
      res[1] = j;
      res[2] = l;
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [1, 2, 1, 2, 6, 7, 5, 1], 1
// [1, 2, 1, 2, 6, 7, 5, 1], 2
