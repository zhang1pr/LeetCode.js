/**
 * Initialize your data structure here.
 */
var TrieNode = function() {
  this.children = new Array(26);
  this.flag = false;
}

var WordDictionary = function() {
  this.root = new TrieNode();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let cur = this.root;
  let diff;
  
  for (const char of word) {
    diff = char.charCodeAt(0) - 97;

    if (cur.children[diff] == null) {
      cur.children[diff] = new TrieNode();
    }
    
    cur = cur.children[diff];
  }

  cur.flag = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  function searchWord(word, root) {
    let cur = root;

    for (let i = 0; i < word.length; i++) {
      if (word[i] == '.') {
        for (let j = 0; j < 26; j++) {
          if (cur.children[j] != null) {
            if (searchWord(word.slice(i + 1), cur.children[j])) {
              return true;
            }
          }
        }

        return false;
      }

      const diff = word[i].charCodeAt(0) - 97;
      if (!cur.children[diff]) {
        return false;
      }

      cur = cur.children[diff];
    }

    return cur.flag;
  }

  return searchWord(word, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// time:  O(n)
// space: O(1)

// ['WordDictionary', 'addWord', 'addWord', 'addWord', 'search', 'search', 'search', 'search'], [[], ['bad'], ['dad'], ['mad'], ['pad'], ['bad'], ['.ad'], ['b..']]
