/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  function dfs(i, j, dist) {
    if (i >= 0 && i < rooms.length && j >= 0 && j < rooms[i].length) {
      if (rooms[i][j] == -1 || rooms[i][j] < dist) {
        return;
      }
      
      if (rooms[i][j] > dist) {
        rooms[i][j] = dist; 
      }
      
      dfs(rooms, i + 1, j, dist + 1);
      dfs(rooms, i - 1, j, dist + 1);
      dfs(rooms, i, j + 1, dist + 1);
      dfs(rooms, i, j - 1, dist + 1);
    }
  }
  
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j] === 0) {
        dfs(i, j, 0);
      }
    }
  }
};

// time:  O(n^4)
// space: O(n)

// [[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]]
