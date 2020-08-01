/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n == 1) {
    return [0];
  }

  const adj = [...new Array(n)].map(() => new Set());

  for (const edge of edges) {
    adj[edge[0]].add(edge[1]);
    adj[edge[1]].add(edge[0]);
  }

  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (adj[i].size == 1) {
      leaves.push(i);
    } 
  }

  let newLeaves;
  while (n > 2) {
    n -= leaves.length;
    
    newLeaves = [];
    for (const i of leaves) {
      for (const j of adj[i]) {
        adj[j].delete(i);

        if (adj[j].size == 1) {
          newLeaves.push(j);
        }
      }
    }

    leaves = newLeaves;
  }

  return leaves;
};

// time:  O(n)
// space: O(n)

// test cases:
// 1, []
// 2, [[0, 1]]
// 4, [[1, 0], [1, 2], [1, 3]]
// 6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]
