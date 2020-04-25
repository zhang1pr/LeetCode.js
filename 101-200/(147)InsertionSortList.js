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
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (head == null) {
    return head;
  }

  const helper = new ListNode(0);
  let cur = head;
  let pre = helper;
  let next = null;

  while (cur != null) {
    next = cur.next;

    while (pre.next != null && pre.next.val < cur.val) {
      pre = pre.next;
    }

    cur.next = pre.next;
    pre.next = cur;
    pre = helper;
    cur = next;
  }

  return helper.next;
};

// time:  O(n^2)
// space: O(1)

// test cases:
// [0]
// [1, 2 ,3]
// [4, 2, 1, 3]
// [-1, 5, 3, 4, 0]
