/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  const nodes = preorder.split(',');
  let diff = 1;

  for (const node of nodes) {
    diff--;
    if (diff < 0) {
      return false;
    }

    if (node == '#') {
      diff += 2;
    }
  }

  return diff == 0;
};

// time:  O(n)
// space: O(1)

// '1,#'
// '9,#,#,1'
// '9,3,4,#,#,1,#,#,2,#,6,#,#'
