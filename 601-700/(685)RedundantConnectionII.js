/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
  let can1 = [-1, 1];
  let can2 = [-1, 1];
  const parent = Array(edges.length + 1).fill(0);

  function root(parent, i) {
    while (i != parent[i]) {
      parent[i] = parent[parent[i]];
      i = parent[i];
    }

    return i;
  }

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];

    if (parent[b] == 0) {
      parent[b] = a;
    } else {
      can2 = [a, b];
      can1 = [parent[b], b];
      edges[i][1] = 0;
    }
  }

  for (let i = 0; i < edges.length; i++) {
    parent[i] = i;
  }

  for (let i = 0; i < edges.length; i++) {
    const [father, child] = edges[i];

    if (child == 0) {
      continue;
    }

    if (root(parent, father) == child) {
      if (can1[0] == -1) {
        return edges[i];
      }

      return can1;
    }

    parent[child] = father;
  }

  return can2;
};

// time:  O(n)
// space: O(n)

// [[1, 2], [1, 3], [2, 3]]
// [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
// [[1, 3], [1, 4], [5, 1], [5, 2], [5, 3]]
// [[4, 1], [1, 5], [4, 2], [5, 1], [4, 3]]
