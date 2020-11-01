/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const map = new Map();
  const stack = [];

  for (const num of nums2) {
    while (stack.length != 0 && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }

    stack.push(num);
  }

  for (let i = 0; i < nums1.length; i++) {
    const get = map.get(nums1[i]);
    nums1[i] = get != null ? get : -1;
  }

  return nums1;
};

// time:  O(n)
// space: O(n)

// [1], [1]
// [1], [2, 1]
// [2, 1], [2, 1]
// [1, 2], [1, 2]
// [2, 4], [1, 2, 3, 4]
// [4, 1, 2], [1, 3, 4, 2]
