/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  class Trie {
    root = {};

    insert(word) {
      let node = this.root;
        
      for (const w of word) {
        if (node[w] == null) {
          node[w] = {};
        }
        node = node[w];
      }
     
      node.word = word;
    }; 
  };

  const trie = new Trie();
  const result = [];

  for (const word of words) {
    trie.insert(word);
  }

  const rows = board.length;
  if (rows == 0) {
    return result;
  }

  const cols = board[0].length;

  function findWord(row, col, node) {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
      return;
    }
    
    const cur = board[row][col];
    
    if (cur == '$' || !node[cur]) {
      return;
    }

    node = node[cur];
    if (node.word) {
      result.push(node.word);
      node.word = null;
    }

    board[row][col] = '$';
    findWord(row - 1, col, node);
    findWord(row + 1, col, node);
    findWord(row, col - 1, node);
    findWord(row, col + 1, node);
    board[row][col] = cur;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      findWord(i, j, trie.root);
    }
  }

  return result;
}

// time:  O(mnw)
// space: O(mnw)

// ['WordDictionary', 'addWord', 'search', 'search', 'search'], [[], ['a'], ['a'], ['b']]
// ['WordDictionary', 'addWord', 'addWord', 'addWord', 'search', 'search', 'search', 'search'], [[], ['bad'], ['dad'], ['mad'], ['pad'], ['bad'], ['.ad'], ['b..']]
