/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.array = [0];

  let sum = 0;
  for (const num of nums) {
    sum += num;
    this.array.push(sum);
  }
};

// time:  O(n)
// space: O(n)

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.array[j + 1] - this.array[i]; 
};

// time:  O(1)
// space: O(1)

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

// ['NumArray', 'sumRange', 'sumRange', 'sumRange'], [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
