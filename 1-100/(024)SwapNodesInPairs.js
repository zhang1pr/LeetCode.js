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
var swapPairs = function(head) {
  const dummy = new ListNode();
  dummy.next = head;

  let probe = dummy;
  while (probe.next && probe.next.next) {
    const first = probe.next;
    const second = probe.next.next
    probe.next = second;
    first.next = second.next;
    second.next = first;

    probe = first;
  }

  return dummy.next;
};

// time:  O(n)
// space: O(1)

// test cases:
// []
// [1]
// [1, 2]
// [1, 2, 3, 4]
// [1, 2, 3, 4, 5]
