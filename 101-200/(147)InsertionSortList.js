
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (head == null) {
    return head;
  }

  const dummy = new ListNode(0);
  let cur = head;
  let pre = dummy;
  let next = null;

  while (cur != null) {
    next = cur.next;

    while (pre.next != null && pre.next.val < cur.val) {
      pre = pre.next;
    }

    cur.next = pre.next;
    pre.next = cur;
    pre = dummy;
    cur = next;
  }

  return dummy.next;
};

// time:  O(n^2)
// space: O(1)

// [0]
// [1, 2, 3]
// [4, 2, 1, 3]
// [-1, 5, 3, 4, 0]
