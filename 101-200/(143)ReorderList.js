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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head == null || head.next == null || head.next.next == null) {
    return;
  }

  let slow = head;
  let fast = head;

  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let newHead = slow.next;
  slow.next = null;

  newHead = reverseList(newHead);

  let temp;
  while (newHead != null) {
    temp = newHead.next;
    newHead.next = head.next;
    head.next = newHead;
    head = newHead.next;
    newHead = temp;
  }
};

var reverseList = function(head) {
  if (head == null) {
    return null;
  }

  let tail = head;
  head = head.next;

  tail.next = null;

  let temp;
  while (head != null) {
    temp = head.next;
    head.next = tail;
    tail = head;
    head = temp;
  }

  return tail;
};

// time:  O(n)
// space: O(1)

// test cases:
// [1]
// [1, 2]
// [1, 2, 3]
// [1, 2, 3, 4]
// [1, 2, 3, 4, 5]
