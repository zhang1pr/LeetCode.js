/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const dummy = new ListNode();
  dummy.next = head;

  let pre = dummy;
  let cur = head;

  while (cur) {
    while (cur && cur.next && cur.val == cur.next.val) {
      cur = cur.next;
    }

    if (pre.next == cur) {
      pre = cur;
    } else {
      pre.next = cur.next;
    }

    cur = pre.next;
  }

  return d.next;
};

// time:  O(n)
// space: O(1)

// []
// [1]
// [1, 1]
// [1, 1, 2]
// [1, 1, 2, 2, 2]
// [1, 2, 3, 3, 4, 4, 5]
