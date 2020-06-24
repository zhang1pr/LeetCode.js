/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let start = new ListNode();
  let before = start;
  let end = new ListNode();
  let after = end;

  while (head != null) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }

    head = head.next;
  }

  after.next = null;
  before.next = end.next;

  return start.next;
};

// time:  O(n)
// space: O(1)

// test cases:
// [], 0
// [0], 0
// [1, 1], 1
// [2, 1, 0], 2
// [2, 1, 0], 1
// [2, 1, 0], 0
// [1, 4, 3, 2, 5, 2], 3

