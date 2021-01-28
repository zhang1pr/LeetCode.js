/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  function DFS(i, j, dist) {
    if (i >= 0 && i < rooms.length && j >= 0 && j < rooms[i].length) {
      if (rooms[i][j] == -1 || rooms[i][j] < dist) {
        return;
      }

      if (rooms[i][j] > dist) {
        rooms[i][j] = dist;
      }

      DFS(i + 1, j, dist + 1);
      DFS(i - 1, j, dist + 1);
      DFS(i, j + 1, dist + 1);
      DFS(i, j - 1, dist + 1);
    }
  }

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j] == 0) {
        DFS(i, j, 0);
      }
    }
  }
};

// time:  O(m^2*n^2)
// space: O(mn)

// [[0]]
// [[-1]]
// [[2147483647]]
// [[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]]
