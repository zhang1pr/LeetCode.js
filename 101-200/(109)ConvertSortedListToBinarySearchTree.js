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
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let cur = head;

  let end = 0;
  while (head != null) {
    end++;
    head = head.next;
  }

  function buildTree(start, end) {
    if (start == end) {
      return null;
    }

    const mid = start + Math.floor((end - start) / 2);

    const left = buildTree(start, mid);
    const root = new TreeNode(cur.val);
    root.left = left;
    cur = cur.next;

    const right = buildTree(mid + 1, end);
    root.right = right;

    return root;
  }

  return buildTree(0, end);
};

// time:  O(n)
// space: O(log(n))

// test cases:
// []
// [1]
// [1, 2]
// [1, 2, 2]
// [-10, -3, 0, 5, 9]
