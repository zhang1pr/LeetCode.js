/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 */
var Solution = function(radius, xCenter, yCenter) {
  this.radius = radius;
  this.xCenter = xCenter;
  this.yCenter = yCenter;
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
    return [x + this.xCenter, y + this.yCenter];
  }
};

// time:  O(1)
// space: O(1)

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, xCenter, yCenter)
 * var param_1 = obj.randPoint()
 */

// ['Solution', 'randPoint', 'randPoint', 'randPoint'], [[1, 0, 0], [], [], []]
// ['Solution', 'randPoint', 'randPoint', 'randPoint'], [[10, 5, -7.5], [], [], []]
