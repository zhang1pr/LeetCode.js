class TrieNode {
  constructor() {
    this.children = Array(26).fill(null);
  }

  getChild(val) {
    return this.children[val];
  }

  addChild(val) {
    if (!this.hasChild(val)) {
      this.children[val] = new TrieNode();
    }

    return this.getChild(val);
  }

  hasChild(val) {
    return this.getChild(val) != null;
  }
}

/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
  this.root = new TrieNode();

  for (let weight = 0; weight < words.length; weight++) {
    const word = words[weight] + '{';

    for (let i = 0; i < word.length; i++) {
      let cur = this.root;
      cur.weight = weight;

      for (let j = i; j < 2 * word.length - 1; j++) {
        const k = word[j % word.length][0].charCodeAt(0) - 97;

        if (!cur.hasChild(k)) {
          cur.addChild(k);
        }

        cur = cur.getChild(k);
        cur.weight = weight;
      }
    }
  }
};

// time:  O(n*(maxLen(s)^2))
// space: O(n*(maxLen(s)^2))

/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
  let cur = this.root;

  for (const letter of (suffix + '{' + prefix)) {
    const k = letter.charCodeAt(0) - 97;

    if (!cur.hasChild(k)) {
      return -1;
    }

    cur = cur.getChild(k);
  }

  return cur.weight;
};

// time:  O(m+n)
// space: O(1)

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */

// ['WordFilter', 'f'], [[['apple']], ['a', 'e']]
