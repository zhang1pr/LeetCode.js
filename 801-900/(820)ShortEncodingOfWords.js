class TrieNode {
  constructor() {
    this.count = 0;
    this.children = new Map();
  }

  addChild(char) {
    if (!this.children.has(char)) {
      this.children.set(char, new TrieNode(char));
    }

    this.count++;
    const childNode = this.children.get(char);

    return childNode;
  }
}

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  const head = new TrieNode();
  const map = new Map();

  for (let i = 0; i < words.length; i++) {
    let cur = head;
    const word = words[i];

    for (let j = word.length - 1; j >= 0; j--) {
      cur = cur.addChild(word[j]);
    }

    map.set(cur, i);
  }

  let ans = 0;
  for (const [key, val] of map) {
    if (key.count == 0) {
      ans += words[val].length + 1;
    }
  }

  return ans;
};


// time:  O(n*wordLen)
// space: O(n*wordLen)

// ['t']
// ['time', 'me', 'bell']
