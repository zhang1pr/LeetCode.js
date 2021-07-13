/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  const N = graph.length;
  const safe = [...Array(N)].fill(false);

  const ngraph = [...Array(N)].map(() => new Set());
  const rgraph = [...Array(N)].map(() => new Set());

  let queue = [];

  for (let i = 0; i < N; i++) {
    if (graph[i].length == 0) {
      queue.push(i);
    }

    for (const j of graph[i]) {
      ngraph[i].add(j);
      rgraph[j].add(i);
    }
  }

  while (queue.length != 0) {
    const newQueue = [];

    for (const j of queue) {
      safe[j] = true;

      for (const i of rgraph[j]) {
        ngraph[i].delete(j);

        if (ngraph[i].size == 0) {
          newQueue.push(i);
        }
      }
    }

    queue = newQueue;
  }

  const res = [];
  for (let i = 0; i < N; i++) {
    if (safe[i]) {
      res.push(i);
    }
  }

  return res;
};

// time:  O(n^2)
// space: O(n)

// [[1, 2], [2, 3], [5], [0], [5], [], []]
// [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4],[]]
