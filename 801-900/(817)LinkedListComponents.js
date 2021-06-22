/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
  const set = new Set(nums);

  let res = 0;
  while (head != null) {
    if (set.has(head.val) && (head.next == null || !set.has(head.next.val))) {
      res++;
    }

    head = head.next;
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [0, 1, 2, 3], [0, 1, 3]
// [0, 1, 2, 3, 4], [0, 3, 1, 4]
