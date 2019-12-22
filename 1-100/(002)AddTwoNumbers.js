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
var addTwoNumbers = function(l1, l2) {
  let pointer = new ListNode();
  let cur = pointer;
  let carry = 0;
  let v1, v2;
  let value;

  while (l1 || l2 || carry != 0) {
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    } else {
      v1 = 0;
    }

    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    } else {
      v2 = 0;
    }

    value = carry + v1 + v2;

    if (value >= 10) {
      value -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    cur.next = new ListNode(value);
    cur = cur.next;
  }

  return pointer.next;
};

// time:  O(max(m,n))
// space: O(max(m,n))

// test cases:
// [2, 4, 3], [5, 6, 4]
// [], [1, 1]
// [1], [9, 9, 9]

