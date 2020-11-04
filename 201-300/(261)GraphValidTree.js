/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  const unions = [...Array(n).keys()];

  for (const edge of edges) {
    if (isConnected(unions, edge[1], edge[0])) {
      return false;
    }
  }

  const visited = {};
  let diff = 0;

  for (const union of unions) {
    if (visited[union]) {
      continue;
    }

    visited[union] = true;
    diff++;
  }

  return diff == 1;
};

var isConnected = function(unions, a, b) {
  let group1 = unions[a];
  let group2 = unions[b];

  if (group1 === group2) {
    return true
  }

  for (let i = 0; i < unions.length; i++) {
    if (unions[i] === group2) {
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
