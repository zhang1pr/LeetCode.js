/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const set = new Set();
  const graph = [...Array(edges.length + 1)].map(() => []);

  function DFS(source, target) {
    if (!set.has(source)) {
      set.add(source);

      if (source == target) {
        return true;
      }

      for (const nei of graph[source]) {
        if (DFS(nei, target)) {
          return true;
        }
      }
    }

    return false;
  }

  for (const [a, b] of edges) {
    set.clear();

    if (graph[a].length && graph[b].length && DFS(a, b)) {
      return [a, b];
    }

    graph[a].push(b);
    graph[b].push(a);
  }
};

// time:  O(n^2)
// space: O(n)

// [[1, 2], [1, 3], [2, 3]]
// [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
