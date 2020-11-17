/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
var Solution = function(n_rows, n_cols) {
  this.row = n_rows;
  this.col = n_cols;
  this.total = n_rows * n_cols;
  this.map = new Map();
};

// time:  O(1)
// space: O(1)

/**
* @return {number[]}
*/
Solution.prototype.flip = function() {
  const row = Math.floor(Math.random() * this.total);
  this.total--;

  const i = this.map.get(row) || row;
  this.map.set(row, this.map.get(this.total) || this.total);

  return [Math.floor(i / this.col), i % this.col];
};

// time:  O(1)
// space: O(1)

/**
* @return {void}
*/
Solution.prototype.reset = function() {
  this.map.clear();
  this.total = this.col * this.row;
};

// time:  O(1)
// space: O(1)

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(n_rows, n_cols)
* var param_1 = obj.flip()
* obj.reset()
*/

// ['Solution', 'flip', 'flip', 'flip', 'flip'], [[2, 3], [], [], [], []]
// ['Solution', 'flip', 'flip', 'flip', 'flip'], [[2, 2], [], [], [], []]
// ['Solution', 'flip', 'flip', 'reset', 'flip'], [[1, 2], [], [], [], []]
