/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const rows = board.length;
  if (rows == 0) {
    return;
  }

  const cols = board[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      DFS(r, c, r, c + 1, rows, cols);
      DFS(r, c, r + 1, c + 1, rows, cols);
      DFS(r, c, r + 1, c, rows, cols);
      DFS(r, c, r + 1, c - 1, rows, cols);

      if (board[r][c] >= 5 && board[r][c] <= 7) {
        board[r][c] = 1;
      } else {
        board[r][c] = 0;
      }
    }
  }

  function DFS(rCur, cCur, rNext, cNext, rows, cols) {
    if (rNext < 0 || cNext < 0 || rNext >= rows || cNext >= cols) {
      return;
    }

    if (board[rCur][cCur] % 2 == 1) {
      board[rNext][cNext] += 2;
    }

    if (board[rNext][cNext] % 2 == 1) {
      board[rCur][cCur] += 2;
    }
  }
};

// time:  O(mn)
// space: O(m+n)

// [[0]]
// [[1]]
// [[0, 0]]
// [[0, 1]]
// [[1], [1]]
// [[0], [1]]
// [[0, 1], [1, 0]]
// [[0, 0], [0, 0]]
// [[0,1,0], [0,0,1], [1,1,1], [0,0,0]]
