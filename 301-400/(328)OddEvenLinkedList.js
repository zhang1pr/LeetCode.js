/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head == null) {
    return head;
  }
    
  let odd = head;
  let even = head.next;
  let temp;

  while (odd.next && odd.next.next) {
    temp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    temp.next = odd.next;
  }
 
  odd.next = even;
  return head;
};

// time:  O(n)
// space: O(1)

// []
// [1]
// [1, 2]
// [1, 2, 3, 4, 5]
// [2, 1, 3, 5, 6, 4, 7]
