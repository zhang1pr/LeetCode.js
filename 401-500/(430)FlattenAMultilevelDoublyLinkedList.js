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
  let current = dummy;
  let prev = null;

  while (stack.length != 0) {
    current = stack.pop();

    if (prev) {
      current.prev = prev;
      prev.next = current;
    }

    if (current.next != null) {
      stack.push(current.next);
    }

    if (current.child != null) {
      stack.push(current.child);
      current.child = null;
    }

    prev = current;
  }

  return dummy.next;
};

// time:  O(n)
// space: O(n)

// []
// [1, 2, null, 3]
// [1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12]
