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
  if (root == null) {
    return root;
  }

  let leftmost = root;
  let head;
  while (leftmost.left != null) {
    head = leftmost;

    while (head != null) {
      head.left.next = head.right;

      if (head.next != null) {
        head.right.next = head.next.left;
      }

      head = head.next;
    }

    leftmost = leftmost.left;
  }

  return root;
};


// time:  O(n)
// space: O(1)

// test cases:
// [null]
// [1]
// [1, 2, 2]
// [1, 2, 3, 4, 5, 6, 7]
