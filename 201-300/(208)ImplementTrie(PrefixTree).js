/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;

  for (const w of word) {
    if (node[w] == null) {
      node[w] = {};
    }
    node = node[w];
  }

  node.isWord = true;
};

Trie.prototype.traverse = function(word) {
  let node = this.root;

  for (const w of word) {
    node = node[w]

    if (node == null) {
      return null;
    }
  }

  return node;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const node = this.traverse(word);
  return node != null && node.isWord == true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return this.traverse(prefix) != null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// time:  O(n)
// space: O(1)

// ['Trie', 'insert', 'search', 'search', 'startsWith', 'insert', 'search'], [[], ['apple'], ['apple'], ['app'], ['app'], ['app'], ['app']]
