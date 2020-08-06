/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  const n = nums1.length;
  const m = nums2.length;
  let res = new Array(k).fill(0);

  for (let i = Math.max(0, k - m); i <= k && i <= n; i++) {
    const candidate = merge(maxArray(nums1, i), maxArray(nums2, k - i), k);
    
    if (greater(candidate, 0, res, 0)) {
      res = candidate;
    }
  }

  return res;
};
  
var merge = function(nums1, nums2, k) {
  const res = new Array(k).fill(0);

  for (let i = 0, j = 0, r = 0; r < k; r++) {
    if (greater(nums1, i, nums2, j)) {
      res[r] = nums1[i];
      i++;
    } else { 
      res[r] = nums2[j];
      j++;
    }
  }

  return res;
}

var greater = function(nums1, i, nums2, j) {
  while (i < nums1.length && j < nums2.length && nums1[i] == nums2[j]) {
    i++;
    j++;
  }

  return j == nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
}

var maxArray = function(nums, k) {
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length + nums.length - i > k && stack.length && stack[stack.length - 1] < nums[i]) {
      stack.pop();
    }

    if (stack.length < k) {
      stack.push(nums[i]);
    }
  }

  const result = new Array(k).fill(0);

  for (let i = k - 1; i >= 0; i--) {
    result[i] = stack.pop(); 
  }

  return result;
}

// time:  O((m+n)^3)
// space: O(k)

// [3, 9], [8, 9], 3
// [6, 7], [6, 0, 4], 5
// [3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5
