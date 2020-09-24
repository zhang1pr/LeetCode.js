/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  function DFS(i,j,index) {
    if (index == word.length) {
      return true;
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != word[index]) {
      return false;
    }

    const temp = board[i][j];
    board[i][j] = '!';

    for (const [dx,dy] of dir) {
      const x = dx + i;
      const y = dy + j;

      if (DFS(x, y, index + 1)) {
        return true;
      }
    }

    board[i][j] = temp;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (DFS(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

// time:  O(n^2*3^k)
// space: O(1)

// [[]], ''
// [['A']], 'A'
// [['A', 'B']], 'AB'
// [['A', 'A']], 'AAA'
// [['A', 'A'], ['A', 'A']], 'AAAA'
// [['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE'
// [['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ADED'
// [['A', 'B', 'C', 'E'], ['S', 'F', 'E', 'S'], ['A', 'D', 'E', 'E']], 'ABCB'
// [['A', 'B', 'C', 'E'], ['S', 'F', 'E', 'S'], ['A', 'D', 'E', 'E']], 'ABCESEEEFS'
