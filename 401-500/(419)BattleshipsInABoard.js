/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  if (board.length == 0) {
    return 0;
  }

  const m = board.length;
  const n = board[0].length;

  let res = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        board[i][j] == '.'
        || i > 0 && board[i - 1][j] == 'X'
        || j > 0 && board[i][j - 1] == 'X'
      ) {
        continue;
      }

      res++;
    }
  }

  return res;
};

// time:  O(mn)
// space: O(1)

// [['.']]
// [['X']]
// [['X', '.', '.', 'X'],['.', '.', '.', 'X'],['.', '.', '.', 'X']]
// [['.', '.', '.', 'X'],['X', 'X', 'X', 'X'],['.', '.', '.', 'X']]
