/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  class TrieNode {
    constructor() {
      this.next = Array(26);
      this.index = -1;
      this.list = [];
    }
  }

  const res = [];
  const root = new TrieNode();

  function addWord(root, word, index) {
    for (let i = word.length - 1; i >= 0; i--) {
      let diff = word[i].charCodeAt(0) - 97;

      if (root.next[diff] == null) {
        root.next[diff] = new TrieNode();
      }

      if (isPalindrome(word, 0, i)) {
        root.list.push(index);
      }

      root = root.next[diff];
    }

    root.list.push(index);
    root.index = index;
  }

  for (let i = 0; i < words.length; i++) {
    addWord(root, words[i], i);
  }

  for (let i = 0; i < words.length; i++) {
    search(words, i, root, res);
  }

  return res;
};

var search = function(words, i, root, res) {
  for (let j = 0; j < words[i].length; j++) {
    if (root.index >= 0 && root.index != i && isPalindrome(words[i], j, words[i].length - 1)) {
      res.push([i, root.index]);
    }

    root = root.next[words[i][j].charCodeAt(0) - 97];

    if (root == null) {
      return;
    }
  }

  for (const j of root.list) {
    if (i != j) {
      res.push([i, j]);
    }
  }
};

var isPalindrome = function(word, i, j) {
  while (i < j) {
    if (word[i] != word[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

// time:  O(n*w^2)
// space: O(1)

// ['bat', 'tab', 'cat']
// ['abcd', 'dcba', 'lls', 's', 'sssll']
