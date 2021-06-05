class TrieNode {
  constructor() {
    this.children = new Map();
  }

  getChild(char) {
    return this.children.get(char);
  }

  addChild(char, isEnd, word) {
    if (!this.children.has(char)) {
      this.children.set(char, new TrieNode(char, isEnd));
    }

    const childNode = this.children.get(char);

    if (isEnd) {
      childNode.word = word;
    }

    return childNode;
  }

  hasChild(char) {
    return this.children.has(char);
  }
}

class Trie {
  constructor() {
    this.head = new TrieNode('');
  }

  addWord(word) {
    let curNode = this.head;

    for (let index = 0; index < word.length; index++) {
      curNode = curNode.addChild(word[index], index == word.length - 1, word);
    }

    return this;
  }
}

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  let res = '';

  const trie = new Trie();

  for (const root of dictionary) {
    trie.addWord(root);
  }

  for (const word of sentence.split(' ')) {
    if (res) {
      res += ' ';
    }

    let cur = trie.head;

    for (const char of word) {
      if (!cur.hasChild(char) || cur.word != null) {
        break;
      }

      cur = cur.getChild(char);
    }

    res += cur.word ? cur.word : word;
  }

  return res;
};

// time:  O(n)
// space: O(n)

// ['a', 'b', 'c'], 'aadsfasf absbs bbab cadsfafs'
// ['ac', 'ab'], 'it is abnormal that this solution is accepted'
// ['cat', 'bat', 'rat'], 'the cattle was rattled by the battery'
// ['catt', 'cat', 'bat', 'rat'], 'the cattle was rattled by the battery'
// ['a', 'aa', 'aaa', 'aaaa'], 'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa'
