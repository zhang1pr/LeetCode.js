/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode();
  dummy.next = head;

  let probe = dummy;
  let target = dummy;

  while (n > 0) {
    n--;
    probe = probe.next;
  }

  while (probe.next != null) {
    probe = probe.next;
    target = target.next;
  }

  target.next = target.next.next;
  return dummy.next;
};

// time:  O(n)
// space: O(1)

// test cases:
// [1], 1
// [1, 2, 3], 3
// [1, 2, 3, 4, 5], 2
