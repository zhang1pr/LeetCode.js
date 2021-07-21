/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
  function setBit(mask, i) {
    return mask | (1 << i);
  }

  const map = new Map();
  const n = graph.length;

  for (let i = 0; i < n; i++) {
    if (!map.has(i)) {
      map.set(i, []);
    }

    map.set(i, map.get(i).concat(graph[i]));
  }

  const row = 2 ** n;
  const col = n;
  const dist = [...Array(row)].map(() => Array(col).fill(-1));

  let queue = [];

  for (let i = 0; i < n; i++) {
    const lead = i;
    const mask = setBit(0, i);

    queue.push([lead, mask]);
    dist[mask][lead] = 0;
  }

  while (queue.length > 0) {
    const newQueue = [];

    for (const [lead, mask] of queue) {
      if (mask == row - 1) {
        return dist[mask][lead];
      }

      if (map.has(lead)) {
        for (const child of map.get(lead)) {
          const newLead = child;
          const newMask = setBit(mask, newLead);

          if (dist[newMask][newLead] != -1) {
            continue;
          }

          dist[newMask][newLead] = dist[mask][lead] + 1;
          newQueue.push([newLead, newMask]);
        }
      }
    }

    queue = newQueue;
  }
};

// time:  O(n*2^n)
// space: O(n*2^n)

// [[1], [0, 2], [1, 3], [2]]
// [[1, 2, 3], [0], [0], [0]]
// [[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]]
