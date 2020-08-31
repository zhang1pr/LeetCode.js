
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA,  headB) {
  if (headA == null || headB == null) {
    return null;
  }

  let a = headA;
  let b = headB;
  while (a != b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
};

// time:  O(m+n)
// space: O(1)

// test cases:
// 0, [], [], 0, 0
// 0, [1], [1], 1, 1
// 1, [1], [1], 0, 0
// 2, [0, 2, 2], [1, 2], 2, 1
// 0, [2, 6, 4], [1, 5], 3, 2
// 2, [0, 9, 1, 2, 4], [3, 2, 4], 3, 1
// 8, [4, 1, 8, 4, 5], [5, 0, 1, 8, 4, 5], 2, 3
