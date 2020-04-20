/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 *
 * es6
 * class Node {
 *   constructor(val, nextl, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 *   }
 * }
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head == null) {
    return null;
  }

  let l1 = head;
  let l2 = null;

  while (l1 != null) {
    l2 = new Node(l1.val);
    l2.next = l1.random;
    l1.random = l2;
    l1 = l1.next;
  }

  l1 = head;

  while (l1 != null) {
    l2 = l1.random;
    l2.random = l2.next != null ? l2.next.random : null;
    l1 = l1.next;
  }

  l1 = head;
  const head2 = l1.random;
  while (l1 != null) {
    l2 = l1.random;
    l1.random = l2.next;
    l2.next = l1.next != null ? l1.next.random : null;
    l1 = l1.next;
  }

  return head2;
};

// time:  O(n)
// space: O(1)

// test cases:
// []
// [[1, 1], [2, 1]]
// [[3, null], [3, 0], [3, null]]
// [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
