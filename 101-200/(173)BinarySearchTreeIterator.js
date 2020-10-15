
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.cur = root;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let res = -1;
  while (this.cur != null || this.cur != null || this.stack.length != 0) {
    while (this.cur != null) {
      this.stack.push(this.cur);
      this.cur = this.cur.left;
    }

    this.cur = this.stack.pop();
    res = this.cur.val;
    this.cur = this.cur.right;
    break;
  }

  return res;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.cur != null || this.stack.length != 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// time:  O(1)
// space: O(n)

// ['BSTIterator', 'next', 'next', 'hasNext', 'next', 'hasNext', 'next', 'hasNext', 'next', 'hasNext'], [[[7, 3, 15, null, null, 9, 20]], [null], [null], [null], [null], [null], [null], [null], [null], [null]]
