
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  const dummy = new ListNode();
  dummy.next = head;

  let length = 0;
  while (head != null) {
    head = head.next;
    length++;
  }

  let prev;
  let cur;
  let left;
  let right;
  for (let i = 1; i < length; i <<= 1) {
    prev = dummy;
    cur = dummy.next;

    while (cur != null) {
      left = cur;
      right = split(left, i);
      cur = split(right, i);
      prev = merge(left, right, prev);
    }
  }

  return dummy.next;
};

var split = function(head, step) {
  if (head == null) {
    return null;
  }

  for (let i = 1; head.next != null && i < step; i++) {
    head = head.next;
  }

  const right = head.next;
  head.next = null;
  return right;
}

var merge = function(left, right, prev) {
  let cur = prev;
  while (left != null && right != null) {
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }

    cur = cur.next;
  }

  if (left != null) {
    cur.next = left;
  } else if (right != null) {
    cur.next = right;
  }

  while (cur.next != null) {
    cur = cur.next;
  }

  return cur;
}

// time:  O(nlog(n))
// space: O(1)

// [0]
// [1, 2, 3]
// [4, 2, 1, 3]
// [-1, 5, 3, 4, 0]
