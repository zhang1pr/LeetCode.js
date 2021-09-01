/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  let preIndex = 0;
  let posIndex = 0;

  function DFS(pre, post) {
    const root = new TreeNode(pre[preIndex]);
    preIndex++;

    if (root.val != post[posIndex]) {
      root.left = DFS(pre, post);
    }

    if (root.val != post[posIndex]) {
      root.right = DFS(pre, post);
    }

    posIndex++;
    return root;
  }

  return DFS(preorder, postorder);
};

// time:  O(n)
// space: O(n)

// [1], [1]
// [1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]
