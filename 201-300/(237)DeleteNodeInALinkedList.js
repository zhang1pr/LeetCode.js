/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

// time:  O(1)
// space: O(1)

// [4, 5, 1, 9], 4
// [4, 5, 1, 9], 1
