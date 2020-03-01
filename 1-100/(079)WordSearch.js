/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const rows = board.length;
  if (rows == 0) {
    return false;
  }

  const cols = board[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (checkExistence(board, i, j, word, 0)) {
        return true;
      }
    }
  }

  return false;
};

var checkExistence = function(board, row, col, word, index) {
  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
    return false;
  }

  if (board[row][col] != word[index]) {
    return false;
  }

  if (index == word.length - 1) {
    return true;
  }

  const temp = board[row][col];
  board[row][col] = '$';

  if (checkExistence(board, row - 1, col, word, index + 1)) {
    return true;
  }

  if (checkExistence(board, row + 1, col, word, index + 1)) {
    return true;
  }

  if (checkExistence(board, row, col - 1, word, index + 1)) {
    return true;
  }

  if (checkExistence(board, row, col + 1, word, index + 1)) {
    return true;
  }

  board[row][col] = temp;

  return false;
}

// time:  O(n^2*3^k)
// space: O(1)

// [[]], ''
// [['A']], 'A'
// [['A', 'B']], 'AB'
// [['A', 'A']], 'AAA'
// [['A', 'A'], ['A', 'A']], 'AAAA'
// [['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE'
// [['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ADED'
