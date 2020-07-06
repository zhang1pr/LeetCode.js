
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head == null) {
    return null;
  }

  let pre = null;
  let next;

  while (head != null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  
  return pre;
};

// time:  O(n)
// space: O(1)

// [null]
// [1]
// [1, 2]
// [1, 2, 3, 4, 5]
