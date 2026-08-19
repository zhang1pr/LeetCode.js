/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
  this.radius = radius;
  this.x_center = x_center;
  this.y_center = y_center;
};

// time:  O(1)
// space: O(1)

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
  const x = (2 * Math.random() - 1) * this.radius;
  const y = (2 * Math.random() - 1) * this.radius;

  if (x * x + y * y > this.radius * this.radius) {
    return this.randPoint();
  } else {
    return [x + this.x_center, y + this.y_center];
  }
};

// time:  O(1)
// space: O(1)

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */

// ['Solution', 'randPoint', 'randPoint', 'randPoint'], [[1, 0, 0], [], [], []]
// ['Solution', 'randPoint', 'randPoint', 'randPoint'], [[10, 5, -7.5], [], [], []]
