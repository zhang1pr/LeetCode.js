/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
  const height = getHeight(root);
  const arr = [...Array(height)].map(() => Array(2 ** height - 1).fill(''));

  const res = [];
  divideAndConquer(root, 0, 0, 2 ** height - 1);

  for (const list of arr) {
    res.push(list);
  }

  function divideAndConquer(node, i, left, right) {
    if (node == null) {
      return;
    }

    arr[i][(left + right) >>> 1] = '' + node.val.toString();
    divideAndConquer(node.left, i + 1, left, (left + right) >>> 1);
    divideAndConquer(node.right, i + 1, (left + right + 1) >>> 1, right);
  }

  return res;
};

var getHeight = function(node) {
  if (node == null) {
    return 0;
  }

  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

// time:  O(n*2^n)
// space: O(n)

// [1]
// [1, 2]
// [1, null, 2]
// [1, 2, 3, null, 4]
// [1, 2, 5, 3, null, null, null, 4]
