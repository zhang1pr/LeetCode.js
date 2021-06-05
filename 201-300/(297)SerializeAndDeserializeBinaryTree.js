/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const stack = [root];
  const res = [];

  while (stack.length) {
    const cur = stack.pop();
    if (cur) {
      res.push(cur.val);
      stack.push(cur.right);
      stack.push(cur.left);
    } else {
      res.push('#');
    }
  }

  return res.join(',');
};

// time:  O(n)
// space: O(n)

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  data = data.split(',');
  let index = -1;

  function DFS() {
    index++;

    if (isNaN(data[index])) {
      return null;
    }

    const root = new TreeNode(data[index]);
    root.left = DFS();
    root.right = DFS();
    return root;
  }

  return DFS();
};

// time:  O(n)
// space: O(n)

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// [1, 2, 3, null, null, 4, 5]
