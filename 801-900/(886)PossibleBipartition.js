/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  function DFS(graph, src, group, groupMap) {
    if (groupMap[src] == 1 - group) {
      return false;
    }

    if (groupMap[src] == group) {
      return true;
    }

    groupMap[src] = group;

    for (const v of graph[src]) {
      if (!DFS(graph, v, 1 - group, groupMap)) {
        return false;
      }
    }

    return true;
  }

  const graph = [...Array(n)].map(() => []);

  for (const [a, b] of dislikes) {
    graph[a - 1].push(b - 1);
    graph[b - 1].push(a - 1);
  }

  const groupMap = Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    if (groupMap[i] == -1 && !DFS(graph, i, 0, groupMap)) {
      return false;
    }
  }

  return true;
};

// time:  O(n+disLen)
// space: O(n+disLen)

// 3, [[1, 2], [1, 3], [2, 3]]
// 4, [[1, 2], [1, 3], [2, 4]]
// 5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]
