/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
  this.len = nums.length;
};

// time:  O(1)
// space: O(1)

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  if (this.len == 1) {
    return 0;
  }

  let res = 0;
  let cnt = 0;
  for (let i = 0; i < this.len; i++) {
    if (this.nums[i] == target) {
      cnt++;

      if (Math.floor(Math.random() * cnt) == 0) {
        res = i;
      }
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

// ['Solution', 'pick'], [[[1, 2, 3, 3, 3]], [3]]
