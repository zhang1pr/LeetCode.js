/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
  this.words = new Set();
  this.count = new Map();

  this.generalizedNeighbors = function(word) {
    const res = [];

    const arr = [...word];
    for (let i = 0; i < word.length; i++) {
      const temp = arr[i];
      arr[i] = '*';
      res.push(arr.join(''));
      arr[i] = temp;
    }

    return res;
  }
};

// time:  O(1)
// space: O(1)

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  for (const word of dict) {
    this.words.add(word);

    for (const nei of this.generalizedNeighbors(word)) {
      this.count.set(nei, (this.count.get(nei) || 0) + 1);
    }
  }
};

// time:  O(mn)
// space: O(mn)

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  for (const nei of this.generalizedNeighbors(word)) {
    const count = this.count.get(nei) || 0;

    if (count > 1 || count == 1 && !this.words.has(word)) {
      return true;
    }
  }

  return false;
};

// time:  O(sLen)
// space: O(sLen)

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

// ['MagicDictionary', 'buildDict', 'search', 'search', 'search', 'search'], [[], [['hello', 'leetcode']], ['hello'], ['hhllo'], ['hell'], ['leetcoded']]
