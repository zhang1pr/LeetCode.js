/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) {
    return null;
  }

  const dummy = new Node(0, null, head, null);

  const stack = [head];
  let cur = dummy;
  let prev = null;

  while (stack.length != 0) {
    cur = stack.pop();

    if (prev) {
      cur.prev = prev;
      prev.next = cur;
    }

    if (cur.next != null) {
      stack.push(cur.next);
    }

    if (cur.child != null) {
      stack.push(cur.child);
      cur.child = null;
    }

    prev = cur;
  }

  return dummy.next;
};

// time:  O(n)
// space: O(n)

// []
// [1, 2, null, 3]
// [1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12]
