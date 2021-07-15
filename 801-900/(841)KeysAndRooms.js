/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const seen = Array(rooms.length).fill(false);
  seen[0] = true;
  const stack = [0];

  while (stack.length != 0) {
    const node = stack.pop();
    for (const nei of rooms[node]) {
      if (!seen[nei]) {
        seen[nei] = true;
        stack.push(nei);
      }
    }
  }

  for (const room of seen) {
    if (!room) {
      return false;
    }
  }

  return true;
};

// time:  O(n)
// space: O(n)

// [[1], [2], [3], []]
// [[1, 3], [3, 0, 1], [2], [0]]
