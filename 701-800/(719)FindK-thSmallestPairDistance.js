/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b);

  let l = 0;
  let r = nums[nums.length - 1] - nums[0];

  while (l < r) {
    let mid = l + r >> 1;
    let cnt = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
      while (nums[right] - nums[left] > mid) {
        left++;
      }

      cnt = cnt + right - left;
    }

    if (cnt >= k) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
};

// time:  O(nlog(max))
// space: O(n)

// [1, 1], 1
// [1, 3], 1
// [1, 3, 1], 1
