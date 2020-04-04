/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * es6
 * class TreeNode {
 *   constructor(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *   }
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (postorder.length == 0) {
    return null;
  }

  const roots = [];
  let postIndex = postorder.length - 1;
  let inIndex = inorder.length - 1;

  let curRoot = new TreeNode(postorder[postIndex]);
  const root = curRoot;
  roots.push(curRoot);
  postIndex--;

  while (postIndex >=  0) {
    if (curRoot.val == inorder[inIndex]) {
      while (roots.length != 0 && roots[roots.length-1].val == inorder[inIndex]) {
        curRoot = roots[roots.length-1];
        roots.pop();
        inIndex--;
      }

      curRoot.left = new TreeNode(postorder[postIndex]);
      curRoot = curRoot.left;
      roots.push(curRoot);
      postIndex--;
    } else {
      curRoot.right = new TreeNode(postorder[postIndex]);
      curRoot = curRoot.right;
      roots.push(curRoot);
      postIndex--;
    }
  }

  return root;
};

// time:  O(n)
// space: O(n)

// test cases:
// [], []
// [1], [1]
// [1, 2], [2, 1]
// [1, 2, 2], [2, 1, 2]
// [9, 3, 15, 20, 7], [9, 15, 7, 20, 3]
