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
  let current = head;

  while (current != null && current.next != null) {
    if (current.next.val == current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
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
