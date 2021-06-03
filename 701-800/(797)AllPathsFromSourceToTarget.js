/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const end = graph.length - 1;
  const res = [];

  const stack = [0];
  const path = [];

  while (stack.length) {
    const cur = stack[stack.length - 1]
    if (cur == path[path.length - 1]) {
      stack.pop();
      path.pop();
      continue;
    }

    path.push(cur);

    if (cur == end) {
      res.push(path.slice());
      path.pop();
      stack.pop();
      continue;
    }

    for (const nei of graph[cur]) {
      stack.push(nei);
    }
  }

  return res;
};

// time:  O(n!)
// space: O(n^2)

// [[1], []]
// [[1, 2], [3], [3], []]
// [[1, 3], [2], [3], []]
// [[1, 2, 3], [2], [3], []]
// [[4, 3, 1], [3, 2, 4], [3], [4], []]
