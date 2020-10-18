
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let newHead = dummyHead;

  while (newHead.next != null) {
    next = newHead.next;
    if (next.val == val) {
      newHead.next = next.next;
    } else {
      newHead = newHead.next;
    }
  }

  return dummyHead.next;
};

// time:  O(n)
// space: O(1)

// [1], 0
// [1], 1
// [2, 2], 2
// [2, 1, 2], 2
// [1, 2, 3, 4], 5
// [1, 2, 6, 3, 4, 5, 6], 6
