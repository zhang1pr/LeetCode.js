/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

// time:  O(1)
// space: O(1)

/**
 * Resets the  to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

// time:  O(1)
// space: O(1)

/**
 * Returns a random shuffling of the .
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const res = this.nums.slice();

  for (let i = 0; i < res.length; i++) {
    let j = Math.floor(Math.random() * n);
    [res[i], res[j]] = [res[j], res[i]];
  }

  return res;
};

// time:  O(n)
// space: O(1)

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// ['Solution', 'shuffle', 'reset', 'shuffle'], [[[1, 2, 3]], [], [], []]
