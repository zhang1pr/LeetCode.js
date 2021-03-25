/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function(N, blacklist) {
  this.map = new Map();

  for (const b of blacklist) {
    this.map.set(b, -1);
  }

  this.M = N - this.map.size;

  for (const b of blacklist) {
    if (b < this.M) {
      while (this.map.has(N - 1)) {
        N--;
      }

      this.map.set(b, N - 1);
      N--;
    }
  }
};

// time:  O(max(n,b))
// space: O(b)

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  const p = Math.floor(Math.random() * this.M);

  if (this.map.has(p)) {
    return this.map.get(p);
  }

  return p;
};

// time:  O(1)
// space: O(1)

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(N, blacklist)
 * var param_1 = obj.pick()
 */

// ['Solution', 'pick', 'pick', 'pick'], [[1, []], [], [], []]
// ['Solution', 'pick', 'pick', 'pick'], [[2, []], [], [], []]
// ['Solution', 'pick', 'pick', 'pick'], [[3, [1]], [], [], []]
// ['Solution', 'pick', 'pick', 'pick'], [[4, [2]], [], [], []]
