/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  const unions = [...Array(n).keys()];

  for (const [a, b] of edges) {
    if (isConnected(unions, a, b)) {
      return false;
    }
  }

  const set = new Set();
  let diff = 0;

  for (const union of unions) {
    if (set.has(union)) {
      continue;
    }

    set.add(union);
    diff++;
  }

  return diff == 1;
};

var isConnected = function(unions, a, b) {
  const group1 = unions[a];
  const group2 = unions[b];

  if (group1 == group2) {
    return true;
  }

  for (let i = 0; i < unions.length; i++) {
    if (unions[i] == group2) {
      unions[i] = group1;
    }
  }

  return false;
}

// time:  O(n)
// space: O(n)

// 0, []
// 1, []
// 2, [[0, 1]]
// 3, [[0, 1]]
// 3, [[0, 1], [0, 2]]
// 3, [[0, 1], [0, 2], [1, 2]]
// 5, [[0, 1], [0, 2], [0, 3], [1, 4]]
// 5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
