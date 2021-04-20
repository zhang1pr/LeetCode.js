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
  let cnt = 0;

  let p1 = null;
  let p2 = null;
  let pre = dummy;
  let temp;

  while (head != null) {
    cnt++;
    if (cnt == m) {
      p1 = pre;
      p2 = head;
    }

    if (cnt > m && cnt < n) {
      temp = head.next;
      head.next = pre;
      pre = head;
      head = temp;
      continue;
    }

    if (cnt == n) {
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

// [1], 1, 1
// [1, 2], 1, 2
// [1, 2], 2, 2
// [1, 2, 3], 1, 3
// [1, 2, 3, 4, 5], 2, 4
