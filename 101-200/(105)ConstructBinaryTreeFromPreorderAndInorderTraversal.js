/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length == 0) {
    return null;
  }

  const roots = [];
  let preIndex = 0;
  let inIndex = 0;

  let curRoot = new TreeNode(preorder[preIndex]);
  const root = curRoot;
  roots.push(curRoot);
  preIndex++;

  while (preIndex < preorder.length) {
    if (curRoot.val == inorder[inIndex]) {
      while (roots.length != 0 && roots[roots.length-1].val == inorder[inIndex]) {
        curRoot = roots.pop();
        inIndex++;
      }

      curRoot.right = new TreeNode(preorder[preIndex]);
      curRoot = curRoot.right;
      roots.push(curRoot);
      preIndex++;
    } else {
      curRoot.left = new TreeNode(preorder[preIndex]);
      curRoot = curRoot.left;
      roots.push(curRoot);
      preIndex++;
    }
  }

  return root;
};

// time:  O(n)
// space: O(n)

// test cases:
// [], []
// [1], [1]
// [1, 2], [1, 2]
// [1, 2, 2], [2, 1, 2]
// [3, 9, 20, 15, 7], [9, 3, 15, 20, 7]
