/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
  const n = routes.length;
  const map = new Map();

  for (let i = 0; i < routes.length; i++) {
    for (const j of routes[i]) {
      if (!map.has(j)) {
        map.set(j, new Set());
      }

      map.get(j).add(i);
    }
  }

  let queue = [[source, 0]];
  const set = new Set().add(source);
  const seen = Array(n).fill(false);

  while (queue.length != 0) {
    const newQueue = [];

    for (const [stop, bus] of queue) {
      if (stop == target) {
        return bus;
      }

      for (const i of map.get(stop)) {
        if (seen[i]) {
          continue;
        }

        for (const j of routes[i]) {
          if (!set.has(j)) {
            set.add(j);
            newQueue.push([j, bus + 1]);
          }
        }

        seen[i] = true;
      }
    }

    queue = newQueue;
  }

  return -1;
};

// time:  O(n)
// space: O(n)

// [[1, 2]], 1, 2
// [[1, 2, 7], [3, 6, 7]], 1, 6
// [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12
