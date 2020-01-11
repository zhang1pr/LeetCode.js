/**
 * Definition for singly-linked list.
 * es5
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 *
 * es6
 * class ListNode {
 *   constructor(val) {
 *     this.val = val;
 *     this.next = null;
 *   }
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const length = lists.length;

  if (!length) {
    return lists;
  }

  let interval = 1;

  while (interval < length) {
    for (let i = 0; i < length - interval; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
    }

    interval *= 2;
  }

  return lists[0] || [];
};

//21. Merge Two Sorted Lists
var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode();
  let probe = dummy;

  while (l1 && l2) {
    if (l2.val > l1.val) {
      probe.next = l1;
      l1 = l1.next;
    } else {
      probe.next = l2;
      l2 = l2.next;
    }

    probe = probe.next;
  }

  probe.next = l1 ? l1 : l2;

  return dummy.next;
};

// time:  O(nlog(k))
// space: O(1)

// test cases:
// []
// [], [], []
// [0], [1], [2]
// [-1], [1]
// [1, 4, 5], [1, 3, 4], [2, 6]
