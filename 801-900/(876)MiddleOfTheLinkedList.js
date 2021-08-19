/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// time:  O(n)
// space: O(1)

// [1]
// [1, 2]
// [1, 2, 3]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5, 6]
