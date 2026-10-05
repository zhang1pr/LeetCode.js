class BinaryIndexedTree {
  constructor(size) {
    this.size = size;
    this.array = Array(this.size + 1).fill(0);
  }

  add(position, value) {
    for (let i = position; i <= this.size; i += (i & -i)) {
      this.array[i] += value;
    }

    return this;
  }

  query(position) {
    let sum = 0;

    for (let i = position; i > 0; i -= (i & -i)) {
      sum += this.array[i];
    }

    return sum;
  }

  queryRange(leftIndex, rightIndex) {
    if (leftIndex == 1) {
      return this.query(rightIndex);
    }

    return this.query(rightIndex) - this.query(leftIndex - 1);
  }
}

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.tree = new BinaryIndexedTree(nums.length);

  for (let i = 0; i < nums.length; i++) {
    this.tree.add(i + 1, nums[i]);
  }
};

// time:  O(nlog(n))
// space: O(n)

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  this.tree.add(i + 1,  val - this.nums[i]);
  this.nums[i] = val;
};

// time:  O(log(n))
// space: O(1)

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.tree.queryRange(i + 1, j + 1);
};

// time:  O(log(n))
// space: O(1)

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

// ['NumArray', 'sumRange', 'update', 'sumRange'], [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
