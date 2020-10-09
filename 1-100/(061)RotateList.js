/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head == null) {
    return null;
  }

  let oldTail = head;
  let n = 1;
  while (oldTail.next != null) {
    oldTail = oldTail.next;
    n++;
  }

  oldTail.next = head;
  let newTail = head;
  for (let i = 0; i < n - k % n - 1; i++) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
};

// time:  O(n)
// space: O(1)

// [], 0
// [1], 1
// [1], 2
// [1, 2], 3
// [1, 2], 4
// [1, 2, 3, 4, 5], 2
// [1, 2, 3, 4, 5], 5
