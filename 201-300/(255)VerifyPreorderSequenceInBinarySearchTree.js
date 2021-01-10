/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
  let low = -Infinity;
  let i = -1;

  for (const p of preorder) {
    if (p < low) {
      return false;
    }

    while (i >= 0 && p > preorder[i]) {
      low = preorder[i];
      i--;
    }

    i++;
    preorder[i] = p;
  }

  return true;
}

// time:  O(n)
// space: O(1)

// [5, 2, 6, 1, 3]
// [5, 2, 1, 3, 6]
