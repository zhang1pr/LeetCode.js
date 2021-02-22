class TrieNode {
  constructor() {
    this.children = new Map();
    this.score = 0;
  }
}

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.map = new Map();
  this.root = new TrieNode();
};

// time:  O(1)
// space: O(1)

/**
* @param {string} key
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function(key, val) {
  const delta = val - (this.map.get(key) || 0);
  this.map.set(key, val);

  let cur = this.root;
  cur.score += delta;
  for (const ch of key) {
    if (!cur.children.has(ch)) {
      cur.children.set(ch, new TrieNode());
    }

    cur = cur.children.get(ch);
    cur.score += delta;
  }
};

// time:  O(n)
// space: O(n)

/**
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function(prefix) {
  let cur = this.root;
  for (const ch of prefix) {
    cur = cur.children.get(ch);

    if (cur == null) {
      return 0;
    }
  }

  return cur.score;
};

// time:  O(n)
// space: O(1)

/**
* Your MapSum object will be instantiated and called as such:
* var obj = new MapSum()
* obj.insert(key,val)
* var param_2 = obj.sum(prefix)
*/

// ['MapSum', 'insert', 'sum', 'insert', 'sum', 'insert', 'sum'], [[], ['apple', 3], ['apple'], ['apple', 3], ['apple'], ['apple', 3], ['apple']]
