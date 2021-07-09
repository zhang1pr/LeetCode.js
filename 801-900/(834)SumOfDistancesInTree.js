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

  function dfs(node, parent) {
    for (const child of graph[node]) {
      if (child != parent) {
        dfs(child, node);
        count[node] += count[child];
        ans[node] += ans[child] + count[child];
      }
    }
  }

  function dfs2(node, parent) {
    for (const child of graph[node]) {
      if (child != parent) {
        ans[child] = ans[node] - count[child] + n - count[child];
        dfs2(child, node);
      }
    }
  }

  dfs(0, -1);
  dfs2(0, -1);

  return ans;
};

// time:  O(n)
// space: O(n)

// 6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]
