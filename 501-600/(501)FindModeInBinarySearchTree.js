/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let curVal;
  let curCount = 0;
  let maxCount = 0;
  let modeCount = 0;
  let modes;

  function handleValue(val) {
    if (val != curVal) {
      curVal = val;
      curCount = 0;
    }

    curCount++;

    if (curCount > maxCount) {
      maxCount = curCount;
      modeCount = 1;
    } else if (curCount == maxCount) {
      if (modes != null) {
        modes.push(curVal);
      }

      modeCount++;
    }
  }

  function inorder(root) {
    let node = root;

    while (node != null) {
      if (node.left == null) {
        handleValue(node.val);
        node = node.right;
      } else {
        let prev = node.left;

        while (prev.right != null && prev.right != node)
          prev = prev.right;
        if (prev.right == null) {
          prev.right = node;
          node = node.left;
        } else {
          prev.right = null;
          handleValue(node.val);
          node = node.right;
        }
      }
    }
  }

  inorder(root);
  modes = [];
  curVal = null;
  inorder(root);
  return modes;
};

// time:  O(n)
// space: O(1)

// []
// [1]
// [1, 1]
// [1, 1, 1]
// [1, null, 2, 2]
