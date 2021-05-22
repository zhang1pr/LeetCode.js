/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const len = graph.length;
  const colors = Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    if (colors[i] != 0) continue;

    let queue = [i];
    colors[i] = 1;

    while (queue.length != 0) {
      const newQueue = [];

      for (const cur of queue) {
        for (const next of graph[cur]) {
          if (colors[next] == 0) {
            colors[next] = -colors[cur];
            newQueue.push(next);
          } else if (colors[next] != -colors[cur]) {
            return false;
          }
        }
      }

      queue = newQueue;
    }
  }

  return true;
};

// time:  O(n^2)
// space: O(n)

// [[]]
// [[],[]]
// [[1], [0, 2], [1]]
// [[1, 2], [0, 2], [0, 1]]
// [[1, 3], [0, 2], [1, 3], [0, 2]]
// [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]
