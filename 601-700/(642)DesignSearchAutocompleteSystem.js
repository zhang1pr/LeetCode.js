class TrieNode {
  constructor () {
    this.children = new Map();
    this.counts = new Map();
  }
}

class Heap {
  constructor() {
    this.array = [];
  }

  poll() {
    if (this.array.length === 0) {
      return null;
    }

    if (this.array.length === 1) {
      return this.array.pop();
    }

    const item = this.array[0];

    this.array[0] = this.array.pop();
    this.heapifyDown(0);

    return item;
  }

  add(item) {
    this.array.push(item);
    this.heapifyUp(this.array.length - 1);
    return this;
  }

  isEmpty() {
    return this.array.length == 0;
  }

  heapifyUp(childIndex) {
    let parentIndex = Math.floor((childIndex - 1)/2);

    while (parentIndex >= 0 && !this.checkInvariant(this.array[parentIndex], this.array[childIndex])) {
      [this.array[parentIndex], this.array[childIndex]] = [this.array[childIndex], this.array[parentIndex]];
      childIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1)/2);
    }
  }

  heapifyDown(parentIndex) {
    let childIndex1 = parentIndex * 2 + 1;
    let childIndex2 = parentIndex * 2 + 2;
    let nextIndex;

    while (childIndex1 < this.array.length) {
      if (childIndex2 < this.array.length && this.checkInvariant(this.array[childIndex2], this.array[childIndex1])) {
        nextIndex = childIndex2;
      } else {
        nextIndex = childIndex1;
      }

      if (this.checkInvariant(this.array[parentIndex], this.array[nextIndex])) {
        break;
      }

      [this.array[parentIndex], this.array[nextIndex]] = [this.array[nextIndex], this.array[parentIndex]];
      parentIndex = nextIndex;
      childIndex1 = nextIndex * 2 + 1;
      childIndex2 = nextIndex * 2 + 2;
    }
  }

  checkInvariant(a, b) {
    return a[1] == b[1] ? a[0] < b[0] : a[1] > b[1];
  }
}

/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
  this.add = function(sentence, cnt) {
    let curr = this.root;

    for (const char of sentence) {
      let next = curr.children.get(char);
      if (next == null) {
        next = new TrieNode();
        curr.children.set(char, next);
      }

      curr = next;
      curr.counts.set(sentence, (curr.counts.get(sentence) || 0) + cnt);
    }
  }

  this.root = new TrieNode();
  this.prefix = '';

  for (let i = 0; i < sentences.length; i++) {
    this.add(sentences[i], times[i]);
  }
};

// time:  O(n)
// space: O(n)

/**
* @param {character} c
* @return {string[]}
*/
AutocompleteSystem.prototype.input = function(c) {
  if (c == '#') {
    this.add(this.prefix, 1);
    this.prefix = '';
    return [];
  }

  this.prefix += c;
  let curr = this.root;
  for (const char of this.prefix) {
    let next = curr.children.get(char);

    if (next == null) {
      return [];
    }

    curr = next;
  }

  const heap = new Heap();
  for (const [key, val] of curr.counts) {
    heap.add([key, val]);
  }

  const res = [];

  for (let i = 0; i < 3 && !heap.isEmpty(); i++) {
    res.push(heap.poll()[0]);
  }

  return res;
};

// time:  O(n)
// space: O(1)

/**
* Your AutocompleteSystem object will be instantiated and called as such:
* var obj = new AutocompleteSystem(sentences, times)
* var param_1 = obj.input(c)
*/

// ['AutocompleteSystem', 'input', 'input', 'input', 'input'], [[['i love you', 'island', 'iroman', 'i love leetcode'], [5, 3, 2, 2]], ['i'], [' '], ['a'], ['#']]
