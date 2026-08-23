var MagicDictionary = function() {
  this.words = new Set();
  this.cnt = new Map();

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
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
  for (const word of dictionary) {
    this.words.add(word);

    for (const nei of this.generalizedNeighbors(word)) {
      this.cnt.set(nei, (this.cnt.get(nei) || 0) + 1);
    }
  }
};

// time:  O(mn)
// space: O(mn)

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
  for (const nei of this.generalizedNeighbors(searchWord)) {
    const cnt = this.cnt.get(nei) || 0;

    if (cnt > 1 || cnt == 1 && !this.words.has(searchWord)) {
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
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

// ['MagicDictionary', 'buildDict', 'search', 'search', 'search', 'search'], [[], [['hello', 'leetcode']], ['hello'], ['hhllo'], ['hell'], ['leetcoded']]
