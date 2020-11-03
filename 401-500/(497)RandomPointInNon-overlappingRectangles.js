/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
  this.rects = rects;
  this.ranges = [];

  let sum = 0;
  for (const [x1, y1, x2, y2] of rects) {
    sum += (x2 - x1 + 1) * (y2 - y1 + 1);
    this.ranges.push(sum);
  }
};

// time:  O(n)
// space: O(n)

/**
* @return {number[]}
*/
Solution.prototype.pick = function() {
  let n = Math.floor(Math.random() * this.ranges[this.ranges.length - 1]);

  let left = 0;
  let right = this.ranges.length - 1;
  let mid;
  while (left < right) {
    mid = (left + right) >>> 1;

    if (this.ranges[mid] > n) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  const [x1, y1, x2, y2] = this.rects[left];
  const width = x2 - x1 + 1;
  const height = y2 - y1 + 1;
  n = n - this.ranges[left] + height * width;

  const x = n % width + x1;
  const y = n / width + y1;
  return [x, y];
};

// time:  O(log(n))
// space: O(1)

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(rects)
* var param_1 = obj.n()
*/

// ['Solution', 'n', 'n', 'n'], [[[[1, 1, 5, 5]]], [], [], []]
// ['Solution', 'n', 'n', 'n', 'n', 'n'], [[[[-2, -2, -1, -1], [1, 0, 3, 0]]], [], [], [], [], []]
