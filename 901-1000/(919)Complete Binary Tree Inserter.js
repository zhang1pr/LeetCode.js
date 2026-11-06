/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
  this.tree = [root];
  for (let i = 0; i < this.tree.length; i++) {
    if (this.tree[i].left != null) {
      this.tree.push(this.tree[i].left);
    }
    
    if (this.tree[i].right != null) {
      this.tree.push(this.tree[i].right);
    }
  }  
};

// time:  O(n)
// space: O(n)

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function(val) {
  const N = this.tree.length;
  const node = new TreeNode(val);
  this.tree.push(node);
  
  const parentIndex = Math.floor((N - 1) / 2);
  const parent = this.tree[parentIndex];
  
  if (N % 2 === 1) {
    parent.left = node;
  } else {
    parent.right = node;
  }
  
  return parent.val;  
};

// time:  O(1)
// space: O(1)

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.tree[0]; 
};

// time:  O(1)
// space: O(1)

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */

// ['CBTInserter', 'insert', 'insert', 'get_root'], [[[1, 2]], [3], [4], []]