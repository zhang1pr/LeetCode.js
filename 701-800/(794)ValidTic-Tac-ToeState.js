/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  let turns = 0;
  let xwin = false;
  let owin = false;
  const rows = [0, 0, 0];
  const cols = [0, 0, 0];
  let diag = 0;
  let antidiag = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == 'X') {
        turns++;
        rows[i]++;
        cols[j]++;
        if (i == j) {
          diag++;
        }

        if (i + j == 2) {
          antidiag++;
        }
      } else if (board[i][j] == 'O') {
        turns--;
        rows[i]--;
        cols[j]--;
        if (i == j) {
          diag--;
        }

        if (i + j == 2) {
          antidiag--;
        }
      }
    }
  }

  xwin = rows.includes(3) || cols.includes(3) || diag == 3 || antidiag == 3;
  owin = rows.includes(-3) || cols.includes(-3) || diag == -3 || antidiag == -3;

  if (xwin && turns == 0 || owin && turns == 1) {
    return false;
  }

  return (turns == 0 || turns == 1) && (!xwin || !owin);
};

// time:  O(1)
// space: O(1)

// ['O  ', '   ', '   ']
// ['XOX', ' X ', '   ']
// ['XXX', '   ', 'OOO']
// ['XOX', 'O O', 'XOX']
