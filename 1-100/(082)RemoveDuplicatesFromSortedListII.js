/**
 * Definition for singly-linked list.
 * es5
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 *
 * es6
 * class ListNode {
 *   constructor(val) {
 *     this.val = val;
 *     this.next = null;
 *   }
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const dummy = new ListNode();
  dummy.next = head;
  let node = dummy;

  while (node.next) {
    if (node.next.next && node.next.val === node.next.next.val) {
      let probe = node.next.next.next;
      while (probe && probe.val === node.next.val) {
        probe = probe.next;
      }
      node.next = probe;
    } else {
      node = node.next;
    }
  }
  return dummy.next;
};

// time:  O(n)
// space: O(1)

// test cases:
// []
// [1]
// [1, 1]
// [1, 1, 2]
// [1, 1, 2, 2, 2]
// [1, 2, 3, 3, 4, 4, 5]
