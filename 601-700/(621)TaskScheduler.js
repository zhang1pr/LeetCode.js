/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const map = new Map();
  let max = 0;
  let maxCount = 0;
  for (const task of tasks) {
    map.set(task, (map.get(task) || 0) + 1);
    if (max == map.get(task)) {
      maxCount++;
    } else if(max < map.get(task)) {
      max = map.get(task);
      maxCount = 1;
    }
  }

  const partCount = max - 1;
  const partLength = n - maxCount + 1;
  const emptySlots = partCount * partLength;
  const availableTasks = tasks.length - max * maxCount;
  const idles = Math.max(0, emptySlots - availableTasks);

  return tasks.length + idles;
};

// time:  O(n)
// space: O(n)

// ['A', 'A', 'A', 'B', 'B', 'B'], 0
// ['A', 'A', 'A', 'B', 'B', 'B'], 2
// ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2
