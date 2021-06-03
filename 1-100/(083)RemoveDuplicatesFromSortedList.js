/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let cur = head;

  while (cur != null && cur.next != null) {
    if (cur.next.val == cur.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
};

// time:  O(n)
// space: O(1)

// []
// [1]
// [1, 1]
// [1, 1, 2]
// [1, 1, 2, 2, 2]
// [1, 2, 3, 3, 4, 4, 5]
