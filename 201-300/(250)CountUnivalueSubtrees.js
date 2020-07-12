/**
Given a binary tree, count the number of uni-value subtrees.
A Uni-value subtree means all nodes of the subtree have the same value.
Example :
Input:  root = [5,1,5,5,5,null,5]
              5
             / \
            1   5
           / \   \
          5   5   5
Output: 4
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countUnivalSubtrees = function(root) {
  let result = 0;

  function DFS(node, obj) {
    if (node == null) {
      return true;
    }
    
    const left = DFS(node.left, obj);
    const right = DFS(node.right, obj);
    
    if (left && right) {
      if (node.left !== null && node.val !== node.left.val) {
        return false;
      }

      if (node.right !== null && node.val !== node.right.val) {
        return false;
      }

      obj.num++
      return true;
    }

    return false;
  }

  DFS(root);
  
  return result;
}

// time:  O(n)
// space: O(n)

// [5, 1, 5, 5, 5, null, 5]
