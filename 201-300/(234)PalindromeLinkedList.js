/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head == null || head.next == null) {
      return true;
  }

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let newHead = null;
  let temp;

  while (slow != null) {
    temp = slow.next;
    slow.next = newHead;
    newHead = slow;
    slow = temp;
  }

  while (newHead != null) {
    if (head.val != newHead.val) {
      return false;
    }

    head = head.next;
    newHead = newHead.next;
  }

  return true;
};

// time:  O(n)
// space: O(1)

// []
// [1]
// [1, 2]
// [1, 2, 2, 1]
// [1, 2, 3, 2, 1]
