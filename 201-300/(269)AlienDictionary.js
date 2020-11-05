/**
 * @param {string[]} words
 * @return {string}
 */
class QueueNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return !this.head;
  }

  peek() {
    if (!this.head) {
      return null;
    }

    return this.head.val;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead.val;
  }
}

var alienOrder = function(words) {
  if (words.length === 0) {
    return '';
  }

  const len = words.length;
  const map = {};
  const prereqCount = {};
  const queue = new Queue();
  let res = '';

  for (let i = 0; i < len; i++) {
    const chars = words[i].split('');
    for (const char of chars) {
      if (!map[char]) {
        map[char] = [];
        prereqCount[char] = 0;
      }
    }

    if (i == 0 || words[i] == words[i - 1]) {
      continue;
    }

    const cur = words[i];
    const prev = words[i - 1];

    let j = 0;
    while (j < cur.length && j < prev.length && cur[j] === prev[j]) {
      j++;
    }

    if (j < prev.length && map[prev[j]].indexOf(cur[j]) === -1) {
      map[prev[j]].push(cur[j]);
      prereqCount[cur[j]]++;
    }
  }

  Object.keys(prereqCount).forEach(char => {
    if (prereqCount[char] === 0) {
      queue.enqueue(char);
    }
  });

  while (!queue.isEmpty()) {
    const rootChar = queue.dequeue();

    res += rootChar;

    for (let i = 0; i < map[rootChar].length; i++) {
      const root = map[rootChar][i];
      prereqCount[root]--;

      if (prereqCount[root] === 0) {
        queue.enqueue(root);
      }
    }
  }

  for (const val of Object.values(prereqCount)) {
    if (val != 0) {
      return '';
    }
  }

  return res;
}

// time:  O(v+e)
// space: O(v+e)

// ['z', 'x']
// ['z', 'x', 'z']
// ['wrt', 'wrf', 'er', 'ett', 'rftt']
