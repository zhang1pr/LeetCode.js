/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const rows = board.length;
  if (rows == 0) {
    return;
  }

  const cols = board[0].length;

  function DFS(i, j) {
    if (i < 0 || j < 0 || i == board.length || j == board[0].length) {
      return;
    }
    if (board[i][j] == '*') {
      return;
    }

    if (board[i][j] == 'O') {
      board[i][j] = '*';
      DFS(i + 1, j);
      DFS(i, j + 1);
      DFS(i, j - 1);
      DFS(i - 1, j);
    }
  }

  let i;
  for (i = 0; i < cols; i++) {
    if (board[0][i] == 'O') {
      DFS(0, i);
    }

    if (board[board.length - 1][i] == 'O') {
      DFS(board.length - 1, i);
    }
  }

  for (i = 1; i < rows - 1; i++) {
    if (board[i][0] == 'O') {
      DFS(i, 0);
    }

    if (board[i][board[0].length - 1] == 'O') {
      DFS(i, board[0].length - 1);
    }
  }

  let j;
  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
      if (board[i][j] == '*') {
        board[i][j] = 'O';
      } else if(board[i][j] == 'O'){
        board[i][j] = 'X';
      }
    }
  }
};

// time:  O(mn)
// space: O(mn)

// test cases:
// []
// [['O']
// [['O', 'O'], ['X', 'X']]
// [['X', 'X', 'X'], ['X', 'O', 'X'], ['X', 'X', 'X']]
// [['X', 'X', 'X', 'X"], ['X', 'O', 'O', 'X'], ['X', 'X', 'O', 'X'], ['X', 'O', 'X', 'X]]
