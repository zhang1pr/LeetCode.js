/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode();
  let probe = dummy;

  while (l1 && l2) {
    if (l2.val > l1.val) {
      probe.next = l1;
      l1 = l1.next;
    } else {
      probe.next = l2;
      l2 = l2.next;
    }

    probe = probe.next;
  }

  probe.next = l1 ? l1 : l2;

  return dummy.next;
};

// time:  O(m+n)
// space: O(1)

// test cases:
// [], []
// [1], []
// [-1], [1]
// [1, 2, 4], [1, 3, 4]
