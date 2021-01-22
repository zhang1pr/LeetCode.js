/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const s1 = [];
  const s2 = [];

  while (l1 != null) {
    s1.push(l1.val);
    l1 = l1.next;
  }

  while (l2 != null) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  let sum = 0;
  let list = new ListNode(0);

  while (s1.length || s2.length) {
    if (s1.length) {
      sum += s1.pop();
    }

    if (s2.length) {
      sum += s2.pop();
    }

    const remainder = sum % 10;
    list.val = remainder;
    sum = (sum - remainder) / 10;

    const head = new ListNode(sum);
    head.next = list;
    list = head;
  }

  return list.val == 0 ? list.next : list;
};

// time:  O(max(m,n))
// space: O(max(m,n))

// [0], [1, 1]
// [1], [9, 9, 9]
// [2, 4, 3], [5, 6, 4]
// [7, 2, 4, 3], [5, 6, 4]
