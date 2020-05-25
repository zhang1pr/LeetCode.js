/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid == null || grid.length == 0) {
    return 0;
  }
    
  let result = 0;
  const rows = grid.length;
  const cols = grid[0].length;
    
  function DFS(i, j) {
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] == '0') {
      return;
    }
    
    grid[i][j] = '0';

    DFS(i - 1, j);
    DFS(i + 1, j);
    DFS(i, j - 1);
    DFS(i, j + 1);
  }
    
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == '1') {
        result++;
        DFS(i, j);
      }
    }    
  } 
    
  return result;
};

// time:  O(n)
// space: O(1)

// [['0']]
// [['1']]
// [['1', '0'], ['0', '1']]
// [['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]
// [['1', '1', '0', '0', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '1', '0', '0'], ['0', '0', '0', '1', '1']]
