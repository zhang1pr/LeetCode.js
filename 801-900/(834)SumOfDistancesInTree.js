/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
  const graph = [...Array(n)].map(() => new Set());
  const ans = Array(n).fill(0);
  const count = Array(n).fill(1);

  for (const [a, b] of edges) {
    graph[a].add(b);
    graph[b].add(a);
  }

  function DFS(node, parent) {
    for (const child of graph[node]) {
      if (child != parent) {
        DFS(child, node);
        count[node] += count[child];
        ans[node] += ans[child] + count[child];
      }
    }
  }

  function DFS2(node, parent) {
    for (const child of graph[node]) {
      if (child != parent) {
        ans[child] = ans[node] - count[child] + n - count[child];
        DFS2(child, node);
      }
    }
  }

  DFS(0, -1);
  DFS2(0, -1);

  return ans;
};

// time:  O(n)
// space: O(n)

// 6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]
