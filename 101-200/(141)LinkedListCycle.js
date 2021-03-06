
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head == null || head.next == null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

// time:  O(n)
// space: O(1)

// [1], -1
// [1, 2], 0
// [3, 2, 0, 4], 1
