/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function(head) {
  const dummy = new ListNode();
  dummy.next = head;

  let node = head;
  let lastNotNine = dummy;

  while (node) {
    if (node.val !== 9) {
      lastNotNine = node;
    }

    node = node.next
  }

  lastNotNine.val++;
  node = lastNotNine.next;

  while(node) {
    node.val = 0;
    node = node.next;
  }

  return dummy.val == 1 ? dummy : dummy.next;
}

// time:  O(n)
// space: O(1)

// [0]
// [1]
// [9]
// [9, 9]
// [1, 2, 3]
// [1, 2, 4]
// [1, 9, 9]
