/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  nums.sort((b,a)=>b-a);
  let mid = nums.length >>> 1;

  if (nums.length % 2 != 0) {
    mid++;
  }

  const even = nums.slice(0, mid);
  const odd = nums.slice(mid);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      nums[i] = even.pop();
    } else {
      nums[i] = odd.pop();
    }
  }
};

// time:  O(nlog(n))
// space: O(n)

// [1]
// [1, 2, 3]
// [1, 2, 3, 4]
// [1, 3, 2, 2, 3, 1]
// [1, 5, 1, 1, 6, 4]
