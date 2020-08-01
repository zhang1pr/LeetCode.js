/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  this.nums[i] = val;
};

// time:  O(1)
// space: O(1)

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  let sum = 0;

  for (let k = i; k <= j; k++) {
    sum += this.nums[k];
  }
 
  return sum;
};

// time:  O(n)
// space: O(1)

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

// ['NumArray', 'sumRange', 'update', 'sumRange'], [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
