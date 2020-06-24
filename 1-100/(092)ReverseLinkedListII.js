/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (m == n) {
    return head;
  }

  const dummy = new ListNode();
  dummy.next = head;
  let count = 0;

  let p1 = null;
  let p2 = null;
  let pre = dummy;
  let temp;

  while (head != null) {
    count++;
    if (count == m) {
      p1 = pre;
      p2 = head;
    }

    if (count > m && count < n) {
      temp = head.next;
      head.next = pre;
      pre = head;
      head = temp;
      continue;
    }

    if (count == n) {
      p2.next = head.next;
      head.next = pre;
      p1.next = head;
      break;
    }

    head = head.next;
    pre = pre.next;
  }

  return dummy.next;
};

// time:  O(n)
// space: O(1)

// test cases:
// [1], 1, 1
// [1, 2], 1, 2
// [1, 2], 2, 2
// [1, 2, 3], 1, 3
// [1, 2, 3, 4, 5], 2, 4
