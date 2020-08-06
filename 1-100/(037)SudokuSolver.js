/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  return solve(board, 0, 0);
}

var solve = function(board, row, column) {
  for (let i = row; i < 9; i++) {
    for (let j = column; j < 9; j++) {
      if (board[i][j] != '.') {
        continue;
      }

      for (let num = 1; num <= 9; num++) {
        if (isValid(board, i, j, num.toString())) {
          board[i][j] = num.toString();

          if (solve(board, i, j+1)) {
            return true;
          } else {
            board[i][j] = '.';
          }
        }
      }

      return false;
    }

    column = 0;
  }

  return true;
}

var isValid = function(board, x, y, num) {
  const row = Math.floor(x/3) * 3;
  const column = Math.floor(y/3) * 3;

  for (let i = 0; i < 9; i++) {
    if (board[i][y] == num || board[x][i] == num) {
      return false;
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[row+i][column+j] == num) {
        return false;
      }
    }
  }

  return true;
};

// time:  O(1)
// space: O(1)

// test cases:
// [['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']
