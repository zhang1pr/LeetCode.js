/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k < 2) {
    return head;
  }

  const dummy = new ListNode();
  dummy.next = head;

  let tail = dummy;
  let prev = dummy;
  let temp;
  let cnt;

  while (true) {
    cnt = k;

    while (cnt > 0 && tail) {
      cnt--;
      tail = tail.next;
    }

    if (!tail) {
      return dummy.next;
    }

    head = prev.next;

    while (prev.next != tail) {
      temp = prev.next;
      prev.next = temp.next;
      temp.next = tail.next;
      tail.next = temp;
    }

    tail = head;
    prev = head;
  }
};

// time:  O(n)
// space: O(1)

// [], 1
// [1, 2], 1
// [1, 2, 3], 2
// [1, 2, 3, 4], 2
// [1, 2, 3, 4, 5, 6, 7], 3
