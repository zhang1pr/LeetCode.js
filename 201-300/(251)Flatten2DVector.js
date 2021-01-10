/**
 * @param {number[][]} v
 */
var Vector2D = function(v) {
  this.it = v[Symbol.iterator]();
  this.shift = 0;
  this.row = this.it.next();
};

/**
* @return {number}
*/
Vector2D.prototype.next = function() {
  this.hasNext();

  const res = this.row.value[this.shift];
  this.shift++;
  return res;
};

/**
* @return {boolean}
*/
Vector2D.prototype.hasNext = function() {
  while (!this.row.done && this.shift == this.row.value.length) {
    this.row = this.it.next();
    this.shift = 0;
  }

  return !this.row.done;
};

/**
* Your Vector2D object will be instantiated and called as such:
* var obj = new Vector2D(v)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/

// ['Vector2D', 'hasNext'], [[[[]]], [null]]
// ['Vector2D', 'next', 'next', 'next', 'hasNext', 'hasNext', 'next', 'hasNext'], [[[[1, 2], [3], [4]]], [null], [null], [null], [null], [null], [null], [null]]
