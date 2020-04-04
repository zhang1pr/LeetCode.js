/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 *
 * es6
 * class Node {
 *   constructor(val, left, right, next) {
 *     this.val = val === undefined ? null : val;
 *     this.left = left === undefined ? null : left;
 *     this.right = right === undefined ? null : right;
 *     this.next = next === undefined ? null : next;
 *   }
 * }
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  let cur = root;
  let dummy;
  let tail;

  while (cur != null) {
    dummy = new Node();
    tail = dummy;

    while (cur != null) {
      if (cur.left != null) {
        tail.next = cur.left;
        tail = tail.next;
      }

      if (cur.right != null) {
        tail.next = cur.right;
        tail = tail.next;
      }

      cur = cur.next;
    }

    cur = dummy.next;
  }

  return root;
};

  // time:  O(n)
  // space: O(1)

  // test cases:
  // [null]
  // [1]
  // [1, null, 2]
  // [1, 2, null, null, 2]
  // [1, 2, 3, 4, 5, 6, 7]
  // [3, 9, 20, null, null, 15, 7]
