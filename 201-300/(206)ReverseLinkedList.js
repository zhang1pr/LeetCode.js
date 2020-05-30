/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * es6
 * class ListNode {
 *   constructor(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 *   }
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head == null) {
    return null;
  }

  let pre = null;
  let next;

  while (head != null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  
  return pre;
};

// time:  O(n)
// space: O(1)

// [null]
// [1]
// [1, 2]
// [1, 2, 3, 4, 5]
