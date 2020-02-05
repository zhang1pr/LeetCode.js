/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = [];
  const board = new Array(n).fill('.'.repeat(n));

  generateBoards(board, 0);

  return result;

  function generateBoards(board, row) {
    if (row == board.length) {
      result.push(board.slice());
    } else {
      for (let column = 0; column < board[row].length; column++) {
        if (isValid(board, row, column)) {
          const string = board[row];
          board[row] = string.slice(0, column) + 'Q' + string.slice(column + 1);
          generateBoards(board.slice(), row + 1);
          board[row] = string;
        }
      }
    }
  }
};

var isValid = function(board, row, column) {
  let i;
  for (i = 0; i < board.length; i++) {
    if (board[i][column] == 'Q') {
      return false;
    }
  }

  let j;
  for (i = row - 1, j = column + 1; i >= 0 && j < board.length; i--, j++) {
    if (board[i][j] == 'Q') {
      return false;
    }
  }

  for (i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] == 'Q') {
      return false;
    }
  }

  return true;
}

// time:  O(n!)
// space: O(n^2)

// test cases:
// 1
// 2
// 3
// 4
// 5
