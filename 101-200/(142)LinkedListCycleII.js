/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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
 * @param {ListNode} head
 * @return {boolean}
 */
var detectCycle = function(head) {
  if (head == null) {
    return null;
  }

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      intersect = slow;
      break;
    }
  }

  if (intersect != slow) {
    return null;
  }

  while (head != intersect) {
    head = head.next;
    intersect = intersect.next;
  }

  return head;
};

// time:  O(n)
// space: O(1)

// test cases:
// [1], -1
// [1, 2], 0
// [3, 2, 0, 4], 1
