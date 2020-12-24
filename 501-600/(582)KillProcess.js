/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
  const map = new Map();

  for (let i = 0, len = pid.length; i < len; i++) {
    const child = pid[i];
    const parent = ppid[i];

    let set = map.get(parent);

    if (!set) {
      set = new Set();
    }

    set.add(child);
    map.set(parent, set);
  }

  const res = [];
  let queue = [kill];

  while (queue.length) {
    const newQueue = [];

    for (const item of queue) {
      res.push(item);

      if (map.has(item)) {
        newQueue.push(...map.get(item));
      }
    }

    queue = newQueue;
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [1, 3, 10, 5], [3, 0, 5, 3], 5
