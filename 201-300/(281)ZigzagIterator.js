/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
const ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.queue = [];

  if (v1.length > 0) {
    const it = v1[Symbol.iterator]();
    const res = it.next();
    this.queue.push({ it, res });
  }

  if (v2.length > 0) {
    const it = v2[Symbol.iterator]();
    const res = it.next();
    this.queue.push({ it, res });
  }
}

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.queue.length > 0;
}

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  const { it, res } = this.queue.shift();
  const { value } = res;
  const res1 = it.next();

  if (!res1.done) {
    this.queue.push({ it, res: res1 });
  }

  return value;
}
/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

// time:  O(m+n)
// space: O(1)

// [], []
// [], [1]
// [1], []
// [1], [1]
// [1], [1, 2]
// [1, 2], [3, 4, 5, 6]
