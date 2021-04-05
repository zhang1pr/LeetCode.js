/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  let cur = root;
  let N = 0;

  while (cur != null) {
    cur = cur.next;
    N++;
  }

  const width = Math.floor(N / k);
  const remainder = N - width * k;

  const res = [];
  cur = root;
  for (let i = 0; i < k; i++) {
    const head = cur;
    for (let j = 0; j < width + (i < remainder ? 1 : 0) - 1; j++) {
      if (cur != null) {
        cur = cur.next;
      }
    }

    if (cur != null) {
      const prev = cur;
      cur = cur.next;
      prev.next = null;
    }

    res.push(head);
  }

  return res;
};

// time:  O(max(n,k))
// space: O(1)

// [1], 5
// [1, 2, 3], 5
// [1, 2, 3, 4], 5
// [1, 2, 3, 4, 5], 5
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3
